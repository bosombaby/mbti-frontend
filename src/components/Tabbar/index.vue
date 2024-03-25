<template>
  <van-tabbar v-model="active" :placeholder="true" :route="true" fixed>
    <van-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :icon="item.icon"
      :to="item.to"
    >
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const active = ref(0);
const tabbarData = reactive([
  {
    icon: "wap-home-o",
    title: "畅玩日",
    to: {
      name: "Home"
    }
  },
  {
    icon: "gem-o",
    title: "人格记",
    to: {
      name: "Role"
    }
  },
  {
    icon: "user-o",
    title: "去测试",
    to: {
      name: "Quiz"
    }
  }
]);
</script>
