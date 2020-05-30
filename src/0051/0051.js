/**
 * @param {number[]} nums
 * @return {number}
 */

// 除了注释行之外的就是完整的基于归并的数组排序, 我们对数组的排序就是基于找到逆序对然后进行交换以达到排序的目的

var reversePairs = function(nums) {
  var ans = 0
  function mergeSort(a, temp, left, right) {
      if(left >= right) return 
      var mid = Math.floor((left + right)/2)
      mergeSort(a, temp, left, mid)
      mergeSort(a, temp, mid + 1, right)
      for(var i=left;i<=right;i++){
          temp[i] = a[i]
      }
      var i1 = left, i2 = mid + 1
      for(var curr = left;curr<=right;curr++){
          if(i1 == mid + 1) {
              a[curr] = temp[i2++]
          } else if(i2 > right) {
              a[curr] = temp[i1++]
          } else if(temp[i1] <= temp[i2]) {
              a[curr] = temp[i1++]
          } else {
              a[curr] = temp[i2++]
              ans += (mid + 1 - i1) // 对逆序对进行记录
          }
      }
  }
  mergeSort(nums, [], 0, nums.length - 1)
  return ans
};
