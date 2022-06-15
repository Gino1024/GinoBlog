<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="1" img-src="../assets/images/04.jpg"></q-carousel-slide>
      <q-carousel-slide :name="2" img-src="../assets/images/03.jpg"></q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const slide = ref(1);

</script>
