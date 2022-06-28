<template>
  <div class="row items-center justify-center column  q-mb-md">
    <div class="q-mb-md" style='width:50%;'>
      <q-input @keyup.enter="Search"
      standout="bg-teal-3 text-white" label="Title" v-model="title"></q-input>
    </div>
    <div class="q-mb-md ">
      <q-btn color="primary" @click="Search" icon="fas fa-search" title='查詢'></q-btn>
      <q-btn color="red" @click="Clear" class="q-ml-md"
      icon="fa-solid fa-trash-can" title='清除'></q-btn>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['Search', 'Clear']);
const title = ref('');

const Search = () => {
  emit('Search', title.value);
};

const Clear = () => {
  title.value = '';
  emit('Clear');
};
</script>
