
/**
 * A 数组拆分成不为空的B, C 数组 使得 sum(A)/n == Sum(B)/k == Sum(C)/(n-k)
 * 假设序列B的长度为k, 序列C长一些 (1 <= k <= n/2), 那么Sum(A)/n *k /n== Sum(B)
 * 这样Sum(A) * k % n == 0, 首先通过这个去掉一些不符合条件的
 * 然后我们假设dp[i] 表示长度为i 的所有序列B 的可能的和, 每个dp[i]为 无序<set>(提升速度), 加入A中的某个数的时候 dp[i] = dp[i] join { for Each dp[i-1] +num } ,采用类似背包问题时的方法
 * 然后遍历每个长度即可查找存在长度为i 的时候有没有和为sum * i % n == 0 的.
 * 
 * */

class Solution {
public:
    bool splitArraySameAverage(vector<int>& A) {
        int n = A.size(), m = n / 2;
        vector<unordered_set<int>>dp(m + 1);
        int i;
        dp[0].insert(0);
        int sum = accumulate(A.begin(), A.end(), 0);
        bool isPossible = false;
        for (i = 1; i <= m; i++) {
            if (sum * i % n == 0) {
                isPossible = true;
                break;
            }
        }
        if (!isPossible)
            return false;
        for (int num : A) {
            for (i = m; i > 0; --i) {
                for (auto t : dp[i - 1]) {
                    dp[i].insert(t + num);
                }
            }
        }
        
        for (i = 1; i <= m; i++) {
            if (sum * i % n == 0 && dp[i].count(sum * i / n))
                return true;
        }
        return false;
    }
};