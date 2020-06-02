/**
 *  这个问题到了long, js 精度方面(晚些时候总结上这个问题) 有些问题, 所以借鉴java 代之
 *  对于回文串, 我们可以列举前面的部分, 加上对称的部分即可, 由于回文的平方是long, 回文串是int 级别的, 再通过对称去掉一半的话, 数量级是10 ** 5
 *  可以枚举字符串, 但是需要注意回文串是奇数和偶数俩种情况即可
 */

class Solution {
  public int superpalindromesInRange(String sL, String sR) {
      long L = Long.valueOf(sL);
      long R = Long.valueOf(sR);
      int MAGIC = 100000;
      int ans = 0;

      // count odd length;
      for (int k = 1; k < MAGIC; ++k) {
          StringBuilder sb = new StringBuilder(Integer.toString(k));
          for (int i = sb.length() - 2; i >= 0; --i)
              sb.append(sb.charAt(i));
          long v = Long.valueOf(sb.toString());
          v *= v;
          if (v > R) break;
          if (v >= L && isPalindrome(v)) {
              ans++;
          }
      }

      // count even length;
      for (int k = 1; k < MAGIC; ++k) {
          StringBuilder sb = new StringBuilder(Integer.toString(k));
          for (int i = sb.length() - 1; i >= 0; --i)
              sb.append(sb.charAt(i));
          long v = Long.valueOf(sb.toString());
          v *= v;
          if (v > R) break;
          if (v >= L && isPalindrome(v)) {
              ans++;
          }
      }

      return ans;
  }

  public boolean isPalindrome(long x) {
      return x == reverse(x);
  }

  public long reverse(long x) {
      long ans = 0;
      while (x > 0) {
          ans = 10 * ans + x % 10;
          x /= 10;
      }

      return ans;
  }
}