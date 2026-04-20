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