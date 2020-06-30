/**
 * 求出数组上和大于s 的长度最短的连续子数组长度 example: s = 7, nums = [2,3,1,2,4,3] [4,3] == 7 answer: 2
 * 
 * 滑动窗口: 记录一个sum 先累加  如果大于等于target 然后我们再去做优化的减法,(往右是加法, 往左是减法) 这样可以得到最优解.
 */
var minSubArrayLen = function(s, nums) {
  var ans = 1000010, sum = 0
  var l = 0
  for(var i=0;i<nums.length;i++) {
      sum += nums[i]
      while(sum >= s) {
          ans = Math.min(ans, i + 1 - l)
          sum -= nums[l]
          l++
      }
  }
  return ans == 1000010? 0: ans
};