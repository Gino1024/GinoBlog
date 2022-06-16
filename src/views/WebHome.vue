<template>
  <WebBanner></WebBanner>
  <HorizonLine />
  <ArticleList></ArticleList>
  <HorizonLine />
  <AboutMe :showDetail=false></AboutMe>
  <HorizonLine />
  <SkillResume :skillInfo=skillInfo></SkillResume>
  <!-- <WebFullCard @click="click" class="bg-color" style='cursor: pointer;' ></WebFullCard> -->
  <!-- <WebTree :skillInfo=skillInfo></WebTree> -->
  <HorizonLine />

</template>
<script setup lang='ts'>
import WebBanner from '@/components/WebBanner.vue';
import AboutMe from '@/components/AboutMe.vue';
import WebCards from '@/components/WebCards.vue';
import WebFullCard from '@/components/WebFullCard.vue';
import ArticleList from '@/components/ArticleList.vue';
import WebTree from '@/components/WebTree.vue';
import SkillResume from '@/components/SkillResume.vue';
import HorizonLine from '@/components/HorizonLine.vue';
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import ProfileInfoAPI from '@/api/ProfileInfoAPI';

const router = useRouter();

const skillInfo = ProfileInfoAPI.getSkillInfo().default;
console.log('webhome', skillInfo.default);
const click = () => {
  router.push(
    {
      name: 'self',
      params: { tab: 'skill' },
    },
  );
};
</script>
