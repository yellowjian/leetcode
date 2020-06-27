/**
 * 给定一个32位正整数 n，你需要找到最小的32位整数，其与 n 中存在的位数完全相同，并且其值大于n。如果不存在这样的32位整数，则返回-1。
 * 相当于给当前的数组的下一个比他大的全排列。全排列有n! 所以不能遍历
 * 1. 如果存在 98765 这种情况的时候, 他已经没有比他大的排列组合了, 所以返回-1 不存在
 * 2. 只有当a[i] > a[i-1] 的时候才存在这种可能性, 这个时候我们可以知道 [i - n-1] 这个子串的顺序是确定的, 就是 a[i] >= a[i+1],
 *    这样我们需要找到在[i - n-1]里面最小的比a[i-1]大的数a[j]  然后交换a[i-1] 和 a[j] 
 *    然后我们再对[i - n-1]的数进行排序, 就能得到我们的答案。
 * (需要注意超出int 范围的数据)
 */
var nextGreaterElement = function(n) {
  var a = []
  while(n > 0) {
      a.push(n % 10)
      n = Math.floor(n/10)
  }
  a.reverse()
  var len = a.length
  var flag = false
  var i
  for(i=len-1;i>0;i--) {
      if(a[i] > a[i-1]) {
          flag = true
          break
      }
  }
  var flagM = false
  for(var j=i+1;j<len;j++) {
      if(a[j] <= a[i-1]) {
          [a[i-1],a[j-1]] = [a[j-1], a[i-1]]
          flagM = true
          break
      }
  }
  if(!flagM) {
      [a[i-1],a[len-1]] = [a[len-1], a[i-1]]
  }
  var subA = a.slice(i)
  subA.sort((a, b) => a - b)
  var str = a.slice(0, i).concat(subA).join('')
  if(!flag || Number(str) > Math.pow(2, 31)) return -1
  else {
      return str
  }
};