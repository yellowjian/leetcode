/**
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近.
 * 
 * 1. 首先我们给数组排序()
 * 2. 然后遍历数组 取到当前nums[i]
 *    然后我们定义俩个下标为 l = i-1 r = i+1 , 计算nums[i] + nums[l] + nums[r] 通过与target 进行比较,记录绝对值之差ans 我们要确保ans 最小
 *    然后不断的更新我们的res (res 为 ans 最小的时候的nums[i] + nums[l] + nums[r], 就是我们最终需要的结果), 由于存在排序的问题, 当
 *    nums[i] + nums[l] + nums[r] > target 的时候, l-- , 因为nums[l-1] < nums[l],这样结果更加靠近target, 当nums[i] + nums[l] + nums[r] < target
 *    r++, nums[r+1] > nums[r] 当l == 0 或者r == n-1的时候, l == 0时如果nums[i] + nums[l] + nums[r] > target 那么直接终止(剪枝) 或者 r == n-1时, 
 *    如果nums[i] + nums[l] + nums[r] < target 那么直接终止(剪枝)
 */
var threeSumClosest = function(nums, target) {
  var n = nums.length
  nums.sort((a,b)=>a-b)
  var ans = 100010, val
  var l, r
  for(var i=1;i<n-1;i++){
      l = i-1, r = i+1
      var res = 0
      while(l>=0 && r<n) {
          res = nums[i] + nums[l] + nums[r]
          if(res > target) {
              l --
              if(res-target < ans) {
                  ans = res-target
                  val = res
              }
          } else if(res < target) {
              r++
              if(target-res < ans) {
                  ans = target-res
                  val = res
              }
          } else {
              return target
          }
      }
  }
  return val
};