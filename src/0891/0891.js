/**
 * 首先对数组进行排序, 排序不影响子序列的定义
 * 对于具有最大值为a[j], 最小值为a[i]的子序列数量为Math.pow(2, j-i-1)个
 * 可以预处理范围里面的Math.pow(2, 1-n)
 * 然后根据数学进行计算(不能O(n*n)遍历,会超时)
 * [0-n-1] (Math.pow(2, i) - Math.pow(2, n-i-1) * a[i])
 */


/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubseqWidths = function(A) {
  A.sort((a,b) => a-b)
  var a = Array.from({length: 20001}, _ => 1)
  var mod = 10 ** 9 + 7
  for(var i=1;i<=20000;i++){
      a[i] = a[i-1] * 2
      a[i] %= mod
  }
  var ans = 0;
  for(var i=0;i<A.length;i++){
      ans +=(a[i] - a[A.length-i-1]) * A[i]
      ans %= mod
  }
  return ans
};       