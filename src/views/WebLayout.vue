<template>
<q-layout view="lHh Lpr lFf">
    <WebNavbar />
    <q-page-container  style='width:80%; margin: auto;'>
      <router-view />
      <WebFooter />
    </q-page-container>
</q-layout>
</template>
<script setup lang='ts'>
import WebNavbar from '@/components/LayoutItem/WebNavbar.vue';
import WebFooter from '@/components/LayoutItem/WebFooter.vue';
import { ref } from 'vue';

const slide = ref('first');
</script>
