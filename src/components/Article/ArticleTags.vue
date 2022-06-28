<template>
  <div class="row NotoSansTC">
    <button class="tags" v-for="(item, index) in selectList" :key="index"
    :class="{ active : item.isSeleted }"
    @click="setActive(index)">{{item.label}}</button>
  </div>
</template>
<script setup lang="ts">
import { ref, defineEmits } from 'vue';

interface SelectList {
  label: string,
  isSeleted: boolean,
}

const selectList = ref([{
  label: 'C#',
  isSeleted: false,
},
{
  label: 'Vue',
  isSeleted: false,
},
{
  label: 'Javascript',
  isSeleted: false,
},
{
  label: 'Network',
  isSeleted: false,
}]);

const emit = defineEmits(['Search']);

const setActive = (index: number) => {
  selectList.value[index].isSeleted = !selectList.value[index].isSeleted;
  emit('Search', selectList.value.filter((m) => m.isSeleted === true).map((m) => m.label));
};
</script>
<style lang='scss'>
  .tags{
    cursor: pointer;
    padding: 5px 10px;
    min-width: 60px;
    background: #ffffff;
    border: 1px solid #80CBC4;
    border-radius: 10px;
    color: #80CBC4;
    text-align: center;
    margin-right: 15px;
    transition: .2s;
    &:hover{
      background: #80CBC4;
      color: #ffffff;
    }
    &.active{
      background: #80CBC4;
      color: #ffffff;
    }
  }
</style>
