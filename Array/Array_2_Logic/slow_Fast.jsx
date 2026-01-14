// let arr = [1, 2, 3, 4, 2]; // cycle at 2

// let slow = arr[0];
// let fast = arr[0];

// do {
//   slow = arr[slow];
//   fast = arr[arr[fast]];
// } while (slow !== fast);

// console.log("Cycle detected");
// console.log(slow)
// console.log(fast)




let arr = [10, 20, 10, 30];

let slow = 0;
let fast = 1;

while (fast < arr.length) {
  if (arr[slow] === arr[fast]) {
    console.log("Duplicate:", arr[fast]);
    break;
  }
  fast++;
}