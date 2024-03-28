import { ref } from 'vue'
import { scrollListConfig } from '@/config/LotteryConfig'
const useScrollList = () => {
  const lotteryList = ref([...scrollListConfig])

  const setLotteryList = index => {
    lotteryList.value.push(scrollListConfig[index])
  }

  const reverseLotteryList = () => {
    lotteryList.value.splice(0, 1)
    lotteryList.value = lotteryList.value.reverse()
  }

  return {
    lotteryList,
    setLotteryList,
    reverseLotteryList
  }
}

export default useScrollList
