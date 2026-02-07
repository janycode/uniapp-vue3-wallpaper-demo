<template>
  <view class="userLayout pageBg">
    <view class="userInfo">
      <!-- 头像 -->
      <view class="avatar">
        <image src="/static/logo.png" mode="aspectFill"></image>
      </view>
      <view class="nickname">127.0.0.1</view>
      <view class="address">来自于：中国</view>
    </view>
    <view class="section">
      <view class="list">
        <view class="row" v-for="(item, index) in sectionList.slice(0, 3)" key="item.iconType">
          <view class="left">
            <uni-icons :type="item.iconType" size="20"></uni-icons>
            <view class="text">{{ item.text }}</view>
          </view>
          <view class="right">
            <view class="text" v-if="index !== 2">22</view>
            <uni-icons type="right" size="15" color="#aaa"></uni-icons>
          </view>
        </view>
        <!-- 条件编译：小程序(MP)出现联系客服，其他出现拨打电话 -->
        <!-- #ifdef MP -->
        <button open-type="contact">联系客服</button>
        <!-- #endif -->
        <!-- #ifndef MP -->
        <button @click="clickContact">拨打电话</button>
        <!-- #endif -->
      </view>
    </view>
    <view class="section">
      <view class="list">
        <view class="row" v-for="item in sectionList.slice(3, 5)" key="item.iconType">
          <view class="left">
            <uni-icons :type="item.iconType" size="20"></uni-icons>
            <view class="text">{{ item.text }}</view>
          </view>
          <view class="right">
            <uni-icons type="right" size="15" color="#aaa"></uni-icons>
          </view>
        </view>
      </view>
    </view>


  </view>
</template>

<script setup>
  import {
    ref
  } from "vue";

  const sectionList = ref([{
      iconType: "download-filled",
      text: "我的下载",
    },
    {
      iconType: "star-filled",
      text: "我的评分",
    },
    {
      iconType: "chat-filled",
      text: "联系客服",
    },
    {
      iconType: "notification-filled",
      text: "订阅更新",
    },
    {
      iconType: "help-filled",
      text: "常见问题",
    },
  ]);
  
  // 拨打电话
  const clickContact = () => {
    uni.makePhoneCall({
    	phoneNumber: '114' //仅为示例
    });
  }
</script>

<style lang="scss" scoped>
  .userLayout {
    .userInfo {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 50rpx 0;

      .avatar {
        width: 160rpx;
        height: 160rpx;
        border-radius: 50%; //父级设置子元素image的圆角需要 overflow 否则切不到圆角
        overflow: hidden;

        image {
          width: 100%;
          height: 100%;
        }
      }

      .nickname {
        font-size: 44rpx;
        color: #333;
        padding: 20rpx 0 5rpx;
      }

      .address {
        font-size-adjust: 28rpx;
        color: #aaa;
      }
    }

    .section {
      width: 690rpx;
      margin: 50rpx auto;
      border: 1px solid #eee;
      border-radius: 10rpx;
      box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);

      .list {
        position: relative;

        .row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 30px;
          height: 100rpx;
          border-bottom: 1px solid #eee;
          background-color: white;
          &:last-child {
            border-bottom: 0;
          }

          .left {
            display: flex;
            align-items: center;

            .text {
              padding-left: 20rpx;
              font-size: 28rpx;
              color: #666;
            }
            
            //样式穿透到组件内部
            :deep(.uni-icons) {
              color: $brand-theme-color !important;
            }
          }

          .right {
            display: flex;
            align-items: center;

            .text {
              font-size: 28rpx;
              color: #666;
            }
          }
        }

        button {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100rpx;
          opacity: 0; //完全透明，按钮盖在联系客服上
        }
      }
    }
  }
</style>