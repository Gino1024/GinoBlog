<template>
  <WebBanner></WebBanner>
  <HorizonLine />
  <AboutMe :showDetail=false></AboutMe>
  <HorizonLine />
  <WebFullCard @click="click" class="bg-color" style='cursor: pointer;' ></WebFullCard>
  <HorizonLine />
</template>
<script setup lang='ts'>
import WebBanner from '@/components/WebBanner.vue';
import AboutMe from '@/components/AboutMe.vue';
import WebCards from '@/components/WebCards.vue';
import WebFullCard from '@/components/WebFullCard.vue';
import HorizonLine from '@/components/HorizonLine.vue';
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

const click = () => {
  router.push(
    {
      name: 'self',
      params: { tab: 'skill' },
    },
  );
};
</script>
