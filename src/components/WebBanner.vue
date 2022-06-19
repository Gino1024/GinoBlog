<template>
<div class="banner">
  <div class='banner-main'>
    <div class="banner-pad">
      <div>Backend</div> <div>Developer</div>
    </div>
    <div class="banner-left">
      <div class="profile">
        <div class="profile-photo">
          <img alt='profilePhoto' src="../assets/images/mimi.jpg">
        </div>
        <div class="profile-content">
          <p>目前有四年.Net程式開發經驗，從一般的網站開發到前後端分離，都有豐富的經驗。工作之餘也喜愛學習跳脫微軟框架的開發技術。</p>
        </div>
      </div>
    </div>
        <div class="banner-right">
          <div class="profile-title">
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
    border-radius: 10px;
    display: flex;
    align-items: flex-start;
    margin-top: 25px;
    min-height: 600px;
    @media screen and (min-width: 820px) {
      align-items: center;
      margin-top: 0;
    }
    .banner-main{
      position: relative;
      min-height: 60vh ;
      width: 100%;
      background: white;
      border-radius: 12px;
      @media screen and (min-width: 820px) {
        height: 70vh;
        min-height: 380px;
      }
      .banner-pad{
        display: none;
        @media screen and (max-width: 820px) {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            font-family: 'Roboto-Bold';
            font-size: 13vw;
            letter-spacing: 2px;
            flex-direction: column;
            div{
              margin: 5px;
            }
        }
      }
      .banner-left{
        position: relative;
        display: block;
        height: 100%;
        width: 100%;
        background: linear-gradient(45deg,#046767, #84cbcb);
        border-radius: 12px;
        @media screen and (min-width: 820px) {
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
              width:55%;
              border-radius: 400px;
              border: 3px solid white;
              margin-bottom: 15px;
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
          font-family: 'Roboto-Bold';
          font-size: 7vw;
          letter-spacing: 2px;
          flex-direction: column;
          div{
            margin: 5px;
          }
        }
      }
    }
  }
</style>
