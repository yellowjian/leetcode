/**
 * 比较标准的转为01 背包的题目, 注意每个字符串只能取一次
 */
var findMaxForm = function(strs, m, n) {
    var w = [], v = []
    for(var i=0;i<strs.length;i++) {
        var v1 = 0, v2 = 0
        for(var j=0;j<strs[i].length;j++) {
            if(strs[i][j] == '1') v2 ++
            else v1 ++
        }
        w[i] = v1, v[i] = v2
    }
    var dp = Array.from({length: m + 1}, () => Array.from({length: n + 1}, () => 0))
    for(var k = 0;k<strs.length;k++) {
        for(var i = m;i>=0;i--) {
            for(var j=n;j>=0;j--) {
                if(i>=w[k] && j >=v[k]) {
                    dp[i][j] = Math.max( dp[i-w[k]][j-v[k]] + 1,  dp[i][j])
                }
            }
        }
    }
    return dp[m][n]
};