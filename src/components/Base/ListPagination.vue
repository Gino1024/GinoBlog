<template>
    <q-pagination
      v-model="currentPage"
      :max=totalPage
      direction-links
      push
      color="teal"
      style="margin:35px 0 0 0"
      @click="Paging"
    ></q-pagination>
</template>
<script setup lang='ts'>
import { ref, defineEmits, defineProps } from 'vue';

const props = defineProps({
  totalPage: Number,
});
const currentPage = ref(1);
const emit = defineEmits(['paging']);

const Paging = () => {
  emit('paging', currentPage.value);
};
</script>
