<template>
  <van-share-sheet
    title="立即分享给好友"
    :options="options"
    v-model:show="isShowShare"
    @select="selectShareType"
  />
  <van-nav-bar
    fixed
    placeholder
    left-arrow
    title="MBTI 畅玩日"
    left-text="返回"
  >
    <template #right>
      <van-icon size="18px" name="share-o" @click="handleShowShare" />
    </template>
  </van-nav-bar>
</template>

<script setup>
import { ref } from 'vue'
const isShowShare = ref(false)
const options = [
  [
    { name: '微信', icon: 'wechat' },
    { name: '朋友圈', icon: 'wechat-moments' },
    { name: '微博', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' }
  ],
  [
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
    { name: '小程序码', icon: 'weapp-qrcode' }
  ]
]

let handleShowShare = () => {
  isShowShare.value = true
}

let selectShareType = option => {
  console.log(option)
}
</script>
