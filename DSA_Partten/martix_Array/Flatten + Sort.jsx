Case 3: Flatten + Sort (DSA style)
let data = [[[1, 2, 3], [5, 6, 7]]];

let result = data.flat(2).sort((a, b) => a - b);

console.log(result);