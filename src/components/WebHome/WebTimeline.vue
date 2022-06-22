<template>
<div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">

      <q-timeline-entry heading v-if='showDetail'>
        Experience
      </q-timeline-entry>
      <q-timeline-entry
        title=".Net 資深軟體工程師"
        subtitle="悅慶資訊  March , 2022"
      >
      <div class='timeline-description'>
        1. 增修與維運網站系統, 負責開發與協助設計API與排程, 系統採前後端分離<br>
        2. 介接平台API, 處理大量資料移轉與查詢（百萬筆）<br>
        3. 優化舊有Stored Procedure效能<br>
        4. 協助解決同組工程師開發問題
      </div>
      </q-timeline-entry>
      <q-timeline-entry
        title="軟體工程師"
        subtitle="皓展資訊  April , 2020"
      >
      <div class='timeline-description'>
        1. 增修與維運網站系統<br>
        2. 獨立設計功能項與開發<br>
        3. 依開發者角度協助專案經理與客戶進行需求訪談<br>
        4. 建立新專案開發架構，遵守SOLID原則，達成低耦合高內聚，提升開發品質與降低維運成本<br>
        期間參與五個專案
      </div>
      </q-timeline-entry>
      <q-timeline-entry
        title="工程師"
        subtitle="義美聯電  January , 2019"
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
