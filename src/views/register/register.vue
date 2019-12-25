<template>
  <div class="register">
    <header @click="goBack()" class="clearfix">
      <i class="fl"></i>
      <span class="fl">已有账号</span>
    </header>
    <div class="login-top">
      <img :src="login" alt />
      <span>欢迎注册体质云账号</span>
    </div>
    <van-cell-group>
      <van-field
        class="zhanghao"
        v-model="username"
        label="昵称"
        placeholder="输入家长称呼"
        @click-right-icon="$toast('question')"
      />
      <div class="relation van-cell">
        <span>关系</span>
        <div class="parent">
          <span>父亲</span>
          <span>母亲</span>
        </div>
      </div>
      <div class="tel-box">
        <van-field v-model="phone" type="text" label="手机" placeholder="输入11位手机号" />
        <van-button type="default" class="send" color="#DDDDDD">发送</van-button>
      </div>

      <van-field v-model="authCode" type="text" label="验证码" placeholder="输入验证码" />
      <van-field v-model="password" type="password" label="密码" placeholder="输入密码" />
    </van-cell-group>

    <p class="serve flexCenter">
      <van-checkbox v-model="checked" shape="square" checked-color="#FF7A18">
        我已阅读并同意
        <a href="#">服务隐私声明</a>及
        <a href="#">服务说明</a>
      </van-checkbox>
    </p>
    <div class="btn">
      <van-button type="default" round size="large" color="#FFCCA6">注册</van-button>
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
      phone: "",
      authCode: "",
      checked: "",
      radio: ""
    };
  },
  created() {},
  methods: {}
};
</script>
