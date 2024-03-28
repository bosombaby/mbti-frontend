<template>
  <div class="home">
    <LotteryMachine />
  </div>
</template>

<script setup lang="ts" name="Home">
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
