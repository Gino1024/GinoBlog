<template>
  <div class="q-pa-md row q-col-gutter-sm">
    <q-tree class="col-12 col-sm-6"
      :nodes="skillInfo"
      node-key="label"
      tick-strategy="leaf"
      v-model:selected="selected"
      v-model:ticked="ticked"
      v-model:expanded="expanded"
      default-expand-all
    ></q-tree>
    <div class="col-12 col-sm-6 q-gutter-sm">
      <!-- <div class="text-h6">selected</div>
      <div>{{ selected }}</div>

      <q-separator spaced></q-separator> -->

      <div class="text-h6">職務需要的工作技能</div>
      <div>
        <div v-for="tick in ticked" :key="`ticked-${tick}`">
          {{ tick }}
        </div>
      </div>

      <q-separator spaced></q-separator>

      <!-- <div class="text-h6">Expanded</div>
      <div>
        <div v-for="expand in expanded" :key="`expanded-${expand}`">
          {{ expand }}
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, defineProps } from 'vue';

const selected = ref('');
const ticked = ref(['']);
const expanded = ref(['']);

const props = defineProps({
  skillInfo: {
    type: Object,
  },
});
const skillInfo = ref(props.skillInfo.skillInfo);

</script>
