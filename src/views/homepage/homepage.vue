<template>
  <div class="homepage">
    <div class="lineColor">
      <header class="clearfix">
        <span class="header-center">校园积极运动数据评测系统</span>
        <span class="set"></span>
      </header>
      <div class="bindingChild">
        <i></i>
        <p>绑定孩子</p>
      </div>
    </div>
    <div class="main-box">
      <div class="no-liveStreaming">
        <p>
          暂无直播
          <i></i>
          <span>
            下节课：
            <span v-text="getNowTime()"></span>
          </span>
        </p>
        <div class="noclass">
          <img :src="noclass" alt />
          <p>今天没有体育课喔~</p>
        </div>
      </div>
      <div class="PErecord">
        <p>体育课记录</p>
        <div>
          <img :src="classrecord" alt />
          <ul class="clearfix fr">
            <li>
              <span>暂无</span>
              <span>体育课成绩</span>
            </li>
            <li>
              <span>暂无</span>
              <span>课堂活跃度</span>
            </li>
            <li>
              <span>暂无</span>
              <span>平均心率</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="standard">
        <p>国家学生体质健康标准</p>
        <div>
          <img :src="standardicon" alt />
          <ul class="clearfix fr">
            <li>
              <span>暂无</span>
              <span>项目类型</span>
            </li>
            <li>
              <span>暂无</span>
              <span>综合得分</span>
            </li>
            <li>
              <span>暂无</span>
              <span>等级</span>
            </li>
          </ul>
        </div>
      </div>
      <p>关注孩子体智健康，尽在学生体质云</p>
    </div>
  </div>
</template>
<script>
import login from "@/assets/login.png";
import noclass from "@/assets/no-class.png";
import classrecord from "@/assets/classrecord.png";
import standardicon from "@/assets/standardicon.png";

export default {
  data() {
    return {
      login: login,
      noclass: noclass,
      classrecord: classrecord,
      standardicon: standardicon,
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
