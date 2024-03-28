<template>
  <div class="home">
    <LotteryMachine />
    <van-dialog v-model:show="show" title="标题">
      <img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" />
    </van-dialog>
  </div>
</template>

<script setup lang="ts" name="Home">
import { ref } from 'vue'
const show = ref(true)
import LotteryMachine from './components/LotteryMachine.vue'
</script>

<style scoped>
.home {
  position: relative;
  width: 100%;
  height: 1200px;
  background: url('@/assets/imgs/主页画板.png') no-repeat scroll top / contain;
}
</style>
