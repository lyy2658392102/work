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
            <p>{{exerciseEventList[0].singleIndex}}</p>
            <p>{{exerciseEventList[0].result}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="singleSelfTest-bottom">
      <div class="indicator">
        <ul>
          <li>
            <span>锻炼项目</span>
            <span>日期</span>
            <span>成绩</span>
            <span>得分</span>
          </li>
          <div class="indicatorData" v-if="flog==1">
            <van-swipe-cell v-for="(item,index) in exerciseEventList" :key="index">
              <van-cell :border="false">
                <li>
                  <span>{{item.singleIndex}}</span>
                  <span>{{item.date}}</span>
                  <span>{{item.result}}</span>
                  <span>{{item.score}}</span>
                </li>
              </van-cell>
              <template slot="right">
                <van-button square type="danger" text="删除" @click="delExerciseItem(index)" />
              </template>
            </van-swipe-cell>
          </div>
        </ul>
      </div>
      <img :src="zcjl" alt v-if="flog==0" />
    </div>
    <div class="btn flexCenter" @click="singleSelfTestTo()">
      <van-button type="default" round size="large" color="#FF7A18">录入锻炼</van-button>
    </div>

    <!-- 遮罩层综合得分弹窗 -->
    <van-overlay :show="overlayShow">
      <div class="wrapper" @click.stop>
        <div class="block">
          <h4>录入锻炼项目及成绩</h4>
          <van-button round type="info" @click="showPopup()" :class="changeColor1">
            <div class="btn-text" v-text="form.ExerciseEvent"></div>
            <span>></span>
          </van-button>
          <!-- 选择锻炼项目 -->
          <van-popup v-model="popupshow" position="bottom" :style="{ height: '30%' }">
            <p>点击选择锻炼项目</p>

            <!-- <v-touch v-on:swipeleft="getNext" class="wrapper2 v-touch">
              <div class="menu-container" ref="menuContainer">
                <van-list>
                  <van-cell
                    v-for="item in choiceExerciseEventlist"
                    :key="item"
                    :title="item"
                    @click="choiceExercise(item)"
                  />
                </van-list>
              </div>
            </v-touch>-->

            <van-list @touchstart="handleTouchStart()">
              <van-cell
                v-for="item in choiceExerciseEventlist"
                :key="item"
                :title="item"
                @click="choiceExercise(item)"
              />
            </van-list>
          </van-popup>

          <!-- <van-button round type="info" @click="inputResults()">
            <div class="btn-text">
              输入成绩
              <span>cm</span>
            </div>
          </van-button>-->

          <van-cell-group @click="inputResults()" :id="changeColor2">
            <van-field v-model="form.inputScore" placeholder="输入成绩" />
            <span>cm</span>
          </van-cell-group>

          <div class="block-bottom">
            <span @click="cancel()" :class="changeColor3">取消</span>
            <span @click="confirm()" :class="changeColor4">确定</span>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>
<script>
import man from "@/assets/man.png";
import zcjl from "@/assets/zcjl.png";
import gradeicon from "@/assets/gradeicon.png";

export default {
  data() {
    return {
      man: man,
      zcjl: zcjl,
      flog: 1,
      activeNames: "1",
      popupshow: false,
      gradeicon: gradeicon,
      overlayShow: true,
      changeColor1: "",
      changeColor2: "",
      changeColor3: "",
      changeColor4: "",
      form: {
        ExerciseEvent: "选择锻炼项目",
        inputScore: ""
      },
      childList: {
        childName: "余威航",
        grade: "86"
      },
      // 锻炼项目列表
      exerciseEventList: [
        {
          singleIndex: "50米*8往返跑",
          date: "2018-12-10",
          result: "1,35分",
          score: "86"
        },
        {
          singleIndex: "肺活量",
          date: "2018-12-12",
          result: "2187ml",
          score: "96"
        },
        {
          singleIndex: "仰卧起坐",
          date: "2018-10-16",
          result: "38个",
          score: "96"
        },
        {
          singleIndex: "跳绳",
          date: "2018-09-14",
          result: "78个",
          score: "43"
        }
      ],
      choiceExerciseEventlist: [
        "座位体前屈",
        "50米跑",
        "一分钟跳绳",
        "800米跑",
        "仰卧起坐",
        "肺活量"
      ],
      loading: false,
      finished: false,
      name: ""
    };
  },
  created() {
    this.$nextTick(() => {});
  },
  mounted() {},
  methods: {
    delExerciseItem(index) {
      this.exerciseEventList.splice(index, 1);
    },
    singleSelfTestTo() {
      this.overlayShow = true;
    },
    showPopup() {
      this.popupshow = true;
      this.changeColor1 = "active";
      this.changeColor2 = "";
    },
    inputResults() {
      this.changeColor1 = "";
      this.changeColor2 = "active";
    },
    choiceExercise(item) {
      this.form.ExerciseEvent = item;
      this.popupshow = false;
    },
    cancel() {
      this.changeColor3 = "active3";
      this.changeColor4 = "";
      this.overlayShow = false;
    },
    confirm() {
      this.changeColor4 = "active3";
      this.changeColor3 = "";
      this.overlayShow = false;
    },
    getNext: function() {
      console.log("上划");
    },
    handleTouchStart() {
      console.log("shang");
    }
  }
};
</script>

