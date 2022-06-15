<template>
<q-layout view="lHh Lpr lFf" class='bg-white'>
  <WebNavbar />
    <q-page-container>
      <router-view />
      <WebFooter class="bg-color" />
    </q-page-container>
</q-layout>
</template>
<script setup lang='ts'>
import WebNavbar from '@/components/WebNavbar.vue';
import WebFooter from '@/components/WebFooter.vue';
import { ref } from 'vue';

console.log('weblayout');

const slide = ref('first');
</script>

<style lang='scss'>
.bg-color{
  background: rgb(255, 250, 246) !important;
}
</style>
