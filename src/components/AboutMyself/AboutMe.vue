<template>
  <div class="row justify-around wrap" style='width:80%; margin:auto;'>
    <div class="column items-center card-wrap">
      <div class="q-mt-md">
      <WebTimeline :showDetail=showDetail></WebTimeline>
      </div>

      <q-btn v-if='false' outline class="bg-white
      q-mb-lg JosefinSans" label='Know More' @click='click'></q-btn>
    </div>
  </div>
</template>
<script setup leng='ts'>
import WebTimeline from '@/components/AboutMyself/WebTimeline.vue';
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
