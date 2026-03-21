const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];


Output: Access each element with its row and column index.

2️⃣ Basic Nested Loop Iteration
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        console.log(`Element at row ${row}, col ${col}: ${matrix[row][col]}`);
    }
}

