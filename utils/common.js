/**
 * 时间戳与当前时间对比，返回友好时间描述（超3个月返回null）
 * @param {number} timestamp - 传入的时间戳（支持10位秒级/13位毫秒级）
 * @returns {string|null} - 如"1分钟"、"25分钟"、"3小时"、"5天"、"2月"，超3个月返回null
 */
export default function formatTimeDiff(timestamp) {
  // 1. 统一时间戳为毫秒级（兼容10位秒级时间戳）
  const targetTime = timestamp.toString().length === 10 ? timestamp * 1000 : timestamp
  const now = Date.now() // 当前时间戳（毫秒）
  const diffMs = Math.abs(now - targetTime) // 时间差（毫秒，取绝对值避免负数）

  // 2. 时间单位换算（毫秒 → 分钟/小时/天/月，月按30天近似计算）
  const minute = 60 * 1000 // 1分钟=60000毫秒
  const hour = 60 * minute // 1小时=3600000毫秒
  const day = 24 * hour // 1天=86400000毫秒
  const month = 30 * day // 1月≈30天（2592000000毫秒）
  const threeMonths = 3 * month // 3月≈90天

  // 3. 按规则判断并返回结果
  if (diffMs < minute) {
    // 1分钟内 → 显示"1分钟"
    return '1分钟'
  } else if (diffMs < hour) {
    // 1小时内 → 显示"X分钟"（取整）
    const minutes = Math.floor(diffMs / minute)
    return `${minutes}分钟`
  } else if (diffMs < day) {
    // 1天内 → 显示"X小时"（取整）
    const hours = Math.floor(diffMs / hour)
    return `${hours}小时`
  } else if (diffMs < month) {
    // 1月内 → 显示"X天"（取整）
    const days = Math.floor(diffMs / day)
    return `${days}天`
  } else if (diffMs < threeMonths) {
    // 3月内 → 显示"X月"（取整，按30天/月换算）
    const months = Math.floor(diffMs / month)
    return `${months}月`
  } else {
    // 超过3个月 → 返回null
    return null
  }
}