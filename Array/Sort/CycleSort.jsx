function cyclicSort(arr) {
  let i = 0;
  while (i < arr.length) {
    const correctIndex = arr[i] - 1; // assumes 1…n
    if (arr[i] !== arr[correctIndex]) {
      [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
    } else {
      i++;
    }
  }
  return arr;
}

let data = [3, 1, 5, 2, 4]; // must be 1…n consecutive
console.log(cyclicSort(data)); // [1,2,3,4,5]

let data = [3, 1, 5, 2, 9 
   
]; // must be 1…n consecutive
console.log(cyclicSort(data)); // [1,2,3,4,5]