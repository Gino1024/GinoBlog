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
  @font-face {
    font-family: 'JosefinSans';
    src: url('./assets/font/JosefinSans/JosefinSans-Light.ttf');
  }
  @font-face {
    font-family: 'NotoSansTC';
    src: url('./assets/font/NotoSansTC/NotoSansTC-Light.otf');
  }

  .JosefinSans{
    font-family: JosefinSans, sans-serif;
  }
  .NotoSansTC{
    font-family: NotoSansTC, sans-serif;
  }
  .bg-base{
    background: linear-gradient(to bottom right,#666666, #000000) !important;
  }
  .animation12{
    animation-duration: 1.2s;
  }
  .animation20{
    animation-duration: 2s;
  }
</style>
<style lang='scss'>
.bg-color{
  background: rgb(255, 250, 246) !important;
}
</style>
