<template>
  <div class="q-pa-md ">
    <q-list>
      <div v-for="(item,index) in articleData" :key="index">
        <q-item :href='item.url' target='_blank'>
          <q-item-section>
            <q-item-label>{{item.title}}</q-item-label>
            <q-item-label caption lines="2">{{item.content}}</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>{{item.createAt}}</q-item-label>
            <q-icon name="star" color="yellow"></q-icon>
          </q-item-section>
        </q-item>

        <q-separator spaced inset></q-separator>
      </div>
      <!-- <q-item>
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet,
            consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>Voted!</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced inset></q-separator>

      <q-item>
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor
            sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge color="teal" label="10k"></q-badge>
        </q-item-section>
      </q-item>

      <q-separator spaced inset></q-separator>

      <q-item>
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet,
            consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>2 min ago</q-item-label>
          <div class="text-orange">
            <q-icon name="star"></q-icon>
            <q-icon name="star"></q-icon>
            <q-icon name="star"></q-icon>
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced inset></q-separator>

      <q-item>
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor
            sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>meta</q-item-label>
        </q-item-section>
      </q-item> -->
    </q-list>
  </div>
</template>
<script setup lang='ts'>
import { ref, defineProps } from 'vue';

const props = defineProps({
  articleData: {
    type: Object,
  },
});

const articleData = ref(props.articleData);
console.log(props.articleData);
</script>
