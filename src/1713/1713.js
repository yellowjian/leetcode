/**
 * 
 * 转换为求O(nlogn) 的LCS 
 * LCS可以转为LIS 求解  LIS有为 O(nlogn) 的求解方式
 * 
 */
var lower_bound = function(l, val) {
    var left = 0, right = l.length
    while(left < right) {
        var mid = Math.floor((left + right) / 2)
        if(l[mid] >= val) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
}

var lis = function(l) {
    var top = 0
    var n = l.length
    var dp = [l[0]]
    for(var i=1;i<n;i++) {
        if(l[i] > dp[top]) {
            dp[++top] = l[i]
        } else {
            var val = l[i]
            var pos = lower_bound(dp, val)
            if( dp[pos] > l[i]) dp[pos] = l[i]
        }
    }
    return dp.length
}

var minOperations = function(target, arr) {
    var n = arr.length
    var m = target.length
    var map = new Map()
    for(var i=n-1;i>=0;i--) {
        if(!map.get(arr[i])) {
            map.set(arr[i], [i+1])
        } else {
            var t = map.get(arr[i])
            t.push(i+1)
            map.set(arr[i], t)
        }
    }
    var l = []
    for(var i=0;i<m;i++) {
        if(map.get(target[i])) {
            var t = map.get(target[i])
            for(var j=0;j<t.length;j++) {
                l.push(t[j])
            }
        }
    }
    return target.length - lis(l)
}

