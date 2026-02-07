// 获取系统信息: h5是0，微信小程序不同的机型高度不一样，如iphone12 是47
const SYSTEM_INFO = uni.getSystemInfoSync()
export const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 15

// 微信小程序：高度计算，通过获取胶囊按钮的信息
export const getTitleBarHeight = () => {
  // 有胶囊按钮时获取高度计算，没有的话固定返回 40，基本通用
  if (uni.getMenuButtonBoundingClientRect) {
    let { top, height } = uni.getMenuButtonBoundingClientRect()
    return height + (top - getStatusBarHeight()) * 2
  } else {
    return 40
  }
}
export const getNavBarHeight = () => getStatusBarHeight() + getTitleBarHeight()

// 抖音小程序：左侧固定有一个 logo
export const getLeftIcon = () => {
  // 条件编译
  // #ifdef MP-TOUTIAO
  let { leftIcon: { left, width } } = tt.getCustomButtonBoundingClientRect()
  return left + parseInt(width)
  // #endif
  // #ifndef MP-TOUTIAO
  return 0
  // #endif
}