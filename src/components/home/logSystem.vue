<template>
  <div class="Tab-Login">
    <!-- contentType == 4 是登入 -->
    <div class="login-region" v-show="contentType == 4">
      <h1>Sign in</h1>
      <p>userName： <input /></p>
      <p>passWord：<input /></p>
      <br />
      <button @click="login">login</button>
      <p></p>
      <h3>
        還沒有帳號？ 請按：<span
          @click="changeContentType(1)"
          style="cursor: pointer; user-select: none"
          >創建</span
        >
      </h3>
    </div>

    <!-- contentType == 1 是選擇身分 -->
    <div class="login-regin" v-show="contentType == 1">
      <h1 class="Tab-title">身分選擇</h1>
      <div class="left">
        <img class="userImage" src="@/components/home/picture/customer.png" />
        <p></p>
        <b-button variant="dark" @click="changeContentType(2)">顧客</b-button>
      </div>
      <div class="right">
        <img class="userImage" src="@/components/home/picture/store.png" />
        <p></p>
        <b-button variant="dark" @click="changeContentType(3)">商家</b-button>
      </div>
      <!-- <h3>
        已有帳號，請按：
        <span
          @click="changeContentType(4)"
          style="cursor: pointer; user-select: none"
          >登入</span
        >
      </h3> -->
    </div>

    <!-- contentType == 2 是消費者註冊 -->
    <div class="register-region" v-show="contentType == 2">
      <h1>消費者創建帳號</h1>
      <p>姓名： <input /></p>
      <p>郵箱： <input /></p>
      <p>電話： <input /></p>
      <p>帳號：<input /></p>
      <p>密碼：<input /></p>
      <br />
      <button @click="create">create</button>
      <p></p>
      <h3>
        已有帳號，請按：
        <span
          @click="changeContentType(4)"
          style="cursor: pointer; user-select: none"
          >登入</span
        >
      </h3>
    </div>

    <!-- contentType == 3 是商家註冊 -->
    <div class="register-region" v-show="contentType == 3">
      <h1>商家創建帳號</h1>
      <p>店名：<input /></p>
      <p>地址：<input /></p>
      <p>郵箱：<input /></p>
      <p>電話：<input /></p>
      <p>帳號：<input /></p>
      <p>密碼：<input /></p>
      <br />
      <button @click="create">create</button>
      <p></p>
      <h3>
        已有帳號，請按：
        <span
          @click="changeContentType(4)"
          style="cursor: pointer; user-select: none"
          >登入</span
        >
      </h3>
    </div>

    <!-- contentType == 5 是登出畫面 -->
    <div class="register-region" v-show="contentType == 5">
      <h3>您已登入</h3>
      <button @click="logout">登出</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from "vue";

const contentType = ref(1);

function changeContentType(type) {
  //轉換登入和註冊頁面
  contentType.value = type;
  console.log(contentType);
}
</script>
 <style lang="scss" scoped>
.Tab-Login {
  text-align: center;
}
h1 {
  text-align: center;
  height: 100px;
}
.left {
  position: absolute;
  width: 50%;
  height: calc(100% - 69px);;
}
.right {
  position: absolute;
  right: 0px;
  width: 50%;
  height: calc(100% - 69px);;
}
.userImage {
  width: 300px;
  height: 300px;
}
</style>