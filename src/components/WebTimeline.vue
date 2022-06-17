<template>
 <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">

      <q-timeline-entry heading v-if='showDetail'>
        Experience
      </q-timeline-entry>
      <q-timeline-entry
        title="Now"
        subtitle=""
      >
      </q-timeline-entry>

      <q-timeline-entry
        title=".Net Backend Developer"
        subtitle="January , 2019"
      >
        <div v-if='showDetail'>
          Web, WebAPI, Scheduling
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>
<script setup lang='ts'>
import { ref, defineProps } from 'vue';

const props = defineProps({
  showDetail: {
    type: Boolean,
  },
});

const showDetail = ref(props.showDetail ?? true);
</script>
