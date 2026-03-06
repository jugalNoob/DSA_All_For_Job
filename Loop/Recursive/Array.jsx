let data = [10, 20, 30, 40, 50]

function loopArray(arr, index = 0) {
    // Base case
    if (index === arr.length) return

    // Process current element
    console.log(arr[index])

    // Recursive call for next element
    loopArray(arr, index + 1)
}

loopArray(data)


🧠 How It Works Step by Step

index = 0 → prints 10 → calls Rever(arr, 1)

index = 1 → prints 20 → calls Rever(arr, 2)

index = 2 → prints 30 → calls Rever(arr, 3)

index = 3 → prints 40 → calls Rever(arr, 4)

index = 4 → prints 50 → calls Rever(arr, 5)

index = 5 → index === arr.length → stop recursion

✅ Behaves exactly like a for loop but uses recursion.




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