<template>
  <div id="homepage" v-show="show">
    <span>edlus</span>
  </div>
</template>
<script>
export default {
  name: "homepage",
  data() {
    return {
      count: "", //倒计时
      show: "",
      timer: ""
    };
  },

  created() {
    this.threeGo();
  },
  methods: {
    //几秒后进入跳转页面
    threeGo() {
      const timejump = 20;
      if (!this.timer) {
        this.count = timejump;
        this.show = true;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= timejump) {
            this.count--;
          } else {
            this.show = false;
            clearInterval(this.timer);
            this.timer = null;
            //跳转的页面写在此处
            this.$router.push({ path: "/login" });
          }
        }, 100);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#homepage span {
  display: block;
  font-size: 50px;
  line-height: 200px;
  text-align: center;
}
</style>

