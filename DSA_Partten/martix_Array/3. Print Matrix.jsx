3. Print Matrix
function printMatrix(mat) {
  for (let row of mat) console.log(row.join(" "));
}

4. Diagonal Sum
function diagonalSum(mat) {
  let n = mat.length, sum = 0;
  for (let i = 0; i < n; i++) {
    sum += mat[i][i];
    sum += mat[i][n - i - 1];
  }
  return n % 2 ? sum - mat[Math.floor(n/2)][Math.floor(n/2)] : sum;
}

5. Max / Min
function maxMin(mat) {
  let max = -Infinity, min = Infinity;
  for (let row of mat) {
    for (let val of row) {
      max = Math.max(max, val);
      min = Math.min(min, val);
    }
  }
  return { max, min };
}

🟡 INTERMEDIATE
6. Transpose
function transpose(mat) {
  let res = Array.from({ length: mat[0].length }, () => []);
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      res[j][i] = mat[i][j];
    }
  }
  return res;
}

7. Rotate 90°
function rotate(mat) {
  let n = mat.length;

  // transpose
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }

  // reverse rows
  for (let row of mat) row.reverse();

  return mat;
}

8. Spiral Traversal
function spiral(mat) {
  let res = [], top = 0, bottom = mat.length - 1;
  let left = 0, right = mat[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) res.push(mat[top][i]);
    top++;

    for (let i = top; i <= bottom; i++) res.push(mat[i][right]);
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) res.push(mat[bottom][i]);
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) res.push(mat[i][left]);
      left++;
    }
  }
  return res;
}

9. Search in Sorted Matrix
function search(mat, target) {
  let i = 0, j = mat[0].length - 1;

  while (i < mat.length && j >= 0) {
    if (mat[i][j] === target) return true;
    else if (mat[i][j] > target) j--;
    else i++;
  }
  return false;
}

10. Set Matrix Zeroes
function setZero(mat) {
  let rows = new Set(), cols = new Set();

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  for (let i of rows) mat[i].fill(0);
  for (let j of cols) {
    for (let i = 0; i < mat.length; i++) mat[i][j] = 0;
  }

  return mat;
}

🔵 ADVANCED
11. Number of Islands
function numIslands(grid) {
  let count = 0;

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') return;

    grid[i][j] = '0';

    dfs(i+1, j); dfs(i-1, j);
    dfs(i, j+1); dfs(i, j-1);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
}

12. Flood Fill
function floodFill(image, sr, sc, color) {
  let old = image[sr][sc];

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= image.length || j >= image[0].length || image[i][j] !== old) return;
    image[i][j] = color;
    dfs(i+1,j); dfs(i-1,j); dfs(i,j+1); dfs(i,j-1);
  }

  dfs(sr, sc);
  return image;
}

13. Max Area of Island
function maxArea(grid) {
  let max = 0;

  function dfs(i,j) {
    if (i<0||j<0||i>=grid.length||j>=grid[0].length||grid[i][j]===0) return 0;
    grid[i][j]=0;
    return 1 + dfs(i+1,j)+dfs(i-1,j)+dfs(i,j+1)+dfs(i,j-1);
  }

  for (let i=0;i<grid.length;i++){
    for (let j=0;j<grid[0].length;j++){
      max = Math.max(max, dfs(i,j));
    }
  }

  return max;
}

