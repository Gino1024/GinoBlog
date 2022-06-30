<template>
  <div class="q-pa-md WebSideList-card-wrap row items-start q-gutter-md">
      <q-card class="my-card WebSideList-card bg-white text-dark">
        <q-card-section class=' side-card-section'>
          <div class="text-h6 text-center card-title">{{props.skillDetailInfo.label}}</div>
        </q-card-section>
        <q-separator ></q-separator>
        <div class="q-mt-sm">
          <q-item-label  v-for='(item,index) in props.skillDetailInfo.children'
          :key="index" class='card-content'>{{item.label}}</q-item-label>
        </div>
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
      width: calc(20%);
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
    .card-text{
      //font-family: 'Roboto';
    }
    .side-card-section{
      // background: linear-gradient(to left,#046767, #84cbcb);
      .card-title{
        font-weight: bold;
        letter-spacing: 1.5px;
      }
    }
    .card-content{
      text-align: center;
      letter-spacing: 1px;
      padding: 5px;
      margin-bottom: 5px;
      transition: .5s;
      &:hover{
        background: #dad9d9;
      }
    }
  }
</style>
