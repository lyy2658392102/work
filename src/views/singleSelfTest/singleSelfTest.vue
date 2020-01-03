<template>
  <div class="singleSelfTest">
    <div class="lineColor">
      <header>
        <i @click="goBack()"></i>
        <span class="header-center">单项自测</span>
      </header>
      <div class="singleSelfTest-top">
        <div class="childbox">
          <div class="childbox-left">
            <div>
              <img :src="man" alt />
              <span>{{childList.childName}}</span>
            </div>
            <p v-text="getTime()"></p>
            <p>最近一次锻炼</p>
          </div>
          <div class="childbox-right">
            <div>
              <img :src="gradeicon" alt />
              <span>{{childList.grade}}</span>分
            </div>
            <p>{{exerciseEventList[0].exerciseitem}}</p>
            <p>{{exerciseEventList[0].grade}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="singleSelfTest-bottom">
      <!-- <img :src="tcjl" alt v-if="flog==1" /> -->
      <div class="indicator" v-if="flog==0">
        <!-- <p>
          <span>锻炼项目</span>
          <span>日期</span>
          <span>成绩</span>
          <span>得分</span>
        </p>
        <div class="exerciseEvent"></div> -->
        <table>
          <th>
            <td>锻炼项目</td>
            <td>日期</td>
            <td>成绩</td>
            <td>得分</td>
          </th>
        </table>
      </div>
      <div class="btn flexCenter" @click="singleSelfTestTo()">
        <van-button type="default" round size="large" color="#FF7A18">录入锻炼</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import man from "@/assets/man.png";
import gradeicon from "@/assets/gradeicon.png";

export default {
  data() {
    return {
      man: man,
      flog: 0,
      activeNames: "1",
      gradeicon: gradeicon,
      childList: {
        childName: "余威航",
        grade: "86"
      },
      exerciseEventList: [
        {
          exerciseitem: "50米跑",
          date: "2018-12-24",
          grade: "7.86秒",
          score: "86"
        },
        {
          exerciseitem: "座位体前屈",
          date: "2018-12-22",
          grade: "23厘米",
          score: "92"
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

