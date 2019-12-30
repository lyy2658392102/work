<template>
  <div class="physicalSyllabus">
    <header>
      <i @click="goBack()"></i>
      <span class="header-center">体育课程表</span>
    </header>
    <div>
      <!-- 日历时间 -->
      <div class="calendar-header">2018年12月</div>
      <!-- 日历表内容 -->
      <div class="calendar-main">
        <div class="calendar-content"></div>
      </div>
    </div>
    <div class="zhibo-bottom">
      <!-- 没课 1 -->
      <div class="liveStreaming-box1" v-if="flag==1">
        <img :src="noclass" />
        <div>
          <p>今天没有体育课哦~</p>
          <p>还没到上课时间</p>
        </div>
      </div>

      <!-- 有课 2-->
      <div class="liveStreaming-box2 no-liveStreaming" v-if="flag==0">
        <div>
          <span v-text="loginList.liveStreaming"></span>
          <i></i>
          <span class="fr">
            已上课：
            <span v-text="getNowTime()"></span>
          </span>
        </div>
        <div class="noclass">
          <div>
            <ul>
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
            <p v-text="loginList.noPE"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import noclass from "@/assets/no-class.png";
export default {
  data() {
    return {
      noclass: noclass,
      flag: 0,
      loginList: {
        liveStreaming: "孩子正在上课",
        noPE: "40分钟课堂内容",
        realTimeHeartrate: "163bpm",
        maximumHeartrate: "171bpm",
        quietHeartrate: "96bpm"
      }
    };
  },
  created() {},
  methods: {}
};
</script>
