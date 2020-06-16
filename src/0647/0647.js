/**
 * 求字符串的子串为回文串的数目
 * 计算所有以当前字符作为中心字符的回文串(当回文串为奇数的时候为中心位置, 当回文串为偶数的时候为n/2的位置
 * (靠左或者靠右都无所谓, 因为回文串成立的话s[i] == s[i+1] || s[i-1] == s[i]))
 * 这样可以将所有可能的回文子串记录下来
 */
var countSubstrings = function(s) {
  var ans = 0;
  function count(s, start, end) {
      while(s[start] === s[end]) {
          ans++ ;
          start -- ; end ++;
          if(start < 0 || end > s.length - 1) return 
      }
  }
  for(var i=0;i<s.length;i++) {
      count(s, i, i)
      count(s, i, i+1)
  }
  return ans
};
