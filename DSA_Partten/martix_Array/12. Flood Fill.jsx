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