/**
 * 统计并返回 nums 中能满足其最小元素与最大元素的 和 小于或等于 target 的 非空 子序列的数目
 * 目前我们需要找到满足这样的子序列有多少个
 * 首先我们对数组进行排序.
 * 这样假设(min, ...., max) 如果(min + max) <= target 的话 这样的子序列有Math.pow(2, n-1) 个
 * 这样我们记录的是l = min , r = max 我们不断的往里面推进 继续类似这样的统计, 直到最后r < l 
 * 我们可以预先计算2的n次方  来节省时间
 */
var numSubseq = function(nums, target) {
  nums.sort((a,b) => a - b)
  var n = nums.length
  var l = 0, r = n -1
  var ans = 0
  var mod = 10 ** 9 + 7
  var temp = 1
  var arr = []
  for(var i=0;i<n;i++) {
      arr[i] = temp
      temp *= 2
      temp %= mod
  }
  while(l<=r) {
      if(nums[l] + nums[r] <= target) {
          ans += arr[r-l]
          ans %= mod
          l++
      } else r--
  }
  return ans
};