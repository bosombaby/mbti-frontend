<template>
  <div class="container">
    <div class="machine">
      <div class="remain-count">{{ remainCount }}</div>
      <div class="role-list">
        <ScrollCard
          v-for="item in scrollList"
          :key="item.delay"
          :delay="item.delay"
          :result="item.result"
          :isStartLottery="isStartLottery"
        />
      </div>
      <div class="click-btn" @click="startLottery"></div>
      <div class="activity-rule"></div>
      <van-popup
        v-model:show="isShowActivityRule"
        closeable
        close-icon="close"
        position="bottom"
        :style="{ height: '30%' }"
        ><div class="header"></div>
        <div class="content"></div>
      </van-popup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'vant'
import { getLottery } from '@/api/deploy/index'
import ScrollCard from '@/components/SrcollCard/index.vue'
const remainCount = ref(3)
const isStartLottery = ref(false)
const isShowActivityRule = ref(true)

const scrollList = ref([
  { delay: 0, result: 0 },
  { delay: 0.5, result: 0 },
  { delay: 1, result: 0 }
])

// 折扣定义
const discountInfo = ref('')

let getRandomNum = () => {
  const numbers = []
  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    numbers.push(randomNumber)
  }
  return numbers
}

// 判断是否符合抽奖规则
let isCanLottery = () => {
  if (remainCount.value <= 0) {
    showToast({
      message: '抽奖次数已用完，请分享好友获取更多抽奖次数 !',
      wordBreak: 'break-all'
    })
    return false
  }

  if (isStartLottery.value) {
    showToast('正在抽奖中')
    return false
  }
  return true
}

let timer = null
let endLottery = () => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    isStartLottery.value = false
    remainCount.value -= 1
    showToast(discountInfo.value)
  }, 5000)
}

let startLottery = async () => {
  if (!isCanLottery()) return
  const res = await getLottery({ memberId: '111111111' })

  const nums = res.randoms
  if (res.free) {
    discountInfo.value = '恭喜您，抽中超级大奖!'
  } else if (res.discount == 0.89) {
    discountInfo.value = '恭喜您，抽中89折优惠券!'
  } else if (res.discount == 0.69) {
    discountInfo.value = '恭喜您，抽中69折优惠券!'
  } else if (res.discount == 0.49) {
    discountInfo.value = '恭喜您，抽中49折优惠券!'
  }
  isStartLottery.value = true
  scrollList.value.forEach((item, index) => {
    item.result = nums[index]
  })

  console.log('开始抽奖', isStartLottery.value, nums)
  endLottery()
}
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
  width: 73px;
  height: 26px;
  right: 152px;
  bottom: -45px;
}

.remain-count {
  position: absolute;
  width: 73px;
  height: 26px;
  line-height: 26px;
  right: 96px;
  bottom: 105px;
  color: red;
  font-size: 12px;
  font-weight: bold;
}

.role-list {
  position: absolute;
  width: 160px;
  height: 82px;
  top: 206px;
  left: 108px;
  display: flex;
  align-items: center;
  column-gap: 2px;
}

.activity-rule {
  position: absolute;
  max-width: 20px;
  top: 4rem;
  right: 0;
  text-decoration: none;
}
</style>
