2. Column-wise Sum2. Column-wise Sum
function colSum(mat) {
  let res = new Array(mat[0].length).fill(0);
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      res[j] += mat[i][j];
    }
  }
  return res;
}