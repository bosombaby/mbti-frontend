# 一、前言
# 二、需求分析

# 三、技术探索
优先适配移动端 H5 ，主力机型 375*667
# 四、技术方案
:::info

- 优先适配移动端 H5 ，主力机型 375*667
:::
# 五、技术选型
**主要技术**：

- VUE 3 + Vue_Router + Pinia 前端开发，主流
- Vant4 组件库
- Vite 5 前端构建工具，新兴 / 优秀，本地编译速度很快，提高开发效率
- Tailwind css 原子化定义样式，脱离繁杂的 css 命名
- TypeScript 类型控制（项目规范，编辑器 / 开发工具会给你提示问题）
- Eslint 代码规范控制（项目规范，自动语法校验）
- Prettier 美化代码（项目规范，自动格式化代码）

依赖库：

- axios
- animejs 动画库
- mockjs 测试库

移动端适配：

- cnjm-postcss-px-to-viewport 将 px 转为 视口

```javascript
"dependencies": {
    "animejs": "^3.2.2",
    "axios": "^1.5.1",
    "normalize.css": "^8.0.1",
    "nprogress": "^0.2.0",
    "pinia": "^2.1.7",
    "vant": "^4.7.2",
    "vue": "^3.3.6",
    "vue-router": "^4.2.5"
  },
  "devDependencies": {
    "@commitlint/config-conventional": "^17.8.1",
    "@rushstack/eslint-patch": "^1.5.1",
    "@types/node": "^18.18.6",
    "@types/nprogress": "^0.2.2",
    "@typescript-eslint/parser": "^5.62.0",
    "@vitejs/plugin-vue": "^4.4.0",
    "@vitejs/plugin-vue-jsx": "^3.0.2",
    "@vue/eslint-config-prettier": "^7.1.0",
    "@vue/eslint-config-typescript": "^11.0.3",
    "@vue/tsconfig": "^0.1.3",
    "autoprefixer": "^10.4.16",
    "cnjm-postcss-px-to-viewport": "^1.0.0",
    "commitlint": "^17.8.1",
    "eslint": "^8.52.0",
    "eslint-plugin-vue": "^9.18.0",
    "husky": "^8.0.3",
    "less": "^4.2.0",
    "mockjs": "^1.1.0",
    "npm-run-all": "^4.1.5",
    "postcss": "^8.4.31",
    "prettier": "^2.8.8",
    "standard-version": "^9.5.0",
    "tailwindcss": "^3.3.3",
    "typescript": "~5.2.2",
    "unplugin-vue-components": "^0.22.12",
    "vite": "^4.5.0",
    "vite-plugin-cdn2": "^0.15.2",
    "vite-plugin-compression": "^0.5.1",
    "vite-plugin-html": "^3.2.0",
    "vite-plugin-mock-dev-server": "^0.3.21",
    "vite-plugin-svg-icons": "^2.0.1",
    "vite-plugin-vue-setup-extend": "^0.4.0",
    "vue-eslint-parser": "^9.3.2",
    "vue-tsc": "^1.8.20"
  },
```
# 六、初步设计
开发分支：dev_mbti_1
## 6.1 UI 组件

- 底部 tab 组件
- 畅玩日  home
   - 标题
   - 摇奖机 + 活动规则
   - 结果 + 倒计时
   - 用户人格 + 测试链接
   - 惊喜大奖
   - 商品展示
- 人格记  role
   - 人格卡片
- 去测试 quiz
   - 题目卡片

- 头部组件通用
## 6.2 摇奖机效果

1. 用户进入界面默认显示问号
2. 第一次用户点击抽奖按钮，向后端请求结果，把结果放到最后一个位置，结束后移除动画，交换首位元素，打乱中间元素
3. 第二次、第三次持续第二步的逻辑
## 6.3 待办事项

- [x] 摇奖机动画
- [x] 首页头图
- [ ] 头部分享按钮
- [ ] 奖励弹窗
- [ ] 活动规则
- [ ] 人格记
- [ ] 去测试




