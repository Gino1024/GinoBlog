<template>
  <div class="q-ma-auto">
    <SearchForm @Search='Search' @Clear='Clear'></SearchForm>
  </div>
  <div class="row justify-center">
    <ArticleTags :isClear=isClear @Search='TagSearch'></ArticleTags>
  </div>
  <div class="articleList q-mt-md bg-white">
    <ArticleList :articleData=articleData></ArticleList>
  </div>
  <div class="row justify-center">
    <ListPagination :totalPage=totalPage @paging='Paging'></ListPagination>
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue';
import ArticleList from '@/components/Article/ArticleList.vue';
import ArticleTags from '@/components/Article/ArticleTags.vue';
import ListPagination from '@/components/Base/ListPagination.vue';
import SearchForm from '@/components/Base/SearchForm.vue';
import GetDataAPI from '@/api/GetDataAPI';
import { ArticleData } from '@/api/Models/ArticleData';
import { useQuasar } from 'quasar';

const emptyArr : string[] = [];
const $q = useQuasar();
const props = defineProps({
  pageOfCount: Number,
});

const page = ref(1);
const totalPage = ref(1);

const title = ref('');
const articleData = ref({});
const tags = ref([]);
const isClear = ref(false);

const notify = (_message:string, _color:string) => {
  $q.notify({
    message: _message,
    color: _color,
    position: 'top-right',
  });
};

const GetData = (_title : string, _page : number, _tags: string[], isShowMessage = false)
: void => {
  const data = GetDataAPI.getArticleData();
  const result = data
    .filter((m) => m.title.toLowerCase().indexOf(_title.toLowerCase()) > -1
      && (m.tags.some((n) => _tags.includes(n)) || _tags.length === 0));
  if (isShowMessage && result.length === 0) {
    notify('查無資料', 'red');
  }
  totalPage.value = Math.ceil(result.length / props.pageOfCount);
  const articleDatas = result.splice((_page - 1) * props.pageOfCount, props.pageOfCount);
  articleData.value = articleDatas;
  if (isShowMessage) {
    notify('查詢成功', 'green');
  }

  // const data = GetDataAPI.getArticleData().then((res) => {
  //   const result = res.data.data
  //     .filter((m) => m.title.toLowerCase().indexOf(_title.toLowerCase()) > -1
  //     && (m.tags.some((n) => _tags.includes(n)) || _tags.length === 0));
  //   if (isShowMessage && result.length === 0) {
  //     notify('查無資料', 'red');
  //   }
  //   totalPage.value = Math.ceil(result.length / props.pageOfCount);
  //   const articleDatas = result.splice((_page - 1) * props.pageOfCount, props.pageOfCount);
  //   articleData.value = articleDatas;
  //   if (isShowMessage) {
  //     notify('查詢成功', 'green');
  //   }
  // });
};

const Search = (_title : string) => {
  title.value = _title;
  page.value = 1;
  GetData(title.value, page.value, emptyArr, true);
};
const TagSearch = (_tags : string[]) => {
  GetData(title.value, page.value, _tags, false);
};
const Clear = () => {
  isClear.value = !isClear.value;
  title.value = '';
  page.value = 1;
  GetData(title.value, page.value, emptyArr, false);
};
const Paging = (_page : number) => {
  page.value = _page;
  GetData(title.value, page.value, emptyArr);
};

onMounted(() => {
  GetData(title.value, page.value, emptyArr);
});

</script>
