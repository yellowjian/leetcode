/**
 * 求树上每个点到其他所有点的总距离.
 * 给出的题解中有一个很巧妙的方式的就是 假设ans[x] 表示x 节点到其他点的距离之和, ans[y] 表示y 节点到其他节点的距离之和
 * 同时x 和 y是相邻节点, 假设把节点x 和y断开, 形成以x 为根节点和 y为根节点的俩个子树, 
 * 这样 ans[x] 就可以分为三部分组成, x 的所有子节点到x 的距离和 (x1), y 的所有子节点到y 的距离和(x2), y 上所有节点个数(x3)
 * ans[x] = x1 + x2 + x3 同理 ans[y] = x1 + x2 + y3(x 树上所有节点个数)
 * ans[x] = ans[y] + x3 - y3
 * 
 * 第一个dfs 计算出所有以0为根节点的所有节点的子树节点个数以及子节点到所有以此节点为根节点的距离count(n) ans(n)  O(n)
 * 
 * 第二个dfs 计算就是 以父子节点来计算的 对应的ans[x] = ans[y] + x3 - y3  O(n)
 * 
 */


var sumOfDistancesInTree = function(N, edges) {
  if(N == 1) return [0]
  var a = new Array()
  var count = Array.from({length: N}, () => 1)
  var ans = Array.from({length: N}, () => 0)
  for(var i=0;i<edges.length;i++) {
      if(!a[edges[i][0]]) {
          a[edges[i][0]] = new Array()
      }
      if(!a[edges[i][1]]) {
          a[edges[i][1]] = new Array()
      }
      a[edges[i][0]].push(edges[i][1])
      a[edges[i][1]].push(edges[i][0])
  }
  function dfs(node, parent) {
      for(var i=0;i<a[node].length;i++){
          if(a[node][i] != parent) {
              dfs(a[node][i], node)
              count[node] += count[a[node][i]]
              ans[node] += ans[a[node][i]] + count[a[node][i]]
          }
      }
  }
  function dfs2(node, parent) {
      for(var i=0;i<a[node].length;i++){
          if(a[node][i] != parent) {
              ans[a[node][i]] = ans[node] - count[a[node][i]] + N - count[a[node][i]]
              dfs2(a[node][i], node)
          }
      }
  }
  dfs(0, -1)
  dfs2(0, -1)
  return ans
};