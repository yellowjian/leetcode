/**
 * 给定一个非空整数数组，找到使所有数组元素相等所需的最小移动数，其中每次移动可将选定的一个元素加1或减1。example: [1,2,3] => 2 (1->2 +1   3->2 -1)
 * 中位数原理, 所有数到中间位置的数的距离之和最小 (当数位偶数时  任意选择一个即可)
 */
var minMoves2 = function(nums) {
  nums.sort((a, b) => a - b)
  var ans = 0, n = nums.length
  for(var i=0;i<n;i++) {
      ans += Math.abs(nums[Math.floor(n / 2)] - nums[i])
  }
  return ans
};