<template>
<div class="animate__animated animate__fadeIn animation-duration ">
  <WebTabs :tab=tab>
    <template #resume>
      <WebTimeline :showDetail=showDetail></WebTimeline>
    </template>
    <template #skill>
      <div>
        <img src="../assets/images/mySkill.png" alt='skill' style='width:100%;'/>
      </div>
    </template>
  </WebTabs>
</div>
</template>
<script setup lang='ts'>
import AboutMe from '@/components/AboutMyself/AboutMe.vue';
import WebTimeline from '@/components/AboutMyself/WebTimeline.vue';
import WebTabs from '@/components/AboutMyself/WebTabs.vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const { tab } = route.params;

const showDetail = true;
</script>
<style lang='scss'>
  .animation12{
    animation-duration: 1.2s;
  }
</style>
