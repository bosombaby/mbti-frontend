<template>
  <van-popup
    v-model:show="isShowActivityRule"
    closeable
    close-icon="close"
    position="bottom"
    :style="{ height: '70%' }"
    ><div class="header">活动规则</div>
    <div class="content">
      <div class="time">
        <div class="title">活动时间</div>
        <ul class="info">
          <li>活动时间：每周一10：00-23：55</li>
          <li>惊喜大奖开奖时间：每周一 上午10：00</li>
        </ul>
      </div>
      <div class="benefits">
        <div class="title">活动权益内容</div>
        <ul class="info">
          <li>具体可参与城市、酒店、景点以活动界面为准</li>
        </ul>
      </div>
      <div class="explain">
        <div class="title">活动说明</div>
        <ul class="info">
          <li>
            <div class="sub-title">（1）玩法说明</div>
            <div class="desc">
              ●
              每周一会从16种人格中随机选取一种人格，作为本期活动的幸运人格。<br />
              ●
              在活动开启当天，每个用户最多有三次摇奖机会。每次都有机会获得奖励。<br />
              ● 摇奖结果中幸运人格出现次数越多，优惠券折扣力度越大。 <br />●
              出现一次为8.9折，出现两次为6.9折，出现三次为4.9折。
            </div>
          </li>
          <li>
            <div class="sub-title">（2）摇奖说明</div>
            <div class="desc">
              ●
              若用户最后一次人格测试结果为幸运人格，则第1出奖口默认为幸运人格，即用户最低可以获得8.9折优惠券。其他用户三个出奖口完全随机。<br />
              ●
              所有用户均有机会抽到终极大奖--（出奖结果为三个飞儿萌组合），即可解锁”1元购“，购买本期惊喜大奖。
            </div>
          </li>
          <li>
            <div class="sub-title">（3）人格测试说明</div>
            <div class="desc">
              ● 每周一 0：00-24:00 不可测试 <br />
              ● 每周二到周日 0：00-23：55 时间内，可以重复进行测试！
            </div>
          </li>
          <li>
            <div class="sub-title">（4）优惠券使用说明</div>
            <div class="desc">
              ● 同一订单仅可使用一张优惠券，不可叠加使用。<br />
              ● 优惠券有效期为自当期活动为初始节点的7天内可用。<br />●
              活动期间内可预订日期具体以实际商品的预订日历范围内可定日为准。<br />
              ● 活动订单查看路径:同程旅行【我的-全部订单】里面查看。<br />
              ● 优惠券只能购买本活动界面内的商品，无法转让。<br />
            </div>
          </li>
        </ul>
      </div>
      <div class="price">
        <div class="title">价格说明</div>
        <ul class="info">
          <li>
            划线价格指商品或服务的门市价、服务提供商的指导价零售价或该商品或服务曾经展示过的销售价等，并非原价:产品信息实时更新、市场价格波动等原因都可能导致价格与您预订时展示的价格不一致，该价格仅供您参考。
          </li>
          <li>
            未划线价格指商品或服务的实时标价，为在划线价基础上计算的优惠金额。具体成交价格根据商品或服务参与的活动，或会员使用优惠券等具体情况发生变动，最终以订单结算价格为准。
          </li>
          <li>
            此说明仅当出现价格比较时有效。若服务提供商单独对划线价格进行说明的，以服务提供商的说明为准。如有疑问，您可以在预订前联系客服进行咨询。
          </li>
        </ul>
      </div>
      <div class="refund-inventory">
        <div class="title">退改与库存规则</div>
        <ul class="info">
          <li>退改规则：不同产品退改规则不同，具体以产品详情页展示为准。</li>
          <li>活动库存：每期活动产品数量有限，具体以活动页面为准</li>
        </ul>
      </div>
      <div class="other">
        <div class="title">其他说明</div>
        <div class="info" style="text-indent: 2em; line-height: 2">
          活动期间，在法律允许的范围内，同程旅行可根据实际情况对本次活动权益及活动规则进行变更或调整，同程旅行可对用户进行反作弊监督。活动过程中，用户不得使用任何外挂、插件以及其他工具或行为破坏活动规则，违反诚实信用原则及违背活动公平原则的方式参与本次活动(包含但不限于同一用户大量注册、恶意购买、倒买倒卖、虚假交易等)。用户及商户不得进行共同或单方面的作弊行为，否则同程旅行将取消用户或商户的参与资格，取消已经领取或者使用的福利，经判定情节严重的，将取消后续参与平台活动的资格，并保留追究法律责任的权利。
        </div>
      </div>
    </div>
  </van-popup>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useLotteryStore } from '@/store/modules/lotteryStore'
const lotteryStore = useLotteryStore()
const { isShowActivityRule } = storeToRefs(lotteryStore)
</script>

<style lang="scss" scoped>
.header {
  font-size: 16px;
  font-weight: bolder;
  padding: 15px 10px 0 10px;
  text-align: center;
}

.content {
  padding: 10px;
  font-size: 14px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.title {
  font-size: 14px;
  font-weight: bold;
  padding: 10px 0;
}

.info {
  color: rgb(41, 31, 31);
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.price .info li {
  text-indent: 1.5em;
}
.desc {
  line-height: 1.6;
  padding: 10px 0 10px 25px;
}
</style>
