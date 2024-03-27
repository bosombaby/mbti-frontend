<template>
  <div class="role-display" @animationend="monitorAnimate">
    <ul
      class="scroll-box"
      ref="scrollRef"
      :class="{ 'scroll-box-move': props.isStartLottery }"
    >
      <li v-for="(item, index) in scrollList" :key="index">
        <img :src="item.src" alt="" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, defineProps, onUpdated } from "vue";
import { scrollListConfig } from "@/config/LotteryConfig";
const props = defineProps({
  delay: {
    type: Number,
    require: true,
    default: 0
  },
  isStartLottery: {
    type: Boolean,
    default: true
  }
});

const delay = ref(props.delay + "s");
const isShowAnimate = ref(props.isStartLottery);
const scrollRef = ref(null);

const prizeResult = scrollListConfig[4];
const scrollList = ref([...scrollListConfig, prizeResult]);

// 监听动画是否停止
let monitorAnimate = () => {
  // 将最后一个变为第一个
  scrollList.value = [prizeResult, ...scrollListConfig];
  isShowAnimate.value = false;
};

onUpdated(() => {
  console.log("开始更新", props);
});
</script>

<style scoped>
.role-display {
  width: 44px;
  height: 73px;
  /* overflow: hidden; */
}

.scroll-box {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  position: relative;
}

.scroll-box-move {
  animation: move 4s ease-in-out v-bind(delay) forwards;
}

@keyframes move {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(calc(-100% + 73px));
  }
}
.scroll-box li {
  width: 44px;
  height: 73px;
}
.scroll-box li img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
