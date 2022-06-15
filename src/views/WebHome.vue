<template>
  <WebBanner class="bg-color"></WebBanner>
  <q-item class="q-mt-xl">
  <div style="margin-top:25px; background-image:url('https://www.dogcatstar.com/wp-content/themes/dogcatstar/images/dot.png');
      background-repeat:repeat-x;position:relative;top:-15px;
      height:6px;width:90%;margin:0 auto 0 auto;"></div>
  </q-item>
  <WebCards class="bg-color"></WebCards>
  <q-item class="q-mt-xl">
  <div style="margin-top:25px; background-image:url('https://www.dogcatstar.com/wp-content/themes/dogcatstar/images/dot.png');
      background-repeat:repeat-x;position:relative;top:-15px;
      height:6px;width:90%;margin:0 auto 0 auto;"></div>
  </q-item>
  <WebFullCard @click="click" class="bg-color" style='cursor: pointer;' ></WebFullCard>
  <q-item class="q-mt-xl">
  <div style="margin-top:25px; background-image:url('https://www.dogcatstar.com/wp-content/themes/dogcatstar/images/dot.png');
      background-repeat:repeat-x;position:relative;top:-15px;
      height:6px;width:90%;margin:0 auto 0 auto;"></div>
  </q-item>
</template>
<script setup lang='ts'>
import WebBanner from '@/components/WebBanner.vue';
import WebCards from '@/components/WebCards.vue';
import WebFullCard from '@/components/WebFullCard.vue';
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

onMounted(() => {
  console.log('create home');
});

const click = () => {
  console.log('useRouter', useRouter);
  console.log('useRoute', useRoute);
  router.push({ path: '/self' });
};
</script>

<style lang='scss'>
.bg-color{
  background: rgb(255, 250, 246) !important;
}
</style>
