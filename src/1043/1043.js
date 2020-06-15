/**
 * 
 * 给出整数数组 A，将该数组分隔为长度最多为 K 的几个（连续）子数组。分隔完成后，每个子数组的中的值都会变为该子数组中的最大值。
 * 返回给定数组完成分隔后的最大和。1 <= K <= A.length <= 500
 * 我们假设dp[i] 表示为(0-i)的最大和, 我们求dp[i]的时候,  需要取得[i-j+1, i] 这个区间的最大值 K>=j>=1, ans
 * 我们可以采用倒序的方式不断的更新区间的最大值 ans
 * dp[i] = Math.max(dp[i], dp[i-j] + j * ans) 假设这j 个数都是以当前区间的最大值来计算.
 * 需要注意的是当i-j <0 的时候 dp[i] = ans *j 。
 * 
 */

var maxSumAfterPartitioning = function(A, K) {
  var n = A.length
  var dp = Array.from({length: n}, () => 0)
  for(var i=0;i<n;i++){
      var ans = A[i]
      for(var j=1;j<=K && i-j+1 >= 0; j++) {
          ans = Math.max(ans, A[i - j + 1])
          if(i-j >=0) {
              dp[i] = Math.max(dp[i], dp[i-j] + j * ans)
          } else {
              dp[i] = ans * j
          }
      }
  }
  return dp[n-1]
};