🟢 BASIC
1. Row-wise Sum
function rowSum(mat) {
  return mat.map(row => row.reduce((a, b) => a + b, 0));
}


