/**
 * 在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字。
 * 首先统计一下个位数, 十位数...的数字多少个 [9, 180, 2700, 36000, 450000, 5400000, 63000000, 720000000, 8100000000]
 * 看看第n 个数落在那个区间, q 取区间上的第几个数字, p 取数字上的第几位
 * 然后q不断遍历 看看这个数字所在的数的个位数,十位数.. 计算出来 ans ans[p]即可
 * 
 */
var findNthDigit = function(n) {
  var num = [9, 180, 2700, 36000, 450000, 5400000, 63000000, 720000000, 8100000000]
  var i = 0
  for(i=0;i<9;i++) {
      if(n > num[i]) n-=num[i]
      else break
  }
  n--
  var q = Math.floor(n / (i+1))   
  var p = n % (i + 1)
  // console.log(q, p, i)
  var ans = 0
  for(var j = i;j>=0;j--) {
      var val = Math.floor(q / Math.pow(10, j))
      ans *= 10; 
      if(ans == 0) ans+=(val+1)
      else ans+=val
      q %= Math.pow(10, j)
  }
  return ans.toString()[p]
};