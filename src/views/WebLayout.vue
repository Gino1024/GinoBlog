<template>
<q-layout view="lHh Lpr lFf">
  <WebNavbar />
    <q-page-container>
      <router-view />
      <WebFooter />
    </q-page-container>
</q-layout>
</template>
<script setup lang='ts'>
import WebNavbar from '@/components/WebNavbar.vue';
import WebFooter from '@/components/WebFooter.vue';
import { ref } from 'vue';

const slide = ref('first');
</script>
