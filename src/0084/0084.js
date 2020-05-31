/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  var arr = []
  var ans = 0
  heights.push(0)
  for(var i=0;i<heights.length;i++) {
      while(arr.length && heights[arr[arr.length - 1]] >= heights[i]) {
          var h = heights[arr[arr.length - 1]]
          arr.pop()
          var p = arr.length? arr[arr.length - 1]: -1
          ans = Math.max(ans, h*(i - p - 1))
      }
      arr.push(i)
  }
  return ans
};

/**
 * 单调栈的运用, 所谓单调栈, 就是在栈里面的元素, 按照符合一定的规则, 比如是按照大小顺序
 * 所以在操作单调列的过程当中, 需要保证不断操作栈来保持这种规则
 */

/**
 * 一个运用的例子
 * 给一个数组，返回一个大小相同的数组。返回的数组的第i个位置的值应当是，对于原数组中的第i个元素，至少往右走多少步，才能遇到一个比自己大的元素
 * (如果之后没有比自己大的元素，或者已经是最后一个元素，则在返回数组的对应位置放上-1)。
 * example: input: 5,3,1,2,4 output: -1 3 1 1 -1
 */

var monoStack = function(input) {
  var arr = []
  var result = new Array(input.length).fill(-1)
  for (var i=0;i<input.length;i++) {
      while(arr.length && input[arr[arr.length-1]] < input[i]) {
          var l = arr[arr.length - 1]
          arr.pop()
          result[l] = i - l
      }
      arr.push(i)
  }
};