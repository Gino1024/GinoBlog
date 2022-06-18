<template>
  <router-view class="bg-color"/>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
</script>

<style lang='scss'>
@import 'animate.css';
  @font-face {
    font-family: 'Roboto-Bold';
    src: url('./assets/font/Roboto/Roboto-Bold.ttf');
  }
</style>
<style lang='scss'>
.bg-color{
  background: rgb(255, 250, 246) !important;
}
</style>
