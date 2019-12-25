<template>
  <div class="forgetpass">
    <header class="clearfix">
      <i @click="goBack()"></i>
      <span class="header-center">忘记密码</span>
    </header>
    <van-cell-group>
      <div class="tel-box">
        <van-field v-model="phone" type="text" label="手机" placeholder="输入11位手机号" />
        <van-button type="default" class="send" color="#DDDDDD">发送</van-button>
      </div>

      <van-field v-model="authCode" type="text" label="验证码" placeholder="输入验证码" />
      <van-field v-model="password" type="password" label="密码" placeholder="输入密码" />
      <van-field v-model="newpassword" type="password" label="确认密码" placeholder="输入密码" />
    </van-cell-group>
    <div class="btn flexCenter">
      <van-button type="default" round size="large" color="#FFCCA6">确定</van-button>
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
