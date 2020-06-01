

假设 dp[n][i][k] 为长度为n 最大值为i, cost为k 的数组的数目, 则dp[n][1-m][k]为我们所求的
确定边界条件 dp[1][i][1] = 1 对于其他的n,i, k 来说, 存在俩种情况

1. 当最大值恰好出现在数组的末尾的时候, 方法有 dp[n-1][1-(i-1)][k-1], 即前n-1个数都小于i;
2. 当最大值出现在1-(n-1)之间的时候, 数组末尾的数是从1-i中任意的都可以 i * (dp[n-1][i][j])

所以 dp[n][i][k] = i×dp[n−1][i][k] + dp[n−1][1-(i-1)][k−1]

/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var numOfArrays = function(n, m, k) {
  var dp = Array.from({length: 51}, _ => Array.from({length: 101}, _ => Array.from({length: 51}, _ => 0)))
  var mod = 10**9 + 7
  for(var i=1;i<=n;i++) {
      for(var j=1;j<=m;j++) {
          for(var v=1;v<=k;v++) {
              if (i == 1 && v == 1) {
                  dp[1][j][1] = 1
                  continue
              }
              dp[i][j][v] += j * dp[i - 1][j][v] % mod
              var temp = 0
              for(var q = 0;q<j;q++) {
                  dp[i][j][v] += dp[i-1][q][v-1]
                  dp[i][j][v] %= mod
              }
          }
      }
  }
  var ans = 0;
  for(var i=1;i<=m;i++) {
      ans += dp[n][i][k]
      ans %= mod
  }
  return ans
};