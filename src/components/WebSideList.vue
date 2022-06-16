<template>
  <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" style='border-radius: 16px; min-height:300px; min-width:160px;'>
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
