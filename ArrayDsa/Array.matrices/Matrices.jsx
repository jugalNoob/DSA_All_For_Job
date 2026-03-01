

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






1️⃣ Problem: Iterating Over a Matrix

Definition: Access every element in a 2D array (matrix) using nested loops.

Input:

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


Output:

Element at row 0, col 0: 1
Element at row 0, col 1: 2
Element at row 0, col 2: 3
Element at row 1, col 0: 4
Element at row 1, col 1: 5
Element at row 1, col 2: 6
Element at row 2, col 0: 7
Element at row 2, col 1: 8
Element at row 2, col 2: 9


Time Complexity: O(rows × cols) → every element is visited once

Space Complexity: O(1) → in-place iteration

3️⃣ Alternative Iteration Methods
A. For-of Loop
for (const row of matrix) {
    for (const element of row) {
        console.log(element);
    }
}

B. Using forEach
matrix.forEach((row, i) => {
    row.forEach((el, j) => {
        console.log(`Element at row ${i}, col ${j}: ${el}`);
    });
});

4️⃣ Interview Variants

Sum of all elements in a matrix

let sum = 0;
for(let row of matrix){
    for(let el of row) sum += el;
}


Find min/max in matrix

Search for an element → return row and column index

Transpose a matrix

Rotate a matrix → clockwise / anticlockwise

Spiral traversal → top, right, bottom, left

Diagonal traversal → main or secondary diagonal

5️⃣ Key Tips for Interviews

Always clarify matrix size (m × n vs n × n).

Trace row and column indices on small examples.

Use nested loops for simplicity, then optimize if needed.

Be ready to extend iteration logic to solve problems like sum, search, or rotation.






::::::::: -------><><>
function rotateMatrix90(matrix) {
   const n = matrix.length;
   // Transpose the matrix
   for (let i = 0; i < n; i++) {
       for (let j = i; j < n; j++) {
           [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
       }
   }
   // Reverse each row
   for (let i = 0; i < n; i++) {
       matrix[i].reverse();
   }
   return matrix;
}
let matrix = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
];
console.log(rotateMatrix90(matrix));

