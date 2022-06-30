<template>
  <div class="animate__animated animate__fadeIn q-mt-md">
    <ArticleArea :pageOfCount=5></ArticleArea>
  </div>
</template>
<script setup lang="ts">
import ArticleArea from '@/components/Article/ArticleArea.vue';
import HorizonLine from '@/components/Base/HorizonLine.vue';
import WebBanner from '@/components/AboutMyself/WebBanner.vue';

</script>
<style lang="scss">
  .left{
    flex: 1;
  }

  .right{
    flex: 3;
  }
</style>
