

10::Iterating Over Matrices:  |||||||||||||||||||
// Create a sample 2D matrix
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
// Iterate through rows and columns using nested loops
for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    const element = matrix[row][col];
    console.log(`Element at row ${row}, col ${col}: ${element}`);
  }
}

