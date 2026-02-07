<template>
  <view class="preview">
    <swiper circular>
      <swiper-item v-for="item in 5">
        <image src="/common/images/wallpaper/classify2.jpg" mode="aspectFill" @click="maskChange"></image>
      </swiper-item>
    </swiper>

    <!-- 遮罩层 -->
    <view class="mask" v-if="maskState">
      <view class="goBack">
        图标
      </view>
      <view class="count">
        3 / 9
      </view>
      <view class="time">
        <uni-dateformat :date="Date.now()" format="hh:mm"></uni-dateformat>
      </view>
      <view class="date">
        <uni-dateformat :date="Date.now()" format="MM月dd日"></uni-dateformat>
      </view>
      <view class="footer">
        <view class="box">
          <uni-icons type="info" size="28"></uni-icons>
          <view class="text">
            信息
          </view>
        </view>
        <view class="box">
          <uni-icons type="star" size="28"></uni-icons>
          <view class="text">
            5分
          </view>
        </view>
        <view class="box">
          <uni-icons type="download" size="26"></uni-icons>
          <view class="text">
            下载
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue';

  const maskState = ref(true)
  const maskChange = () => {
    maskState.value = !maskState.value
  }
</script>

<style lang="scss" scoped>
  .preview {
    width: 100%;
    height: 100vh;
    position: relative;

    swiper {
      width: 100%;
      height: 100%;

      image {
        width: 100%;
        height: 100%;
      }
    }

    .mask {

      //父级的下一级子元素 view
      &>view {
        position: absolute;
        left: 0;
        right: 0;
        margin: auto; // 配合 left 0 right 0 就在中间了
        width: fit-content; //有多少内容宽度就多大，兼容性也可以
        color: #fff;
      }

      .goBack {}

      .count {
        top: 10vh;
        background: rgba(0, 0, 0, 0.3);
        font-size: 28rpx;
        border-radius: 40rpx;
        padding: 8rpx 28rpx;
        backdrop-filter: blur(10rpx);
      }

      .time {
        top: calc(10vh + 80rpx);
        font-size: 140rpx;
        font-weight: 100;
        line-height: 1em; //默认行高去掉，取值1em即可
        text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
      }

      .date {
        top: calc(10vh + 230rpx);
        font-size: 34rpx;
        text-shadow: 0 2rpx rgba(0, 0, 0, 0.3);
      }

      .footer {
        background: rgba(255, 255, 255, 0.8);
        bottom: 10vh;
        width: 65vw;
        height: 120rpx;
        border-radius: 120rpx;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(20rpx);

        .box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rpx 12rpx; //增加内边距，可以增加手指点击面积

          //border: 1px solid red;  //查看手指点击面积
          .text {
            font-size: 26rpx;
            color: $text-font-color-2;
          }
        }
      }
    }
  }
</style>