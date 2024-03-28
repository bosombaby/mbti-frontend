<template>
  <van-dialog v-model:show="show" title="标题" show-cancel-button>
    <img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" />
  </van-dialog>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(true)
</script>
