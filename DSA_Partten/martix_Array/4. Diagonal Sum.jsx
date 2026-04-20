4. Diagonal Sum
function diagonalSum(mat) {
  let n = mat.length, sum = 0;
  for (let i = 0; i < n; i++) {
    sum += mat[i][i];
    sum += mat[i][n - i - 1];
  }
  return n % 2 ? sum - mat[Math.floor(n/2)][Math.floor(n/2)] : sum;
}
