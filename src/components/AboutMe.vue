<template>
  <div class="row justify-center">

    <div class="column items-center" style='max-width:45%'>
      <q-avatar size="250px" >
        <img alt='profilePhoto' src="../assets/images/mimi.jpg">
      </q-avatar>
      <div class="q-mt-md" style='max-width:60%'>
        Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Iusto
        necessitatibus tenetur eius non perspiciatis,
        </div>
        <div class="q-mt-lg">
          <q-btn label='Know More'></q-btn>
        </div>
    </div>

    <div class="column items-center" style='max-width:45%'>

      <div class="q-mt-md" style='max-width:50%'>
      <WebTimeline :showDetail=showDetail></WebTimeline>
      </div>
    </div>
  </div>
</template>
<script setup leng='ts'>
import WebTimeline from '@/components/WebTimeline.vue';
import { ref, defineProps } from 'vue';

const props = defineProps({
  showDetail: {
    type: Boolean,
  },
});

console.log(props.showDetail);

const showDetail = ref(props.showDetail ?? true);
</script>
