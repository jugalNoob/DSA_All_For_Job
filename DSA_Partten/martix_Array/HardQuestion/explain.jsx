🔴 HARD
14. Minimum Path Sum (DP)
function minPath(grid) {
  let m = grid.length, n = grid[0].length;

  for (let i = 1; i < m; i++) grid[i][0] += grid[i-1][0];
  for (let j = 1; j < n; j++) grid[0][j] += grid[0][j-1];

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
    }
  }

  return grid[m-1][n-1];
}

15. Unique Paths
function uniquePaths(m, n) {
  let dp = Array.from({ length: m }, () => Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
  }

  return dp[m-1][n-1];
}

16. Word Search
function exist(board, word) {
  function dfs(i,j,k) {
    if (k === word.length) return true;
    if (i<0||j<0||i>=board.length||j>=board[0].length||board[i][j]!==word[k]) return false;

    let temp = board[i][j];
    board[i][j] = '#';

    let found = dfs(i+1,j,k+1)||dfs(i-1,j,k+1)||dfs(i,j+1,k+1)||dfs(i,j-1,k+1);

    board[i][j] = temp;
    return found;
  }

  for (let i=0;i<board.length;i++){
    for (let j=0;j<board[0].length;j++){
      if (dfs(i,j,0)) return true;
    }
  }
  return false;
}

17. Longest Increasing Path
function longestPath(matrix) {
  let m = matrix.length, n = matrix[0].length;
  let dp = Array.from({ length: m }, () => Array(n).fill(0));

  function dfs(i,j) {
    if (dp[i][j]) return dp[i][j];

    let dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    let max = 1;

    for (let [dx,dy] of dirs) {
      let x=i+dx, y=j+dy;
      if (x>=0&&y>=0&&x<m&&y<n&&matrix[x][y]>matrix[i][j]) {
        max = Math.max(max, 1 + dfs(x,y));
      }
    }

    return dp[i][j] = max;
  }

  let res = 0;
  for (let i=0;i<m;i++){
    for (let j=0;j<n;j++){
      res = Math.max(res, dfs(i,j));
    }
  }
  return res;
}

🔥 You Now Have

✅ 17+ core problems
✅ Covers:

Traversal
DFS/BFS
DP
Matrix transformation
🚀 If You Want Next