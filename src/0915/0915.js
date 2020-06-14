/**
 * 划水一题...
 * 给定一个数组 A，将其划分为两个不相交（没有公共元素）的连续子数组 left 和 right， 使得：
 * left 中的每个元素都小于或等于 right 中的每个元素。left 和 right 都是非空的。left 要尽可能小。
 * 在完成这样的分组后返回 left 的长度。可以保证存在这样的划分方法。
 * 
 * 直接从左到右遍历, 记录一下当前的最大值 如果最大值大于下一个元素, 那么长度加一往下, 一直遍历到数组结束为止.
 * 
 */

var partitionDisjoint = function(A) {
  var len = A.length
  var ans = A[0], res = A[0]
  var lenL = 1
  for(var i=1;i<len;i++) {
      if(A[i] < ans) {
         lenL = i + 1 
         ans = res
      } else {
          res = Math.max(res, A[i])
      }
  }
  return lenL
};