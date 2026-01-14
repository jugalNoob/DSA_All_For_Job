b) Unrolling Loops  :::::::::::::::::::::::::::::

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < arr.length; i += 2) {
  console.log(arr[i]);
  console.log(arr[i + 1]);  // Manually unrolling the loop for performance
}


3. Nested Loops Optimization :::::::::::::::::::::::::

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    console.log('Found 3, exiting...');
    break;  // Stops the loop as soon as 3 is found
  }
}


2. Looping with Steps (Skips) ::::::::::::::::::::

for (let i = 0; i < 10; i += 2) {
  console.log(i);  // Outputs: 0, 2, 4, 6, 8
}



5.2 Avoid Modifying Arrays Inside Loops ::::::::::::::::::::::::::

Avoid operations like splice() or push() inside loops because they modify the array length, causing the loop to behave unpredictably.

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1); // Modifies array length during iteration
}


5. Loop Optimization Techniques :::::::::::::::::::::::::

let arr = [1, 2, 3, 4, 5];
for (let i = 0, len = arr.length; i < len; i++) {
    console.log(arr[i]); // Caching `arr.length` in `len` for performance
}

