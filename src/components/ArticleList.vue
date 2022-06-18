<template>
  <div class="q-pa-md blue-grey-1 text-dark article-wrap">
    <q-list>
      <div class='article-item' v-for="(item,index) in articleData" :key="index">
        <q-item :href='item.url' target='_blank'>
          <q-item-section>
            <q-item-label class='article-title' >
            <q-icon size='xs' v-if="item.important" name="star" color="yellow"></q-icon>
            <q-icon size='xs' v-else name="" color="yellow"></q-icon>
              {{item.title}}
            </q-item-label>
            <q-item-label class='article-content' caption lines="2">
              <q-icon size='xs' name=""></q-icon>
              {{item.content}}</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>{{item.createAt}}</q-item-label>
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

<style lang='scss'>
.article-wrap{
  background: white;
  border: 1px solid #ffffff62;
  border-radius: 10px;
  .article-item{
    .article-title{
      font-size: 16px;
    }
    font-weight: 500;
  }
}
</style>
