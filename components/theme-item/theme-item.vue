<template>
  <view class="themeItem">
    <!-- 前8个 -->
    <navigator url="/pages/calsslist/calsslist" class="box" v-if="!isMore">
      <image class="pic" :src="item.picurl" mode="aspectFill"></image>
      <view class="mask">{{item.name}}</view>
      <view class="tab">{{formatTimeDiff(item.updateTime)}}前更新</view>
    </navigator>
    <!-- 第9个：更多，reLaunch 才能跳转 tabBar -->
    <navigator url="/pages/classify/classify" open-type="reLaunch" class="box more" v-if="isMore">
      <image class="pic" src="/common/images/wallpaper/more.jpg" mode="aspectFill"></image>
      <view class="mask">
        <uni-icons type="more-filled" size="34" color="#fff"></uni-icons>
        <view class="text">更多</view>
      </view>
    </navigator>
  </view>
</template>

<script setup>
import formatTimeDiff from '../../utils/common'

  //接收父类传值
  defineProps({
    isMore: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default () { //对象类型的默认值
        return {
          name: '默认名称',
          picurl: '/common/images/wallpaper/classify1.jpg',
          updateTime: Date.now() - 1000 * 60 * 60 * 5
        }
      }
    }
  })
</script>

<style lang="scss" scoped>
  .themeItem {
    .box {
      height: 340rpx;
      border-radius: 10rpx; //父级加圆角、子级是图像会盖住，需要加 overflow: hidden;
      overflow: hidden;
      position: relative;

      .pic {
        width: 100%;
        height: 100%;
      }

      .mask {
        width: 100%;
        height: 70rpx;
        position: absolute;
        bottom: 0;
        left: 0;
        color: #fff;
        text-align: center;
        line-height: 70rpx;
        // 毛玻璃效果
        background: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10rpx); //半透明模糊效果属性
        font-weight: 600;
      }

      .tab {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(250, 129, 90, 0.7);
        backdrop-filter: blur(10rpx); //半透明模糊效果属性
        color: #fff;
        padding: 6rpx 14rpx;
        border-radius: 0 0 20rpx 0; //右下角圆角
        font-size: 22rpx; //字体最小12px，因此不能设置到小于24rpx
        transform: scale(0.8); //此时使用缩放可以对字体进行缩小
        transform-origin: left top; //以左上角为基准缩小
      }
    }

    .box.more {
      .mask {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center; //垂直居中
      }

      .text {
        font-size: 28rpx;
      }
    }
  }
</style>