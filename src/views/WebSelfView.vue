<template>
  <div class="animate__animated animate__fadeIn">
    <AboutMe :showDetail=false></AboutMe>
  </div>
  <HorizonLine />
  <div>
    <SkillResume :skillInfo=skillInfo></SkillResume>
  </div>
</template>
<script setup lang='ts'>

import AboutMe from '@/components/AboutMyself/AboutMe.vue';
import SkillResume from '@/components/AboutMyself/SkillResume.vue';
import HorizonLine from '@/components/Base/HorizonLine.vue';

import { useRoute, useRouter } from 'vue-router';

import GetDataAPI from '@/api/GetDataAPI';

const skillInfo = GetDataAPI.getSkillInfo();

</script>
<style lang='scss'>
  .animation12{
    animation-duration: 1.2s;
  }
</style>
