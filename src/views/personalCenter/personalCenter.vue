<template>
  <div class="personalCenter">
    <header class="clearfix">
      <i class="fl" @click="goBack()"></i>
      <div class="header-center fl">个人中心</div>
      <div class="sign-out fr">退出登录</div>
    </header>
    <div class="myMessage">
      <p class="pt">我的信息</p>
      <ul v-for="(item,index) in personalMessage" :key="index">
        <li class="clearfix">
          <span>账号</span>
          <span class="messagebox-right">{{item.accountNumber}}</span>
        </li>
        <li class="clearfix">
          <span>昵称</span>
          <span class="messagebox-right">{{item.nickname}}</span>
        </li>
        <li class="clearfix">
          <span>身份</span>
          <span class="messagebox-right">{{item.identity}}</span>
        </li>
      </ul>
    </div>
    <div class="childMessage-box">
      <p class="pt">
        孩子信息
        <van-button round type="info" color="#FF7A18" to="/addchildren">添加孩子</van-button>
      </p>
      <ul>
        <li class="clearfix" v-for="(item,index) in childMessage" :key="index">
          <img src="@/assets/base64/pictureFrame.png" class="fl" />
          <span class="fl">{{item.childname}}</span>
          <span class="messagebox-right" @click="linkto()">
            {{item.class}}
            <i></i>
          </span>
        </li>
      </ul>
    </div>
    <div class="rests">
      <p class="pt">其他</p>
      <ul>
        <li class="clearfix">
          <span>修改密码</span>
          <span class="messagebox-right">
            修改
            <i></i>
          </span>
        </li>
        <li class="clearfix">
          <span>版本</span>
          <span class="messagebox-right">
            <i class="newedition"></i>
            <i></i>
          </span>
        </li>
        <li class="clearfix" @click="linkus()">
          <span>联系我们</span>
          <span class="messagebox-right">
            <i></i>
          </span>
        </li>
        <li class="clearfix">
          <span>使用条款</span>
          <span class="messagebox-right">
            <i></i>
          </span>
        </li>
      </ul>
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
      radio: "",
      personalMessage: [
        {
          accountNumber: "12345678",
          nickname: "余爸爸",
          identity: "父亲"
        }
      ],
      childMessage: [
        { childname: "余威航", class: "五年级2班" },
        { childname: "余诗韵", class: "二年级3班" }
      ]
    };
  },
  created() {},
  methods: {
    linkto() {
      this.$router.push({ name: "childMessage" });
    },
    linkus() {
      this.$router.push({ name: "connectUs" });
    }
  }
};
</script>
