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
