<template>
  <div class="container">
    <div class="machine">
      <img src="@/assets/imgs/抽奖机.png" alt="" />
      <div class="role-list">
        <ScrollCard :delay="0" />
        <ScrollCard :delay="0.5" />
        <ScrollCard :delay="1" />
      </div>
      <div class="click-btn" @click="startLottery"></div>
      <div class="activity-rule">活动规则</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ScrollCard from "@/components/SrcollCard/index.vue";

const isStartLottery = ref(false);

let startLottery = () => {
  isStartLottery.value = true;
  console.log("开始抽奖", isStartLottery.value);
};
</script>

<style scoped>
.machine {
  position: relative;
  top: 0;
  width: 100%;
  height: 300px;
}

.click-btn {
  position: absolute;
  width: 70px;
  height: 25px;
  right: 155px;
  bottom: 120px;
}

.role-list {
  position: absolute;
  width: 142px;
  height: 73px;
  top: 58px;
  right: 118px;
  display: flex;
  column-gap: 5px;
  /* background-color: pink; */
}

.activity-rule {
  position: absolute;
  max-width: 20px;
  top: 4rem;
  right: 0;
  text-decoration: none;
}
</style>
