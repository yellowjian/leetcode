/**
 * 滑动窗口, 记录当前位置i 为止的往前推数字恰好为k 和k-1 的最小值下标
 * 记性累加即可
 */
var subarraysWithKDistinct = function(A, K) {
  var len = A.length
  var a1 = Array.from({length: len}, () => 0)
  var a2 = Array.from({length: len}, () => 0)
  function find(a, K) {
      var vis = Array.from({length: len + 1}, () => 0)
      var cur = 0, j = 0
      for(var i=0;i<len;i++){
          if(vis[A[i]] == 0){
              cur++
          }
          vis[A[i]]++
          while(cur == K + 1) {
              if(vis[A[j]] == 1) cur --
              vis[A[j]] --
              j++
          }
          a[i] = j
      }
  }
  find(a1, K-1)
  find(a2, K)
  var ans = 0
  for (var i = 0; i < len; i++)
      ans += a1[i] - a2[i]

  return ans
};