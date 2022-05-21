<template>
    <div> 
    <!-- contentType == 1 是瀏覽頁 -->
    <div class="content" v-show="contentType == 1">
        <h1>個人簡介</h1>
        <p>帳號：「皮卡丘」</p>
        <p>姓名：「皮卡丘」</p>
        <p>郵箱：「pika~chu@gmail.com」</p>
        <p>電話：「0951234567」</p>
        <p>密碼：「aaaaaaaa」</p>
        <b-button variant="dark" @click="changeContentType(2)" 
        >編輯</b-button>
    </div>

    <!-- contentType == 2 是編輯頁 -->
    <div class="content" v-show="contentType == 2">
    <h1>個人簡介</h1>
        <p>帳號： <input/></p>
        <p>姓名： <input/></p>
        <p>郵箱： <input/></p>
        <p>電話： <input/></p>
        <p>密碼： <input/></p>
        <b-button variant="dark" @click="save">儲存</b-button>
        <p></p>
        <h3>
        若沒有要修改 請按：<span
          @click="changeContentType(1)"
          style="cursor: pointer; user-select: none"
          >返回</span
        >
      </h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  text-align: center;
}
h1 {
  text-align: center;
  height: 100px;
}
</style>

<script setup>
import { ref, onMounted, inject } from "vue";

const contentType = ref(1);

function changeContentType(type) {
  //轉換登入和註冊頁面
  contentType.value = type;
  console.log(contentType);
}
</script>
