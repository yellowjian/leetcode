/**
 * 把长度为n(<=1000)的数组拆分成m(<=50)个子数组, 使得每个子数组的元素和最大值最小
 * 看n, m 的值  能接受的复杂度为 n*n*m, 上DP
 * 我们假设dp[i][j]表示 长度为i 的数组分成j 份得到的子数组元素和最大值最小, 那么结果就是dp[n][m]
 * 我们假设dp[k][j-1]是长度为k 分成j-1 份, 那么(k+1-i)就是第j个子数组, 所以遍历一遍k 即可
 * dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j-1], sum[i] - sum[k])) 0<=k<i
 */

var splitArray = function(nums, m) {
  var n = nums.length
  var dp = Array.from({length: n+1}, () => Array.from({length: m+1}, () => Number.MAX_VALUE))
  var sum = Array.from({length: n+1}, () => 0)
  for (var i = 0; i < n; i++) {
      sum[i + 1] = sum[i] + nums[i]
  }
  dp[0][0] = 0
  for(var i=1;i<=n;i++){
      for(var j=1;j<=m;j++){
          for(var k=0;k<n;k++){
              dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j-1], sum[i] - sum[k]))
          }
      }
  }
  return dp[n][m]
};