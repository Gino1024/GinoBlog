<template>
<div class="animate__animated animate__fadeIn">
    <WebBanner></WebBanner>
    <HorizonLine />
      <AboutMe :showDetail=false></AboutMe>
    <HorizonLine />
    <SkillResume :skillInfo=skillInfo></SkillResume>
</div>

</template>
<script setup lang='ts'>
import WebBanner from '@/components/AboutMyself/WebBanner.vue';
import AboutMe from '@/components/AboutMyself/AboutMe.vue';
import SkillResume from '@/components/AboutMyself/SkillResume.vue';
import HorizonLine from '@/components/Base/HorizonLine.vue';

import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import GetDataAPI from '@/api/GetDataAPI';

const skillInfo = GetDataAPI.getSkillInfo();

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
