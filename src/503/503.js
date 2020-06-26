/**
 * 给定一个循环数组, 找出每个数组的下一个更大元素(数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数)
 * 
 * 我们需要不断的顺序循环俩次数组, 然后判断当前数字是不是之前元素的第一个大于它的数字.
 * 这个时候我们需要记录一下之前遍历过的元素, 但是还没有找到比他大的元素, 所有之前遍历过的遗留下来的元素有一个特性, 按顺序排列的话就是前面的数
 * 一定比后面的数要大于或者等于, (因为后面的数比前面的数大的话, 前面的数就移出等待队列了), 这里利用了一个数组来保存这个等待队列, 当队列有值的时候
 * 我们需要不断的取数组的第一个数去跟当前遍历到的数进行比较, 如果当前的值比队列的top 值大的话, 说明这个等待的数的最大值已经找到, 出队列, 等队列空
 * 或者比当前遍历的值大的时候, 当前值进去队列。
 */
var nextGreaterElements = function(nums) {
    var n = nums.length
    var a = new Array()
    var ans = Array.from({length: n}, () => -1)
    for(var i=0;i<2 * n;i++) {
        while(a.length) {
            if(nums[i%n] > a[a.length - 1].value) {
                var top = a.pop()
                if(ans[top.index] == -1) ans[top.index] = nums[i%n]
            } else break
        }
        a.push({index: i%n, value: nums[i%n]})
    }
    return ans
};