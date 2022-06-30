<template>
  <div class="q-pa-md blue-grey-1 text-dark article-wrap">
    <q-list>
      <div class='article-item' v-for="(item,index) in articleData" :key="index"
      :title='item.content'>
        <q-item :href='item.url' target='_blank'>
          <q-item-section>
            <div class='article-title JosefinSans'>

              {{item.title}}
            </div>
            <div class='article-content q-ml-md NotoSansTC' caption lines="2">
              {{item.content.length > 30
              ? item.content.replace(item.content.substring(30,item.content.length),'...')
              : item.content}}</div>

            <div class="q-ml-md q-mb-md" style='width:100%'>
              <button class='tag' v-for='(item,index) in item.tags' :key="index">
                {{item}}</button>
            </div>
            <div class="q-mt-xs flex justify-end" style='width:100%'>
              <q-icon size='xs' v-if="item.important" name="star" color="yellow"></q-icon>
              {{item.createAt}}
            </div>
          </q-item-section>

          <!-- <q-item-section side top>
            <q-item-label caption>
              <q-icon size='xs' v-if="item.important" name="star" color="yellow"></q-icon>
              {{item.createAt}}</q-item-label>
          </q-item-section> -->
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
    font-weight: 500;

    .article-title{
      font-size: 20px;
      padding-bottom: 10px;
      letter-spacing: .8px;
      font-weight: bold;
    }
    .article-content{
      font-size: 16px;
      color:#9b9b9b;
    }
  }
}

.tag{
  font-weight: bold;
  margin-top: 15px;
  font-size: 12px;
  padding: 3px 10px;
  letter-spacing: 1.5px;
  background: linear-gradient(to bottom right,#666666, #000000);
  border: .5px solid #616161;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  margin-left: 5px;
  font-family: JosefinSans;
}
</style>
