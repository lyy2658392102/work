<template>
  <div class="addchildren">
    <header class="clearfix">
      <i @click="goBack()"></i>
      <span class="header-center">添加孩子</span>
    </header>
    <van-cell-group>
      <van-field
        class="zhanghao"
        v-model="username"
        label="姓名"
        placeholder="请输入孩子姓名"
        @click-right-icon="$toast('question')"
      />
      <van-field v-model="password" type="password" label="学籍号" placeholder="请输入学籍号" />
    </van-cell-group>
    <div class="btn flexCenter">
      <van-button type="default" round size="large" color="#FFCCA6">提交验证</van-button>
    </div>
  </div>
</template>
<script>
import login from "@/assets/login.png";
export default {
  data() {
    return {
      login: login,
      username: "",
      password: "",
      newpassword: "",
      phone: "",
      authCode: "",
      checked: true,
      radio: ""
    };
  },
  created() {},
  methods: {}
};
</script>
