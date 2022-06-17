<template>
  <div class="flex">
    <WebSideList style='' v-for='(item,index) in props.skillInfo'
    :key="index" :skillDetailInfo=item></WebSideList>
  </div>
  <div class="q-mt-xl row reverse">
    <q-btn outline class="bg-white text-teal-3"  label='Know More' @click='click'></q-btn>
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
