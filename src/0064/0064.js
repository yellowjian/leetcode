/**
 * 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 * 直接递归求和.  js里面如果 && 前面是false 的话, 返回0, 如果&& 前面是true 后面是数值的话, 返回后面的数值.
 */
var sumNums = function(n) {
  function sum(n) {
      var ans = n
      return n > 0 && ans + sum(n-1)
      // if(n==0) return 0
      // else return ans + sum(n-1)
  }
  return sum(n)
};