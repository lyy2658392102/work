<template>
  <div id="login">
    <img :src="login" alt />
    <span>学生体质云</span>
    <van-cell-group>
      <van-field
        v-model="username"
        label="账号"
        placeholder="手机号"
        @click-right-icon="$toast('question')"
      />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
    </van-cell-group>
  </div>
</template>
<script>
import login from "@/assets/login.png";
export default {
  data() {
    return {
      login: login,
      username: "",
      password: ""
    };
  }
};
</script>