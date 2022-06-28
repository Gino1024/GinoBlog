<template>
  <div class="q-pa-md ">
    <div class="q-gutter-y-md ma-auto"
        style="max-width:900px;">
      <q-tabs
        v-model="tab"
        dense
        class="bg-teal bg-teal-4 text-white shadow-2"
      >
        <q-tab name="resume" icon="fa-solid fa-book">
        </q-tab>
        <q-tab name="skill" icon="fa-solid fa-child">
        </q-tab>
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="resume">
          <slot name='resume' :showDetail=showDetail ></slot>
        </q-tab-panel>
        <q-tab-panel name="skill">
          <slot name='skill'></slot>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, defineProps } from 'vue';

const props = defineProps({
  tab: String,
});

const tab = ref(props.tab ?? 'resume');
</script>

<style lang="scss">
  .ma-auto{
    margin: auto;
  }
</style>
