<template>
  <div class="tab-root">
    <div
      class="btn"
      v-for="(tabName, index) in tabNames"
      :key="tabName"
      @click="onTabSelected(index)"
    > 
    {{ tabName }}

     </div>
  </div>
</template>

<style scoped lang="scss">
.tab-root {
  background-color: #3C3C3C	;
  .btn {
    display: inline-block;
    margin: 0 20px;
    color: white;
    line-height: 69px;
    cursor: pointer;
    &:hover {
      color: #ADADAD;
    }
  }
}
</style>

<script setup>
import { ref, onMounted, inject, computed, watch } from "vue";
const emit = defineEmits(["onTabSelected"]);

const selectedTabIndex = ref(0);

const isContentEditShow = inject("isContentEditShow");

const tabNames = ["首頁", "個人簡介", " 購物車", "登出"];

function onTabSelected(index) {
  selectedTabIndex.value = index;
  console.log(index);
  emit("onTabSelected", index);
}
</script>