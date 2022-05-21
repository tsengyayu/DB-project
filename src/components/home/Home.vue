<template>
  <div id="home-root">

    <TopTabRegion class="top-tab-region" @on-tab-selected="onTabSelected" />
    <div class="content-region">
      <allReview v-show="selectedTabIndex == 0" />
      <customerIntro
        v-show="selectedTabIndex == 1"
        @on-tab-selected="subTabSelected"
      />
      <cart
        v-show="selectedTabIndex == 2"
        @on-tab-selected="subTabSelected"
      />
      <logSystem
        v-show="selectedTabIndex == 3"
        @on-tab-selected="subTabSelected"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
#home-root {
  width: 100%;
  height: 100%;

  .top-tab-region {
    height: 69px;
    width: 100%;
  }
  .content-region {
    width: 100%;
    height: calc(100% - 69px);
  }
}
</style>

<script setup>
import logSystem from "@/components/home/logSystem.vue";
import TopTabRegion from "@/components/home/TopTabRegion.vue";
import allReview from "@/components/home/TabContent/storeReview/allReview.vue";
import cart from "@/components/home/TabContent/cart.vue";
import customerIntro from "@/components/home/TabContent/customerIntro.vue";


import { ref, onMounted, provide } from "vue";

const isContentEditShow = ref(false);

provide("isContentEditShow", isContentEditShow);

provide("setContentEditShow", setContentEditShow);

function setContentEditShow(isShow) {
  console.log("isShow" + isShow);
  isContentEditShow.value = isShow;
}

const selectedTabIndex = ref(0);
const subselectedTabIndex = ref(0);

function onTabSelected(index) {
  selectedTabIndex.value = index;
}

function subTabSelected(index) {
  subselectedTabIndex.value = index;
}
</script>