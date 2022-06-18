<template>
<div class="animate__animated animate__fadeIn animation12" style='width:80%; margin: auto;'>
  <WebBanner></WebBanner>
  <HorizonLine />
  <ArticleList :articleData=articleData></ArticleList>
  <HorizonLine />
  <div class='animation12 invisible' ref="aboutMe">
    <AboutMe :showDetail=false></AboutMe>
  </div>
  <HorizonLine />
  <div class='animation12 invisible' ref="skillResume">
    <SkillResume :skillInfo=skillInfo></SkillResume>
  </div>
  <!-- <WebFullCard @click="click" class="bg-color" style='cursor: pointer;' ></WebFullCard> -->
  <!-- <WebTree :skillInfo=skillInfo></WebTree> -->
  <HorizonLine />
</div>

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
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import GetDataAPI from '@/api/GetDataAPI';

const router = useRouter();

const skillInfo = GetDataAPI.getSkillInfo().default;
const articleData = GetDataAPI.getArticleData().default;

const click = () => {
  router.push(
    {
      name: 'self',
      params: { tab: 'skill' },
    },
  );
};

const aboutMe = ref();
const skillResume = ref();

let isShowAboutMe = false;
let isShowSkill = false;
const viewportWidth = document.documentElement.scrollWidth;
document.addEventListener('scroll', (e) => {
  const lastKnowScrollPosition = window.scrollY;
  console.log(lastKnowScrollPosition);
  if (lastKnowScrollPosition > 320 && !isShowAboutMe) {
    isShowAboutMe = true;
    aboutMe.value.classList.remove('invisible');
    aboutMe.value.classList.add('animate__animated', 'animate__fadeInUp');
  }

  if (viewportWidth < 996 && lastKnowScrollPosition > 1700 && !isShowSkill) {
    isShowSkill = true;
    skillResume.value.classList.remove('invisible');
    skillResume.value.classList.add('animate__animated', 'animate__fadeInUp');
  } else if (viewportWidth >= 996 && lastKnowScrollPosition > 1000 && !isShowSkill) {
    isShowSkill = true;
    skillResume.value.classList.remove('invisible');
    skillResume.value.classList.add('animate__animated', 'animate__fadeInUp');
  }
});
</script>
<style lang='scss'>
  .animation12{
    animation-duration: 1.2s;
  }
  .forn-linear-grey{
    font-weight: 400;
    background: linear-gradient(to top, #3a1c71, #666666, #ffaf7b);
    background: -webkit-linear-gradient(to top, #3a1c71, #d76d77, #ffaf7b);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
</style>
