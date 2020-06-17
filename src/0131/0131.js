
/**
 * 上一个题是0647 统计字符串子串有多少个是回文串
 * 
 * 这题是给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
 * 我们先标记dp[i][j] 使得子串i,j 是回文串, 这个可以给0647作为解答。
 * 接下来就是标准的回溯法, 来判断当前区间是否是回文串, 是的话加到数组里面
 * 不是的话回溯到上一个位置. 知道字符串长度遍历完成, 把符合条件的放到ans 里面。
 * 
 */

var partition = function(s) {
  var n = s.length
  var dp = Array.from({length: n}, () => Array.from({length: n}, () => false))
  for(var i=1;i<=n;i++) {
      for (var j = 0; j <= n - i; j++) {
          dp[j][j + i - 1] = s[j] == s[j + i - 1] && (i < 3 || dp[j + 1][j + i - 2]);
      }
  }
  var ans = []
  var temp = []
  function solve(start) {
      if (start == n) {
          var res = [...temp]
          ans.push(res)
      }
      for(var i=start;i<n;i++) {
          if(dp[start][i]) {
              var str = s.slice(start, i+1)
              temp.push(str)
              solve(i + 1)
              temp.pop()
          }
      }
  }
  solve(0)
  return ans
}
