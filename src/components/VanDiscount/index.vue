<template>
  <van-dialog v-model:show="show" title="标题" show-cancel-button>
    <img src="@/assets/imgs/券弹窗.png" />
  </van-dialog>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(true)
</script>
