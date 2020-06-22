/**
 * 给定正整数数组和 正整数L R 
 * 问连续的子数组(最大值在[L,R])的个数
 * 对于A[i] >R 来说 从i 哪里相当于拆分成了俩个子数组来计算[0, i-1] [i+1][n-1]
 * 所以我们先统计<=R 的所有子数组有多少   
 * 对于子数组[0,0,1](我们假设值在[L,R]为1, <L 为0) 我们需要的是0,0,1. 0,1. 1 三个 
 * 对于子数组[0,1,0](我们假设值在[L,R]为1, <L 为0) 我们需要的是0,1. 1. 1,0. 1,0,1 四个
 * 然后我们再统计<L 的所有子数组等于多少
 * 我们做减法就可以求得值
 * 
 */
var numSubarrayBoundedMax = function(A, L, R) {
  var n = A.length
  function solve(val) {
      var ans = 0, res = 0 
      for(var i=0;i<n;i++) {
          if(A[i] <= val) ans++
          else ans = 0
          res += ans
      }
      return res
  }
  return solve(R) - solve(L-1)
};