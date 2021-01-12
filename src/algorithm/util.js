// 返回左边界大于的第一个下标
var left_bound = function(l, val) {
  var left = 0, right = l.length
  while(left < right) {
      var mid = Math.floor((left + right) / 2)
      if(l[mid] >= val) {
          right = mid
      } else {
          left = mid + 1
      }
  }
  return left
}
// 右边界
var left_bound = function(l, val) {
  var left = 0, right = l.length
  while(left < right) {
      var mid = Math.floor((left + right) / 2)
      if(l[mid] <= val) {
          left = mid + 1
      } else {
          right = mid
      }
  }
  return left - 1
}
// LIS O(nlogn) 解法
var lis = function(l) {
  var top = 0
  var n = l.length
  var dp = [l[0]]
  for(var i=1;i<n;i++) {
      if(l[i] > dp[top]) {
          dp[++top] = l[i]
      } else {
          var val = l[i]
          var pos = left_bound(dp, val)
          dp[pos] = l[i]
      }
  }
  return dp.length
}