/**
 * 给你一个字符串 s 。请返回 s 中最长的 超赞子字符串 的长度。
 *「超赞子字符串」需满足满足下述两个条件：
 * 该字符串是 s 的一个非空子字符串
 * 进行任意次数的字符交换后，该字符串可以变成一个回文字符串
 * 1 <= s.length <= 10^5     s 仅由数字组成
 * 
 * 首先字符串由 0- 9 的字符表示, 回文串的性质是子串s 字符出现的次数只有 1 个或者0 个是奇数次, 其他都是偶数次
 * 就是把字符串变成各个字符出现的次数(奇数次和偶数次 分别用1 和 0 表示) 从9 - 0 表示并取二进制的值，
 * 如果 0 - i-1 的值和0 - j 的值相等的话 i - j 就是一个回文串, 还需要遍历 0-j 上的二进制(10次循环)是不是变换一次 
 * 能过得到出现过的值也是一个回文串, 不断的取最大值就可以了
 * 
 */
var longestAwesome = function(s) {
    var n = s.length
    var map = new Map()
    map.set(0, -1)
    var sequence = 0
    var ans = 0
    for (var j=0;j<n;j++) {
        var digit = parseInt(s[j])
        sequence ^= (1 << digit)
        if (map.has(sequence)) {
            ans = Math.max(ans, j - map.get(sequence))
        } else {
            map.set(sequence, j)
        } 
        for(var i=0;i<10;i++) {
            if (map.has(sequence ^ (1<<i))) {
                ans = Math.max(ans, j - map.get(sequence ^ (1<<i)))
            }
        }
    }
    return ans
}