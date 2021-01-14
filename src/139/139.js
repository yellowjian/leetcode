/**
 * 题意 给定一个字符串s 和一组字符串wordDict  问s 能否由字符串wordDict里面的字符串组合而成  可以重复使用
 * 
 * 用dp解决   dp[i] 表示前面i个字符能否用wordDict里面的字符串组合而成, 对应前面的j 
 * dp[i] = dp[i] || dp[j]  如果s.slice(j, i) 是字符串wordDict里面的字符串 那dp[i] 就取决于 dp[j] 能否用wordDict里面的字符串组合而成
 * dp[i] 一开始是false  如果某一个j 使得dp[i]为true 了 那就不需要再遍历了
 * dp[m] 就是最后的答案
 * 
 */
var wordBreak = function(s, wordDict) {
  var n = wordDict.length
  var m = s.length
  var map = new Map()
  for(var i=0;i<n;i++){
      if (!map.get(wordDict[i])) {
          map.set(wordDict[i], true)
      }
  }
  var dp = Array.from({length: m + 1}, () => false)
  dp[0] = true
  for(var i=1;i<=m;i++) {
      for(var j=0;j<i;j++) {
        if(map.get(s.slice(j, i))) {
          dp[i] = dp[j]
        }
        if(dp[i]) break
      }
  }
  return dp[m]
};