<template>
<div>
  <div class="q-pa-md row justify-around wrap">
    <q-card class="my-card q-ml-md q-mb-md"  >
      <q-img
        src="../assets/images/05.jpg"
      ></q-img>

      <q-card-section>
        <div class="text-overline text-orange-9">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>
    </q-card>
    <q-card class="my-card q-ml-md q-mb-md">
      <q-img
        src="../assets/images/05.jpg"
      ></q-img>

      <q-card-section>
        <div class="text-overline text-orange-9">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>
    </q-card>
    <q-card class="my-card q-ml-md q-mb-md">
      <q-img
        src="../assets/images/05.jpg"
      ></q-img>

      <q-card-section>
        <div class="text-overline text-orange-9">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>
    </q-card>
  </div>
</div>

</template>
<script setup lang='ts'>
import { ref } from 'vue';

const slide = ref('style');
const lorm = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.';
const expanded = ref(false);
</script>
<style lang='scss'>
  .my-card{
    max-width: 33%;
    margin: auto;
  }
</style>
