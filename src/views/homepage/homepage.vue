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
        <div>
          <span v-text="loginList.liveStreaming"></span>
          <i></i>
          <span class="fr">
            下节课：
            <span v-text="getNowTime()"></span>
          </span>
        </div>
        <div class="noclass">
          <div>
            <img :src="noclass" />
            <ul v-show="false">
              <li>
                <span v-text="loginList.realTimeHeartrate"></span>
                <span>实时心率</span>
              </li>
              <li>
                <span v-text="loginList.maximumHeartrate"></span>
                <span>最高心率</span>
              </li>
              <li>
                <span v-text="loginList.quietHeartrate"></span>
                <span>安静心率</span>
              </li>
            </ul>
          </div>
          <p v-text="loginList.noPE"></p>
        </div>
      </div>
      <div class="PErecord">
        <p class="clearfix">
          <span>体育课记录</span>
          <span class="classtime fr">
            <i></i>
            <span>2109/10/13</span>
          </span>
        </p>
        <div class="PErecord-content">
          <img :src="classrecord" alt />
          <ul class>
            <li>
              <span v-text="loginList.grade"></span>
              <span>体育课成绩</span>
            </li>
            <li>
              <span v-text="loginList.liveness"></span>
              <span>课堂活跃度</span>
            </li>
            <li>
              <span v-text="loginList.averageHeartRate"></span>
              <span>平均心率</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="standard" @click="healthStandardTo()">
        <p class="clearfix">
          <span>国家学生体质健康标准</span>
          <span class="classtime fr">
            <i></i>
            <span>2109/03/13</span>
          </span>
        </p>
        <div class="standard-content">
          <img :src="standardicon" alt />
          <ul class>
            <li>
              <span v-text="loginList.projectType"></span>
              <span>项目类型</span>
            </li>
            <li>
              <span v-text="loginList.synthesiScore"></span>
              <span>综合得分</span>
            </li>
            <li>
              <span v-text="loginList.rank"></span>
              <span>等级</span>
            </li>
          </ul>
        </div>
      </div>
      <p v-text="loginList.bottomMsg"></p>
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
      radio: "",
      loginList: {
        liveStreaming: "暂无直播",
        noPE: "今天没有体育课喔",
        bottomMsg: "关注孩子体智健康，尽在学生体质云",

        grade: "暂无",
        liveness: "暂无",
        averageHeartRate: "暂无",
        projectType: "暂无",
        synthesiScore: "暂无",
        rank: "暂无"
      }

      // loginList: {
      //   liveStreaming: "孩子正在上课",
      //   noPE: "40分钟课堂内容",
      //   bottomMsg: "关注孩子体智健康，尽在校园积极运动数据",

      //   realTimeHeartrate: "163bpm",
      //   maximumHeartrate: "171bpm",
      //   quietHeartrate: "96bpm",

      //   grade: "达标",
      //   liveness: "暂无",
      //   averageHeartRate: "136",

      //   projectType: "国标体侧",
      //   synthesiScore: "96",
      //   rank: "优秀"
      // }
    };
  },
  created() {},
  methods: {
    healthStandardTo() {
      this.$router.push({ name: "healthStandard" });
    }
  }
};
</script>
