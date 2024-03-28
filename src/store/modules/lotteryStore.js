import { defineStore } from 'pinia'

export const useLotteryStore = defineStore({
  id: 'lottery-store',
  state: () => ({ remainCount: 3 })
})
