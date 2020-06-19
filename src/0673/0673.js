/**
 * 求最长子序列的个数
 * 我们假设俩个数组 dp[i] 表示以i 结束的子数组的最长子序列的长度, count[i] 表示以i 结束的子数组最长子序列的个数
 * 最后我们的结果是 遍历dp 看看以[1-n]结束的最长子序列的长度等于所有最大的最长子序列的长度, 然后sum(count)
 * 在计算i 的时候(0 <= j < i)  nums[i] > nums[j] 如果dp[j] + 1 > dp[i] 那么表示存在 最长子序列的长度发生改变 dp[i] = dp[j] + 1, count[i] = count[j]
 * 如果 dp[j] + 1 == dp[i]  表示i 的最长子序列的长度为dp[i] = dp[j] + 1 不需要发生改变, 但是需要累加count[j]的和. count[i] += count[j]
 */
var findNumberOfLIS = function(nums) {
  var n = nums.length
  var dp = Array.from({length: n}, () => 1)
  var count = Array.from({length: n}, () => 1)
  var ans = 0
  for(var i=0;i<n;i++) {
      for(var j=0;j<i;j++){
          if(nums[j] < nums[i]) {
              if(dp[j] + 1 > dp[i]) {
                  count[i] = count[j]
                  dp[i] = dp[j] + 1
              } else if(dp[j] + 1 == dp[i]) {
                  count[i] += count[j]
              }
          }
      }
      ans = Math.max(ans, dp[i])
  }
  var res = 0
  for(var i=0;i<n;i++) {
      if(dp[i] == ans) {
          res += count[i]
      }
  }
  return res
};