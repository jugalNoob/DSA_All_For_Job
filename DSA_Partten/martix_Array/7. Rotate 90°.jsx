
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