/**
 * 找出数组中的任意俩个数对, 使得和为target, 数字不能重复使用
 * 
 * 排序, 然后从数组俩头往里靠, 复杂度为排序复杂度nlog(n)
 * 
 */

var pairSums = function(nums, target) {
  var n = nums.length
  nums.sort(function(a, b){return a - b})
  var ans = []
  var left = 0, right = n-1
  while(left < right) {
      if(nums[left] + nums[right] == target) {
          ans.push([nums[left], nums[right]])
          left ++, right--
      } else if(nums[left] + nums[right] <  target){
          left ++
      } else right --
  }
  return ans
};