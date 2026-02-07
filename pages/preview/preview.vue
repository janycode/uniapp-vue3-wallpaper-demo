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
        <view class="box" @click="clickInfo">
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

    <!-- unipopup 弹出框，从底部弹出 -->
    <uni-popup ref="infoPopup" type="bottom">
      <view class="infoPopup">
          <view class="popHeader">
            <view></view>
            <view class="title">
              壁纸信息
            </view>
            <view class="close" @click="clickInfoClose">
              <uni-icons type="closeempty" size="18" color="#999"></uni-icons>
            </view>
          </view>
          <scroll-view scroll-y>
            <view class="content">
              <view class="row">
                <view class="label">壁纸ID：</view>
                <!-- selectable：文字可以选中和复制 -->
                <text selectable class="value">123123123</text>
              </view>
              <view class="row">
                <view class="label">分类：</view>
                <text selectable class="value class">明星美女</text>
              </view>
              <view class="row">
                <view class="label">发布者：</view>
                <text selectable class="value">作者名字</text>
              </view>
              <view class="row">
                <view class="label">评分：</view>
                <view class="value rateBox">
                  <!-- 评分的星星效果 -->
                  <uni-rate v-model="value" @change="onChange" readonly touchable value="3.5" size="16"/>
                  <text class="score">5分</text>
                </view>
              </view>
              <view class="row">
                <view class="label">摘要：</view>
                <text selectable class="value">摘要文字内容填充部分，摘要文字内容填充部分，摘要文字内容填充部分，摘要文字内容填充部分</text>
              </view>
              <view class="row">
                <view class="label">标签：</view>
                <view class="value tabs">
                  <view class="tab" v-for="item in 3">标签名</view>
                </view>
              </view>
              <view class="copyright">
                声明：本图片来自用户投稿，非商业使用，用于免费学习交流，如果侵犯了您的权益，您可以拷贝壁纸ID举报至平台，管理员将删除侵权壁纸，维护您的权益。
              </view>
            </view>
          </scroll-view>
      </view>
    </uni-popup>

  </view>
</template>

<script setup>
  import { ref } from 'vue'

  // 点击信息底部弹出框遮罩状态
  const infoPopup = ref(null)
  const clickInfo = () => {
    infoPopup.value.open()
  }
  const clickInfoClose = () => {
    infoPopup.value.close()
  }

  // 遮罩层状态
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
    
    .infoPopup{
      background: #fff;
      padding: 30rpx;
      border-radius: 30rpx 30rpx 0 0;
      overflow: hidden;
      .popHeader {
        display: flex;
        justify-content: space-between; //头部：空盒子 + 壁纸信息 + 关闭按钮，空盒子是技巧
        align-items: center;
        .title {
          color: $text-font-color-2;
          font-size: 26rpx;
        }
        .close {
          padding: 6rpx; //增加手指可点击区域
        }
      }
      scroll-view {
        max-height: 60vh;
        .content {
          .row {
            display: flex;
            padding: 16rpx 0;
            font-size: 32rpx;
            line-height: 1.7em;
            .label {
              color: $text-font-color-3;
              width: 140rpx;
              text-align: right;
              font-size: 30rpx;
            }
            .value {
              flex: 1; //占用剩余宽度
              width: 0; //兼容性写法：不挤压左侧 label 的宽度
            }
            .rateBox {
              display: flex;
              align-items: center; //垂直居中
              .score {
                font-size: 26rpx;
                color: $text-font-color-2;
                padding-left: 10rpx;
              }
            }
            .tabs {
              display: flex;
              flex-wrap: wrap;
              .tab { //标签样式
                border: 1px solid $brand-theme-color;
                color: $brand-theme-color;
                font-size: 22rpx;
                padding: 10rpx 30rpx;
                border-radius: 40rpx;
                line-height: 1em;
                margin: 0 10rpx 10rpx 0;
              }
            }
            .class {
              color: $brand-theme-color;
            }
          }
          .copyright {
            font-size: 28rpx;
            padding: 20rpx;
            background-color: #F6F6F6;
            color: #666;
            border-radius: 10rpx;
            margin: 20rpx 0;
            line-height: 1.6em;
          }
       }
      }
    }
  }
</style>