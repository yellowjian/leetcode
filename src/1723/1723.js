/**
 * 大概题意就是将n长度的数组 划分成k份, 怎么样划分使得每一个子数组的和的最大值最小。
 * 由于这里k 值很小  可以用状态压缩DP求解
 * 
 * dp[i][j]  // 表示分成i 个子数组用掉 j个元素(这里j 指的是二进制下面对应的1 表示为选中的数字, 0 表示为未选择的数字) 的最大值的最小值
 * 
 * 所以最后答案就是dp[k-1][(1<<n) - 1]  (1<<n) - 1 n个二进制位上面都为1 表示数组都选了
 * 首先 初始的时候 划分成一个子数组的话就是对应的选中数字的和  所以dp[0][i] = sum[i]
 * 我们初始化sum 表示的是i二进制对应的数字为1 的元素的和
 * 这里需要注意 对于二进制的遍历  有一种 for(var l=j;l;l=(l-1) & j) 表示l 就是j的子集
 * 
 */
var minimumTimeRequired = function(jobs, k) {
  var n = jobs.length
  Array.from({length: n}, () => 0)
  var sum = Array.from({length: 1<<n}, () => 0)
  for(var i=1;i< (1<<n);i++) {
      for(var j=0;j<n;j++) {
          if((i & (1<<j)) == 0) continue
          var left = (i - (1 << j))
          sum[i] = sum[left] + jobs[j]
          break
      }
  }
  var dp = Array.from({length: k}, () => Array.from({length: 1<<n}, () => -1))
  for (var i = 0; i < (1 << n); i++) {
      dp[0][i] = sum[i]
  }
  for(var i=1;i<k;i++) {
      for(var j=1;j<1<<n;j++) {
          var minV = 1000000009;
          for(var l=j;l;l=(l-1) & j) {
              var val = Math.max(dp[i-1][j-l], sum[l])
              minV = Math.min(minV, val)
          }
          dp[i][j] = minV
      }
  }
  return dp[k-1][(1<<n) - 1]
};