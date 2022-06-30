<template>
    <q-header elevated class='bg-white'>
      <q-toolbar>
        <q-btn
          v-if='false'
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class= 'text-grey-8'
        />
        <q-toolbar-title class="flex justify-center">
          <q-item>
          <router-link to="/Blog" class="link text-grey-8 link JosefinSans">
            Blog
          </router-link>
          <router-link to="/AboutMe" class="link text-grey-8 link JosefinSans q-ml-xl">
            AboutMe
          </router-link>
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
        <q-item-label header class="JosefinSans">Hello world !!</q-item-label>
        <q-item clickable target="_self" rel="noopener" :to='`/Blog`'>
            <q-item-section avatar>
              <q-icon name="article" />
            </q-item-section>
            <q-item-section>
              <q-item-lab class="JosefinSans">Blog</q-item-lab>
            </q-item-section>
          </q-item>
        <q-item clickable target="_self" rel="noopener" :to='`/AboutMe`'>
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="NotoSansTC">AboutMe</q-item-label>
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
    letter-spacing: 1.5px;
    font-weight: bold;
    padding: 5px;
    text-decoration: none;
    border-radius: 10px;
    transition: .5s ;
    &.active{
      //color: rgb(187, 187, 187) !important;
      color: rgb(99, 115, 204) !important;
    }
    &:hover{
      border-radius: 10px;
      background: #c6c6c6;
    }
  }
</style>
