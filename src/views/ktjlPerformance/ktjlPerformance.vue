<template>
  <div class="ktjlPerformance">
    <header>
      <i @click="goBack()"></i>
      <span class="header-center">课堂记录表现</span>
    </header>
    <main>
      <div class="triangle"></div>
      <div class="ktjl-top">
        <h3>2019下学期第2周第3体育课</h3>
        <p>课堂活跃度表现</p>
        <div class="manifestation">
          <span class="manifestation-left">
            <img :src="man" alt />
            <span>余威航</span>
          </span>
          <span class="active-xing">活跃度不错，加油！</span>
        </div>
      </div>
      <div class="run-grades">
        <p>跑跳成绩</p>
        <ul>
          <li>
            <img src="@/assets/classrecord.png" />
          </li>
          <li>
            <span>
              <span>8.6</span>
              <span>秒</span>
            </span>
            <span>练习成绩</span>
          </li>
          <li>
            <span>
              <span>8.2</span>
              <span>秒</span>
            </span>
            <span>国家标准</span>
          </li>
          <li>
            <span>
              <span>8.4</span>
              <span>秒</span>
            </span>
            <span>最佳记录</span>
          </li>
          <li>
            <div class="sanjiao"></div>
            <span>
              <span>88</span>
              <span>分</span>
            </span>
            <span>成绩得分</span>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>
<script>
import man from "@/assets/man.png";

export default {
  data() {
    return {
      man: man,
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
