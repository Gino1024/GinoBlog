<template>
  <WebBanner class="bg-color"></WebBanner>
  <HorizonLine />
  <WebCards class="bg-color"></WebCards>
  <HorizonLine />
  <WebFullCard @click="click" class="bg-color" style='cursor: pointer;' ></WebFullCard>
  <HorizonLine />
</template>
<script setup lang='ts'>
import WebBanner from '@/components/WebBanner.vue';
import WebCards from '@/components/WebCards.vue';
import WebFullCard from '@/components/WebFullCard.vue';
import HorizonLine from '@/components/HorizonLine.vue';
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

onMounted(() => {
  console.log('create home');
});

const click = () => {
  console.log('useRouter', useRouter);
  console.log('useRoute', useRoute);
  router.push(
    {
      name: 'self',
      params: { tab: 'skill' },
    },
  );
};
</script>
