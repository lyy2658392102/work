<template>
  <div class="childMessage">
    <header class="clearfix">
      <i class="fl" @click="goBack()"></i>
      <div class="sign-out fr">保存</div>
      <div class="header-center">孩子信息</div>
    </header>
    <div class="myMessage">
      <p class="pt">个人信息</p>
      <ul v-for="(item,index) in childMessage" :key="index">
        <li class="clearfix">
          <span>孩子头像</span>
          <img src="@/assets/base64/pictureFrame.png" class="fr" />
          <span class="messagebox-right">修改</span>
        </li>
        <li class="clearfix">
          <span>姓名</span>
          <span class="messagebox-right">{{item.childName}}</span>
        </li>
        <li class="clearfix">
          <span>学校</span>
          <span class="messagebox-right">{{item.schoolName}}</span>
        </li>
        <li class="clearfix">
          <span>班级</span>
          <span class="messagebox-right">{{item.grade}}</span>
        </li>
        <li class="clearfix">
          <span>学籍号</span>
          <span class="messagebox-right">{{item.StudentCode}}</span>
        </li>
        <li class="clearfix">
          <span>身份证号</span>
          <span class="messagebox-right">{{item.identityCard}}</span>
        </li>
        <li class="clearfix">
          <span>性别</span>
          <span class="messagebox-right">{{item.sex}}</span>
        </li>
        <li class="clearfix">
          <span>年龄</span>
          <span class="messagebox-right">{{item.childAge}}</span>
        </li>
      </ul>
    </div>
    <div class="myMessage constitutionMessage">
      <p class="pt">体质信息</p>
      <ul v-for="(item,index) in childMessage" :key="index">
        <li class="clearfix">
          <span>身高</span>
          <span class="messagebox-right">
            <van-cell-group class="fl">
              <van-field v-model="constitutionMessage.stature" placeholder="请输入身高" />
            </van-cell-group>
            <span class="fr">cm</span>
          </span>
        </li>
        <li class="clearfix">
          <span>体重</span>
          <span class="messagebox-right">
            <van-cell-group class="fl">
              <van-field v-model="constitutionMessage.weight" placeholder="请输入体重" />
            </van-cell-group>
            <span class="fr">kg</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="btn flexCenter">
      <van-button type="default" round size="large" color="#FF6D5A">移除孩子</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      childMessage: [
        {
          childName: "余威航",
          schoolName: "中心实验小学",
          grade: "五年级2班",
          StudentCode: "ZS2016093654",
          identityCard: "暂无",
          sex: "男",
          childAge: "14岁"
        }
      ],
      constitutionMessage: {
        stature: "143",
        weight: "41"
      }
    };
  },
  created() {},
  methods: {}
};
</script>
