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