<template>
  <div class="flex NotoSansTC">
    <WebCardList style='' v-for='(item,index) in props.skillInfo'
    :key="index" :skillDetailInfo=item></WebCardList>
  </div>
  <div class="q-mt-xl row justify-center">
    <q-btn outline class="bg-white JosefinSans"  label='Know More' @click='click'></q-btn>
  </div>

</template>
<script setup lang='ts'>
import { ref, defineProps } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import WebCardList from './WebCardList.vue';

const router = useRouter();
const props = defineProps({
  skillInfo: {
    type: Object,
  },
});

const click = () => {
  router.push(
    {
      name: 'self',
      params: { tab: 'skill' },
    },
  );
};
</script>
