/**
 * 给定三种字符 A,L,P  组成长度为n 的字符串, 要求num(A) <=1 以及不能存在超过俩个连续的L
 * 我们可以假设字符串只是由P 和 L组成, 构造DP
 * 假设 dp[n]表示符合条件的数目(L && P), 那么dp[n] 怎么由其他关系得到
 * 我们可以将长度为n 的字符串拆成 结尾char[n-1] == P 或者char[n-1] == L 的长度为n-1 的字符串
 * 1. 如果对于长度为n-1 的字符串来说, 如果char[n] == P 那么 dp[n-1]对dp[n]做出贡献
 * 2. 如果对于char[n] == L 来说, 唯一不满足的就是char[n-2] == L && char[n-1] == L
 * 对于char[n-2][n-1] == LP PL PP LL 四种情况 而对于LL 而言 必须是char[n-3] == P 才能满足情况
 * 也就是存在dp[n-4] (PLL)在 n-3, n-2, n-1 字符都定死的情况下, 这种情况不满足, 所以在char[n] == L
 * 的情况下, 存在 dp[n-1] - dp[n-4]
 * dp[n] = 2 * dp[n-1] - dp[n-4]
 * 以上我们只考虑L 和 P 的所有情况
 * 现在考虑A 的情况  由于A 只能是0个和一个
 * 0 的时候 是dp[n]
 * 1 的时候是A 可以放在[1-n]的任何位置这样的话拆分成了dp[i-1] * dp[n-i], 进行累加即可
 */

public class Solution {
  long M = 1000000007;
  public int checkRecord(int n) {
      long[] f = new long[n + 1];
      f[0] = 1;
      f[1] = 2;
      f[2] = 4;
      f[3] = 7;
      for (int i = 4; i <= n; i++) {
          f[i] = ((2 * f[i - 1]) % M + (M - f[i - 4])) % M;  // 这里减法可能会小于0 所以改为(M - f[i - 4])) % M
      }
      long sum = f[n];
      for (int i = 1; i <= n; i++) {
          sum += (f[i - 1] * f[n - i]) % M;
      }
      return (int)(sum % M);
  }
}