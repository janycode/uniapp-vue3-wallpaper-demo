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
      <!-- uni-icons 图标：安装 和 使用、重启项目 -->
      <view class="left">
        <uni-icons type="sound-filled" size="20" color="#2DB38E"></uni-icons>
        <text class="text">公告</text>
      </view>
      <view class="center">
        <swiper vertical :autoplay="true" :interval="1500" :duration="300">
          <swiper-item v-for="item in 4">
            纵向轮播文字内容纵向轮播文字内容纵向轮播文字内容
          </swiper-item>
        </swiper>
      </view>
      <view class="right">
        <uni-icons type="right" size="20" color="#2DB38E"></uni-icons>
      </view>
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
  .notice {
    width: 690rpx;
    height: 80rpx;
    line-height: 80rpx;
    background: #f9f9f9;
    margin: 0 auto;
    border-radius: 80rpx;
    display: flex;
    .left {
      width: 140rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      .text {
        color: #2db38e;
        font-weight: 600;
        font-size: 28rpx;
      }
    }
    .center {
      flex: 1; //中间占满，左右两侧设置好宽度即可
      swiper {
        height: 100%; //继承父级
        &-item {
          height: 100%;
          font-size: 30rpx;
          color: #666;
          //溢出显示省略号 3个属性
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .right {
      width: 70rpx;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
