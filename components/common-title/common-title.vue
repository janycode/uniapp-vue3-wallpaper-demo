<template>
  <view class="common-title">
    <view class="name">
      <!-- 开放第个插槽 -->
      <slot name="name"></slot>
    </view>
    <view class="custom">
      <!-- 开放第二个插槽 -->
      <slot name="custom"></slot>
    </view>
  </view>
</template>

<script setup></script>

<style lang="scss" scoped>
.common-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30rpx;
  .name {
    font-size: 35rpx;
  }
}
</style>
