<template>
<div class="q-px-lg q-pb-md">
    <q-timeline color="black" class="NotoSansTC">

      <q-timeline-entry heading v-if='showDetail'>
        Experience
      </q-timeline-entry>
      <q-timeline-entry
        title="系統設計師"
        subtitle="統一資訊 Sep , 2022"
        icon="fa-solid fa-angle-up"
      >
      <div class='timeline-description'>
        1. 開發與維運大型電商後台專案<br>
        2. 5人開發小組Team Leader<br>
        3. 優化舊有程式效能<br>
        4. 解決PG, SA開發設計問題 與 Codereview<br>
      </div>
      </q-timeline-entry>
      <q-timeline-entry
        title=".Net 資深軟體工程師"
        subtitle="悅慶資訊  March , 2022"
        icon="fa-solid fa-angle-up"
      >
      <div class='timeline-description'>
        1. 增修與維運網站系統, 完成SA交辦功能與協助調整設計, 系統採前後端分離, 與前端工程師配合開發<br>
        2. 處理大量資料查詢<br>
        3. 優化舊有Stored Procedure效能<br>
        4. 協助解決同組工程師開發問題
      </div>
      </q-timeline-entry>
      <q-timeline-entry
        title="軟體工程師"
        subtitle="皓展資訊  April , 2020"
        icon="fa-solid fa-angle-up"
      >
      <div class='timeline-description'>
        1. 增修與維運網站系統<br>
        2. 主要負責設計功能項與開發、獨立部署網頁程式於客戶端<br>
        3. 協助專案經理與客戶進行需求訪談<br>
        4. 建立新專案開發架構，遵守SOLID原則，達成低耦合高內聚，提升開發品質與降低維運成本<br>
        期間參與五個專案
      </div>
      </q-timeline-entry>
      <q-timeline-entry
        title="工程師"
        subtitle="義美聯電  January , 2019"
        icon="fa-solid fa-angle-up"
      >
      <div class='timeline-description'>
        1. 維運網站系統，完成主管交辦功能項<br>
        2. 處理黑白箱、無障礙相關報告<br>
        3. 現場上版、除錯與測試<br>
        期間參與兩個專案<br>
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
<style lang='scss'>
.timeline-description{
  font-size: 12px;
}
</style>
