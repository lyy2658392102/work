<template>
  <div class="healthStandard">
    <header>
      <i class="fl" @click="goBack()"></i>
      <div class="sign-out fr">标准说明</div>
      <div class="header-center">国家学生体质健康标准</div>
    </header>
    <main>
      <div class="synthesisScore">
        <ul>
          <li>
            <span>综合得分</span>
            <span>暂无体测记录</span>
          </li>
          <li>
            <div>
              <span>00.0</span>
              <span>暂无</span>
            </div>
            <span>
              距优秀差
              <span>0.00</span>分
            </span>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
