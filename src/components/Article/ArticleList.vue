<template>
  <div class="q-pa-md blue-grey-1 text-dark article-wrap">
    <q-list>
      <div class='article-item NotoSansTC' v-for="(item,index) in articleData" :key="index">
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
            <q-item-label caption>
              <button class='tag' v-for='(item,index) in item.tags' :key="index">{{item}}</button>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset></q-separator>
      </div>
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

</script>

<style lang='scss'>
.article-wrap{
  border: 1px solid #53525262;
  border-radius: 10px;
  .article-item{
    .article-title{
      font-size: 18px;
      padding-bottom: 10px;
      letter-spacing: .8px;
      font-weight: bold;
    }
    font-weight: 500;
  }
}

.tag{
  padding: 2px 5px;
  min-width: 60px;
  background: #80CBC4;
  border: 1px solid #80CBC4;
  border-radius: 10px;
  color: #ffffff;
  text-align: center;
  margin-left: 5px;
}
</style>
