<template>
<div class="animate__animated animate__fadeIn">
  <WebBanner></WebBanner>
  <HorizonLine />
  <ArticleArea :pageOfCount=5 />
  <HorizonLine />
  <div class='animation12 invisible' ref="aboutMe">
    <AboutMe :showDetail=false></AboutMe>
  </div>
  <HorizonLine />
  <div class='animation12 invisible' ref="skillResume">
    <SkillResume :skillInfo=skillInfo></SkillResume>
  </div>
</div>

</template>
<script setup lang='ts'>
import WebBanner from '@/components/AboutMyself/WebBanner.vue';
import AboutMe from '@/components/AboutMyself/AboutMe.vue';
import ArticleTags from '@/components/Article/ArticleTags.vue';
import SkillResume from '@/components/AboutMyself/SkillResume.vue';
import HorizonLine from '@/components/Base/HorizonLine.vue';
import ListPagination from '@/components/Base/ListPagination.vue';
import SearchForm from '@/components/Base/SearchForm.vue';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import GetDataAPI from '@/api/GetDataAPI';
import ArticleArea from '@/components/Article/ArticleArea.vue';

const router = useRouter();

const skillInfo = GetDataAPI.getSkillInfo();

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
  .forn-linear-grey{
    font-weight: 400;
    background: linear-gradient(to top, #3a1c71, #666666, #ffaf7b);
    background: -webkit-linear-gradient(to top, #3a1c71, #d76d77, #ffaf7b);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .articleList{
    width: 100%;
    background: white;
    border-radius: 20px;
    margin-top: 30px;
  }

</style>
