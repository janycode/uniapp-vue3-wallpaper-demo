<template>
  <view class="homeLayout">
    <view class="banner">
      <!-- 轮播图-左右滚动：指示器、衔接、自动播放 -->
      <swiper
        indicator-dots
        indicator-color="rgba(255,255,255,0.5)"
        indicator-active-color="#fff"
        circular
        :autoplay="true"
        :interval="3000"
        :duration="1000">
        <swiper-item v-for="item in 3">
          <image src="/common/images/wallpaper/banner1.jpg" mode=""></image>
        </swiper-item>
      </swiper>
    </view>

    <view class="notice">
      <view class="left"></view>
      <view class="center"></view>
      <view class="right"></view>
    </view>
  </view>
</template>

<script setup></script>

<style lang="scss" scoped>
.homeLayout {
  .banner {
    width: 750rpx;
    padding: 30rpx 0;
    swiper {
      width: 750rpx;
      height: 340rpx;
      // &代表父级
      &-item {
        width: 100%;
        height: 100%;
        padding: 0 30rpx; //配合全局怪异盒子模型使用
        image {
          width: 100%;
          height: 100%;
          border-radius: 10rpx;
        }
      }
    }
  }
}
</style>
