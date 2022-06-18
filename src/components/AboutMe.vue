<template>
  <div class="row justify-around wrap" style='width:80%; margin:auto;'>
    <div class="column items-center card-wrap">
      <div class="q-mt-md">
      <WebTimeline :showDetail=showDetail></WebTimeline>
      </div>
    </div>
    <div class="column items-center about-card-wrap">
    <div class="q-mt-xl">
      <q-btn outline class="bg-white text-teal-3
      q-mb-lg" label='Know More' @click='click'></q-btn>
    </div>
    </div>
  </div>
</template>
<script setup leng='ts'>
import WebTimeline from '@/components/WebTimeline.vue';
import { ref, defineProps } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

const props = defineProps({
  showDetail: {
    type: Boolean,
  },
});

const showDetail = ref(props.showDetail ?? true);

const click = () => {
  router.push(
    {
      name: 'self',
      params: { tab: 'resume' },
    },
  );
};
</script>

<style lang='scss'>
  .about-card-wrap{
    width:50%;

    @media screen and (min-width:800px){
      :nth-child(2){
      }
    }

    @media screen and (max-width:799px){
      width: 100% ;
      margin: auto;
    }
  }
</style>
