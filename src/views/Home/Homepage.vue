<template>
  <div id="homepage" v-show="show">
    <img :src="welcomelogo" alt />
    <span>学生积极运动数据</span>
  </div>
</template>
<script>
import welcomelogo from "@/assets/welcomelogo.png";
export default {
  name: "homepage",
  data() {
    return {
      welcomelogo: welcomelogo,
      count: "", //倒计时
      show: true,
      timer: ""
    };
  },
  created() {
    // this.threeGo();
  },
  methods: {
    //几秒后进入跳转页面
    // threeGo() {
    //   const timejump = 20;
    //   if (!this.timer) {
    //     this.count = timejump;
    //     this.show = true;
    //     this.timer = setInterval(() => {
    //       if (this.count > 0 && this.count <= timejump) {
    //         this.count--;
    //       } else {
    //         this.show = false;
    //         clearInterval(this.timer);
    //         this.timer = null;
    //         //跳转的页面写在此处
    //         this.$router.push({ path: "/login" });
    //       }
    //     }, 100);
    //   }
    // }
  }
};
</script>
<style lang="scss" scoped>
#homepage {
  text-align: center;
  img {
    width: 429px;
    height: 60px;
    margin-top: 232px;
  }
  span {
    display: block;
    width: 100%;
    font-size: 32px;
    color: #ebebeb;
    line-height: 92px;
  }
}
</style>

