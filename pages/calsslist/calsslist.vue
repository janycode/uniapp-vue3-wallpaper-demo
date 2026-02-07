<template>
  <view class="classlist">
    <view class="content">
      <navigator url="/pages/preview/preview" class="item" v-for="item in 10">
        <image src="/common/images/wallpaper/preview1.jpg" mode=""></image>
      </navigator>
    </view>
    
    <!-- 底部安全区 -->
    <view class="safe-area-inset-bottom"></view>
  </view>
</template>

<script setup>
import { onLoad, onReachBottom } from '@dcloudio/uni-app'
import { apiGetClassify } from '../../api/apis'
import { ref } from 'vue'

//接收 url 携带的参数 :url="`/pages/calsslist/calsslist?id=111&name=jerry`"
onLoad(e => {
  console.log(e)
  let { id=null, name='' } = e
  console.log(id, name)
  //调用方法 func 进行渲染
})
// 触底回调
onReachBottom(() => {
  console.log('触底了')
  // pageNum++, 调用方法 func 进行下一页获取和渲染（func 方法中进行展开拼接）
  // 做触底防抖，避免无效网络请求，方案有二：①判断总数与累计数量  ②判断请求结果数据长度
})

const classList = ref([])
const getClassList = async () => {
  let res = await apiGetClassify()
  classList.value = res.data
  // 针对数据量比较大，需要传递到跳转的页面时使用本地缓存
  uni.setStorageSync('storageClassList', classList.value) //离开页面的时候将其清空即可
}

</script>

<style lang="scss" scoped>
  .classlist {
    .content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 5rpx;
      padding: 5rpx;
      .item {
        height: 440rpx;
        image{
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }
  }
</style>