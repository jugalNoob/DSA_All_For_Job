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