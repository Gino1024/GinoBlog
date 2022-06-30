<template>
<div class="banner">
  <div class='banner-main'>
    <div class="banner-pad JosefinSans ">
      <div>Backend</div><div>Developer</div>
    </div>
    <div class="banner-left bg-base">
      <div class="profile">
        <div class="profile-photo">
          <img alt='profilePhoto' src="../../assets/images/mimi.jpg">
        </div>
        <div class="profile-content NotoSansTC">
          <p>Hi I'm Gino <br><br> 我主要負責是後端工程，從一般的網站開發到前後端分離，
          都有豐富的經驗。工作之餘也喜愛學習跳脫微軟框架的開發技術。</p>
        </div>
      </div>
    </div>
        <div class="banner-right">
          <div class="profile-title JosefinSans">
              <div>Backend</div> <div>Developer</div>
          </div>
        </div>
  </div>
</div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const slide = ref(1);

</script>

<style lang='scss'>

  .banner{
    position: relative;
    width: 100%;
    height: 90vh;
    min-height: 700px;
    border-radius: 10px;
    display: flex;
    align-items: flex-start;
    @media screen and (min-width: 0px) and (max-width: 820px) {

    }
    @media screen and (min-width: 820px) {
      align-items: center;
      margin-top: 0;
    }
    .banner-main{
      position: relative;
      min-height: 480px !important ;
      width: 100%;
      background: white;
      border-radius: 12px;
      @media screen and (min-width: 821px) {
        height: 80vh;
        min-height: 380px;
      }
      .banner-pad{
        display: none;
        padding: 20px 0;
        @media screen and (max-width: 820px) {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13vw;
            letter-spacing: 2px;
            flex-direction: column;
        }
      }
      .banner-left{
        position: relative;
        display: block;
        height: 100%;
        width: 100%;
        border-radius: 12px;
        @media screen and (min-width: 821px) {
          position: absolute;
          left: 0;
          width: 40%;
        }
        .profile{
          margin-top:10%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 75%;
          @media screen and (max-width: 820px) {
            padding: 25px;
            margin: auto;
          }
          .profile-photo{
            display: flex;
            justify-content: center;
            img{
              width:70%;
              min-width: 190px;
              border-radius: 400px;
              border: 3px solid white;
              margin-bottom: 35px;
            }
          }
          .profile-content{
            color: white;
            width: 65%;
            line-height: 1.5;
            font-size: 16px;
            font-weight: bold;
            @media screen and (max-width: 820px) {
              width: 100%;
              font-size: 16px;
            }
          }
        }
      }
      .banner-right{
        @media screen and (min-width: 0px) and (max-width: 820px) {
          display: none;
        }
        position: absolute;
        height: 100%;
        width: 70%;
        background: white;
        border-radius: 12px;
        right: 0;
        .profile-title{
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          font-size: 8vw;
          letter-spacing: 3.5px;
          flex-direction: column;
        }
      }
    }
  }
</style>
