<template>
  <view class="classLayout pageBg">
    <!-- 公共自定义头部组件 -->
    <custom-nav-bar title="分类"></custom-nav-bar>
    <view class="classify">
      <!-- <theme-item v-for="item in classifyList" :key="item._id" :item="item"></theme-item> -->
      <theme-item v-for="item in 10"></theme-item>
    </view>
  </view>
</template>

<script setup>
  import { ref } from 'vue'
  import { apiGetClassify } from '../../api/apis'

  const classifyList = ref([])
  const getClassify = async () => {
    let res = await apiGetClassify({ pageSize: 20 })
    classifyList.value = res.data
  }
</script>

<style lang="scss" scoped>
  .classify {
    padding: 30rpx;
    // 网格布局
    display: grid;
    gap: 15rpx;
    grid-template-columns: repeat(3, 1fr); //每行3个
  }
</style>