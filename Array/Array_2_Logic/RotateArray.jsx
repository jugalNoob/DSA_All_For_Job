rotateArray
::::::::-------------->><><> ---------------------------------------
function rotateArray(arr, steps) {
   for (let i = 0; i < steps; i++) {
       arr.push(arr.shift());
   }
   return arr;
}

let array = [1, 2, 3, 4, 5];
let steps = 3;
console.log(rotateArray(array, steps)); // Output: [3, 4, 5, 1, 2]


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


