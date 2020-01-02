<template>
  <div class="singleSelfTest">
    <div class="lineColor">
      <header>
        <i @click="goBack()"></i>
        <span class="header-center">单项自测</span>
      </header>
      <div class="singleSelfTest-top">
        <ul>
          <li>
            <img :src="man" alt />
            <span>{{childList.childName}}</span>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import man from "@/assets/man.png";
export default {
  data() {
    return {
      man: man,
      childList: {
        childName: "余威航",
        grade: "86"
      }
    };
  },
  created() {},
  methods: {}
};
</script>

