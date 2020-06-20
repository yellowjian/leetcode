/**
 * 求N 位数字  相邻数位的差值的绝对值为K 例子: N = 3 K = 7, [181,292,707,818,929]
 * 首先有一个特殊情况, N=1 返回所有数字
 * N != 1的时候  我们要保证不能有前导零的出现, 所以从1开始回溯, 一直构造到N 位数, 
 * 在从n-1位数构造n位数的时候, 先检测n-1位数与K 的关系:
 *  1. 如果digit[n-1] >= K 第n 位数为 digit[n-1] - K(这里处理了相等的情况 )
 *  2. 如果digit[n-1] + K <=9 的时候 第n 位数位digit[n-1] + K (这里要去掉K == 0的情况, 因为K == 0 digit[n-1] == digit[n] 
       这种情况在上面其实已经处理过了。会导致重复计算)
 * 在位数为N 的时候即满足一个存在的结果, 存入到结果集即可
 * 
 */
var numsSameConsecDiff = function(N, K) {
  if (N == 1) return [0,1,2,3,4,5,6,7,8,9]
  var ans = []
  function solve(num) {
      if(num.toString().length == N) { ans.push(num); return }
      var pre = num % 10
      if(pre >= K) solve(num * 10 + pre - K)
      if(K != 0 && pre + K <=9) solve(num * 10 + pre + K)
  }
  for(var i=1;i<=9;i++) {
      solve(i)
  }
  return ans
};
