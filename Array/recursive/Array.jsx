function printArray(arr, index = 0) {
  if (index === arr.length) return;

  console.log(arr[index]);
  printArray(arr, index + 1);
}

printArray(data);




2️⃣ Sum of array using recursion (very common)
function sumArray(arr, index = 0) {
  if (index === arr.length) return 0;

  return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray(data));



3️⃣ Reverse array using recursion
function reverseArray(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;

  [arr[left], arr[right]] = [arr[right], arr[left]];
  reverseArray(arr, left + 1, right - 1);
}

reverseArray(data);
console.log(data);





4️⃣ Find element using recursion
function findElement(arr, target, index = 0) {
  if (index === arr.length) return -1;
  if (arr[index] === target) return index;

  return findElement(arr, target, index + 1);
}

console.log(findElement(data, 30));