<template>
  <div
    class="scroll-box border-animate"
    :style="scrollStyle"
    @animationend="showAnimate = false"
  >
    <ul ref="num" class="scroll-num" :class="{ animate: showAnimate }">
      <li>0</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>0</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ScrollNum",
  props: {
    // 定位的数字
    num: {
      type: Number,
      default: 0,
      validator: n => n < 10 && n >= 0 && Number.isInteger(n)
    },
    // 每个数字延迟停止
    delay: { type: Number, default: 0.1 },
    // 自定义尺寸
    size: { type: String, default: "small" }
  },
  data: () => ({
    showAnimate: true // 控制无限滚动结束
  }),
  computed: {
    scrollStyle() {
      const sizeMap = {
        small: "20px",
        medium: "36px",
        large: "56px"
      }[this.size];
      return {
        "--num": this.num, // CSS变量，提供到style使用
        "--delay": this.delay,
        "--width": sizeMap
      };
    }
  }
};
</script>

<style scoped>
.scroll-box {
  width: var(--width, 20px);
  height: calc(var(--width, 20px) * 1.8);
  color: #fff;
  font-size: calc(var(--width, 20px) * 1.1);
  line-height: calc(var(--width, 20px) * 1.8);
  text-align: center;
  border: 1px solid #fff;
  border-radius: 5px;
  margin-right: 30px;
  overflow: hidden;
  flex-shrink: 0; /* 保证不被压缩 */
}
.animate {
  animation: move 1s linear infinite,
    num-bounce 1s calc(var(--delay) * 1s) forwards;
}
​.border-animate {
  animation: border-bounce 1s calc(var(--delay) * 1s) forwards;
}
.scroll-num {
  padding: 0;
  margin: 0;
  list-style: none;
  transform: translateY(calc(var(--num) * -9.09%));
}

@keyframes move {
  0% {
    transform: translateY(-90%);
    filter: blur(2px);
  }
  100% {
    transform: translateY(1%);
    filter: blur(2px);
  }
}

@keyframes num-bounce {
  0% {
    transform: translateY(calc(8 * -9.09% - 7%));
    filter: none; /* 最后取消模糊效果 */
  }
  25% {
    transform: translateY(calc(8 * -9.09% + 3%));
  }
  50% {
    transform: translateY(calc(8 * -9.09% - 1%));
  }
  70% {
    transform: translateY(calc(8 * -9.09% + 0.6%));
  }
  85% {
    transform: translateY(calc(8 * -9.09% - 0.3%));
  }
  100% {
    transform: translateY(calc(8 * -9.09%));
    filter: none; /* 最后取消模糊效果 */
  }
}

@keyframes border-bounce {
  25% {
    transform: translateY(7%);
  }
  50% {
    transform: translateY(-3%);
  }
  70% {
    transform: translateY(4%);
  }
  85% {
    transform: translateY(-1%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
