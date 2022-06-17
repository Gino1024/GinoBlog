<template>
  <div class="q-pa-md WebSideList-card-wrap row items-start q-gutter-md">
      <q-card class="my-card WebSideList-card">
        <q-card-section>
          <div class="text-h6 text-center">{{props.skillDetailInfo.label}}</div>
        </q-card-section>

        <q-separator ></q-separator>

        <q-card-actions vertical>
          <q-btn flat  v-for='(item,index) in props.skillDetailInfo.children'
          :key="index">{{item.label}}</q-btn>
        </q-card-actions>
      </q-card>
    </div>
</template>
<script setup lang='ts'>
import { ref, defineProps } from 'vue';

const props = defineProps({
  skillDetailInfo: {
    type: Object,
  },
});
</script>

<style lang='scss'>
  .WebSideList-card-wrap{
    @media screen and (min-width:0px) and (max-width:719px)  {
      margin: 0 auto ;
    }
    @media screen and (min-width:720px) and (max-width:1199px)  {
      width: calc(30%);
      margin-left: 3% ;
    }
    @media screen and (min-width:1200px)  {
      width: calc(15%);
      margin-left: 4.2% ;
    }
  }
  .WebSideList-card{
    border-radius: 16px;
    width: 100%;
    min-height:300px;
    min-width:160px;
    margin-left: 0 !important;
    @media screen and (min-width:680px) and (max-width:719px)  {
      min-width:240px;
      margin: auto;
    }
    @media screen and (min-width:0px) and (max-width:679px)  {
      min-width:300px;
      margin: auto;
    }
  }
</style>
