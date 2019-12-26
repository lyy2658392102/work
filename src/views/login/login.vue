<template>
  <div class="login">
    <div class="login-top">
      <img :src="login" alt />
      <span>学生体质云</span>
    </div>
    <van-cell-group>
      <van-field
        class="zhanghao"
        v-model="username"
        label="账号"
        placeholder="手机号"
        @click-right-icon="$toast('question')"
      />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
      <span class="savepass">保存密码</span>
      <van-switch v-model="checked" active-color=" #FF7A18" />
    </van-cell-group>
    <div class="btn flexCenter">
      <van-button type="default" round size="large" color="#FFCCA6" to="/personalCenter">登录</van-button>
    </div>
    <div class="login-bottom">
      <p class="flexCenter">
        <span @click="reg()">注册账号</span>
        <span @click="forgetpass()">忘记密码</span>
      </p>
      <p class="flexCenter">或者</p>
      <p class="flexCenter">
        <i></i>
      </p>
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
      checked: true
    };
  },
  created() {},
  methods: {
    reg() {
      this.$router.push({ name: "register" });
    },
    forgetpass() {
      this.$router.push({ name: "forgetpass" });
    }
  }
};
</script>
