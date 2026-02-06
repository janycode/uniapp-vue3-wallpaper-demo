<template>
  <view class="homeLayout">
    <!-- banner区 -->
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

    <!-- 公告区 -->
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

    <!-- 推荐区 -->
    <view class="select">
      <!-- 自定义组件 -->
      <common-title>
        <template #name>每日推荐</template>
        <template #custom>
          <view class="date">
            <uni-icons type="calendar" size="18" color="#2DB38E"></uni-icons>
            <view class="text">
              <!-- uni-dateformat 日期格式化：安装 -->
              <uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
            </view>
          </view>
        </template>
      </common-title>
      <view class="content">
        <!-- 横向左右滑动：①scroll-x ②父级不让换行 ③image行级块 -->
        <scroll-view scroll-x>
          <view class="box" v-for="item in 8">
            <image
              src="/common/images/wallpaper/preview_small.webp"
              mode="aspectFill"></image>
          </view>
        </scroll-view>
      </view>
    </view>

    <view class="theme">
      <common-title>
        <template #name>专题精选</template>
        <template #custom>
          <navigator url="" class="more">More+</navigator>
        </template>
      </common-title>

      <view class="content">
        <theme-item v-for="item in 8"></theme-item>
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

  .select {
    padding-top: 50rpx;

    .content {
      width: 720rpx; //右侧可以贴边
      margin-left: 30rpx;
      margin-top: 30rpx;

      scroll-view {
        white-space: nowrap; //不换行

        .box {
          width: 200rpx;
          height: 445rpx;
          display: inline-block;
          margin-right: 15rpx;

          image {
            width: 100%;
            height: 100%;
            border-radius: 10rpx;
          }
        }

        .box:last-child {
          //让最后一个显示与全局一样的右侧宽度间距
          margin-right: 30rpx;
        }
      }
    }

    .date {
      color: #2db38e;
      display: flex;
      align-items: center;

      .text {
        margin-left: 5rpx;
      }
    }
  }

  .theme {
    padding-top: 50rpx;

    .more {
      font-size: 32rpx;
      color: #999;
    }

    .content {
      margin-top: 30rpx;
      padding: 0 30rpx;
      // 网格布局
      display: grid;
      gap: 15rpx;
      grid-template-columns: repeat(3, 1fr); //每行3个
    }
  }
}
</style>
