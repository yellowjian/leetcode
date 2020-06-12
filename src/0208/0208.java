/**
 * trie 树  基于字符, 可以往节点上面加任何东西  比如加boolean 判断是否结束, 加count 记录字符串出现的次数等
 * 模板题
 * 插入和查询都是字符串的长度
 */

class TrieNode {
  private TrieNode[] links;
  private final int R = 26;
  private boolean isEnd;
  public TrieNode() {
    links = new TrieNode[R];
  }
  public boolean containsKey(char ch) {
    return links[ch -'a'] != null;
  }
  public TrieNode get(char ch) {
    return links[ch -'a'];
  }
  public void put(char ch, TrieNode node) {
    links[ch -'a'] = node;
  }
  public void setEnd() {
    isEnd = true;
  }
  public boolean isEnd() {
    return isEnd;
  }
}

class Trie {
  private TrieNode root;
  /** Initialize your data structure here. */
  public Trie() {
    root = new TrieNode();
  }
  
  /** Inserts a word into the trie. */
  public void insert(String word) {
    TrieNode node = root;
    for (int i = 0; i < word.length(); i++) {
      char currentChar = word.charAt(i);
      if (!node.containsKey(currentChar)) {
        node.put(currentChar, new TrieNode());
      }
      node = node.get(currentChar);
    }
    node.setEnd();
  }
  
  /** Returns if the word is in the trie. */
  public boolean search(String word) {
    TrieNode node = root;
    for (int i = 0; i < word.length(); i++) {
      char curLetter = word.charAt(i);
      if (node.containsKey(curLetter)) {
        node = node.get(curLetter);
      } else {
        return false;
      }
    }
    return node.isEnd();
  }
  
  /** Returns if there is any word in the trie that starts with the given prefix. */
  public boolean startsWith(String prefix) {
    TrieNode node = root;
    for (int i = 0; i < prefix.length(); i++) {
      char curLetter = prefix.charAt(i);
      if (node.containsKey(curLetter)) {
        node = node.get(curLetter);
      } else {
        return false;
      }
    }
    return true;
  }
}
