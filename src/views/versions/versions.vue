<template>
  <div class="forgetpass versions">
    <header class="clearfix">
      <i @click="goBack()"></i>
      <span class="header-center">版本</span>
    </header>
    <img :src="physicalcloudicon" alt />
    <p>学生体质云已经是最新版本</p>
    <p>当前版本号：2.3.6</p>
    <div class="btn">
      <van-button type="default" round size="large" color="#FF7A18">下载更新</van-button>
    </div>
  </div>
</template>
<script>
import physicalcloudicon from "@/assets/physicalcloudicon.png";
export default {
  data() {
    return {
      physicalcloudicon: physicalcloudicon
    };
  },
  created() {},
  methods: {}
};
</script>
