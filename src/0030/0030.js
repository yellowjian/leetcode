/**
 * 1. O(n*m) 预处理给定的单词, 存在map 里面 这样对于每个单词的匹配直接是O(1), 不断遍历原字符串, 并且放到新的map 中, 如果往后新旧map 完全相同, 那么
 * 存在这样的子串,记录并把原字符串往后移动一位并继续, 在单词的map 和新的map进行比较的时候, 如果某个单词超出, 或者新的map 放进了单词map 里面没有的单词
 * 那么这些都是不满足条件, 可以剪枝。这是暴力遍历的解法
 * 
 * 
 * 
 * 2. O(n)  明天再写。。。
 */


var findSubstring = function(s, words) {
  if(words.length == 0) return []
  var map1 = new Map()
  var res = []
  var len = 0
  for(var i=0;i<words.length;i++){
      if(!len) len = words[i].length
      if(map1.has(words[i])) map1.set(words[i], map1.get(words[i]) + 1)
      else  map1.set(words[i], 1)
  }
  var map2 = new Map()
  for(var i=0;i<=s.length - len*words.length;i++) {
      var j
      var k = i
      for(j=0;j<words.length;j++) {
          var subStr = s.slice(k, k + len)
          if(!map1.has(subStr)) break
          if(map2.has(subStr)) {
              map2.set(subStr, map2.get(subStr) + 1)
              if(map2.get(subStr) > map1.get(subStr)) break
          }
          else map2.set(subStr, 1)
          k += len
      }
      map2.clear()
      if(j == words.length) {
         res.push(i) 
      }
  }
  return res
};