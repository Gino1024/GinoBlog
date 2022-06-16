<template>
<div style='width:80%; margin:auto; border-radius:12px;'>
  <div class="flex justify-start">
    <WebSideList style='' v-for='(item,index) in props.skillInfo'
    :key="index" :skillDetailInfo=item></WebSideList>
  </div>
  <div class="q-mt-lg row reverse">
    <q-btn label='Know More' @click='click'></q-btn>
  </div>
</div>

</template>
<script setup lang='ts'>
import { ref, defineProps } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import WebSideList from './WebSideList.vue';

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
