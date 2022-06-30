<template>
  <div class="row items-center justify-center column  q-mb-md">
    <div class="q-mb-md" style='width:50%; min-width:300px;'>
      <q-input @keyup.enter="Search"
      standout="bg-grey-8 text-white" label="Title" v-model="title"></q-input>
    </div>
    <div class="JosefinSans q-mb-md ">
      <q-btn @click="Search" class='bg-base text-white'
      title='Search'><span class='q-ml-xs txt'>
        <q-icon size='xs' name='fas fa-search' color='white'></q-icon>
        Search</span></q-btn>
      <q-btn @click="Clear" class="q-ml-md bg-red-4 text-white"
      title='Clear'><span class='q-ml-xs txt'>
        <q-icon size='xs' name='fa-solid fa-trash-can' color='white'></q-icon>
        Clear</span></q-btn>
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

<style lang='scss'>
.txt{
  font-weight: bold;
}
</style>
