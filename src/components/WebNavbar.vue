<template>
    <q-header elevated class='bg-white'>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class= 'text-grey-8'
        />
        <q-toolbar-title>
          <q-item>
          <router-link to="`/home`" class="text-grey-8 link">Web App</router-link>
          </q-item>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Hello world</q-item-label>
        <q-item clickable target="_self" rel="noopener" :to='`/home`'>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-lab>首頁</q-item-lab>
          </q-item-section>
        </q-item>
        <q-item clickable target="_self" rel="noopener" :to='`/self`'>
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-lab>介紹</q-item-lab>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const leftDrawerOpen = ref(false);
</script>

<style lang='scss'>
  .link{
    text-decoration: none;
  }
</style>
