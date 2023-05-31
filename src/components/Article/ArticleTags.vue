<template>
  <div class="row NotoSansTC">
    <button class="tags  q-mb-md" v-for="(item, index) in selectList" :key="index"
    :class="{ active : item.isSeleted }"
    @click="setActive(index)">{{item.label}}</button>
  </div>
</template>
<script setup lang="ts">
import
{
  ref,
  defineEmits,
  defineProps,
  watch,
} from 'vue';

interface SelectList {
  label: string,
  isSeleted: boolean,
}

const selectList = ref([{
  label: 'C#',
  isSeleted: false,
},
{
  label: 'Vue',
  isSeleted: false,
},
{
  label: 'Javascript',
  isSeleted: false,
},
{
  label: 'Network',
  isSeleted: false,
},
{
  label: 'SQLServer',
  isSeleted: false,
},
{
  label: 'Design',
  isSeleted: false,
},
{
  label: 'TroubleShooting',
  isSeleted: false,
}]);

const props = defineProps({
  isClear: Boolean,
});
const emit = defineEmits(['Search']);

const setActive = (index: number) => {
  selectList.value[index].isSeleted = !selectList.value[index].isSeleted;
  emit('Search', selectList.value.filter((m) => m.isSeleted === true).map((m) => m.label));
};

const Clear = () => {
  console.log('tags,clear');
  selectList.value.map((item) => {
    const e = item;
    e.isSeleted = false;
    return e;
  });
};

watch(() => props.isClear, (newValue, oldValue) => {
  Clear();
});

</script>
<style lang='scss'>
  .tags{
    cursor: pointer;
    padding: 5px 10px;
    min-width: 60px;
    background: #ffffff;
    border: 1px solid #616161;
    border-radius: 10px;
    color: #616161;
    text-align: center;
    margin-right: 15px;
    transition: .3s;
    margin: 0px 5px;

    @media screen and (max-width:428px) {
      width: 40%;
      margin: 5px auto;
    }

    &:hover{
      background: #000000;
      color: #ffffff;
    }
    &.active{
      background: #000000;
      color: #ffffff;
    }
  }
</style>
