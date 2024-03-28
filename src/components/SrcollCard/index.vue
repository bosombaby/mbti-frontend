<template>
  <div class="role-display" @animationend="monitorAnimate">
    <ul
      class="scroll-box"
      ref="scrollRef"
      :class="{ 'scroll-box-move': isShowAnimate }"
    >
      <li v-for="(item, index) in lotteryList" :key="index">
        <img :src="item.src" alt="" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'
import useScrollList from '@/hooks/useScrollList'
const { lotteryList, setLotteryList, reverseLotteryList } = useScrollList()
const props = defineProps({
  delay: {
    type: Number,
    require: true,
    default: 0
  },
  isStartLottery: {
    type: Boolean,
    default: true
  },
  result: {
    type: Number,
    require: true,
    default: 0
  }
})

const delay = ref(props.delay + 's')
const isShowAnimate = ref(props.isStartLottery)
const scrollRef = ref(null)

// 监听动画是否停止
let monitorAnimate = () => {
  isShowAnimate.value = false
  reverseLotteryList()
}

watch(
  () => props.isStartLottery,
  newVlaue => {
    if (newVlaue) {
      isShowAnimate.value = true
      setLotteryList(props.result)
    }
  },
  { immediate: true }
)
</script>

<style scoped>
.role-display {
  width: 53px;
  height: 75px;
  overflow: hidden;
}

.scroll-box {
  display: flex;
  flex-direction: column;
  align-items: center;
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
    transform: translateY(calc(-100% + 75px));
  }
}
.scroll-box li {
  width: 44px;
  height: 75px;
}
.scroll-box li img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
