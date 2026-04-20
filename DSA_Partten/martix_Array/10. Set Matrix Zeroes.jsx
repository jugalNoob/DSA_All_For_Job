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