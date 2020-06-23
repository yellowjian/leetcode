/**
 * 给定一个数N  找出<=N 的最大的数(这个数满足各个位数上的数字单调递增 1299 相邻的数字需要满足x,y x<=y)
 * 看到一个比较巧妙的解法, 大致就是我们不断的从右往左去比较俩个数字的大小  如果x > y 的话通过处理使得 x-=1 y = 9
 * 例如 98765 
 * 1. 6>5  98765 => 98759
 * 2. 7>5  98759 => 98699
 * 3. 8>6  98699 => 97999
 * 4  9>7  97999 => 89999
 * 这样可以保证递增最大
 */
var monotoneIncreasingDigits = function(N) {
  var i = 1
  var ans = N
  while(i<=Math.floor(ans / 10)) {
      var n = Math.floor(ans/i) % 100
      i*=10
      if(Math.floor(n/10) > Math.floor(n%10)) {
          ans = Math.floor(ans / i) *i - 1
      }
  }
  return ans
};