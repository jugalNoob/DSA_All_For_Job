let data = [9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let i = 0; i < data.length; i++) {
  console.log(`\nPass ${i + 1} ------------------`);
  
  for (let j = 0; j < data.length - 1 - i; j++) { 
    console.log(`Compare ${data[j]} and ${data[j + 1]}`);
    
    if (data[j] > data[j + 1]) { // [9] > [8]
      console.log(`👉 Swap ${data[j]} and ${data[j + 1]}`);
      let temp = data[j];  // temp[9]=data[9]
      data[j] = data[j + 1]; ///data[8] =data[8]
      data[j + 1] = temp; // data[8]=temp[9]
    }
    console.log("Array now:", data);
  }
}

console.log("\n✅ Final Sorted:", data);
    console.log(`Compare ${data[j]} and ${data[j + 1]}`);
 console.log(`👉 Swap ${data[j]} and ${data[j + 1]}`);
Pass 1 ------------------
Compare 9 and 8
👉 Swap 9 and 8
Array now: [8,9,7,6,5,4,3,2,1]

Compare 9 and 7
👉 Swap 9 and 7
Array now: [8,7,9,6,5,4,3,2,1]

...
Pass 2 ------------------
Compare 8 and 7
👉 Swap 8 and 7
Array now: [7,8,6,5,4,3,2,1,9]
...

✅ Final Sorted: [1,2,3,4,5,6,7,8,9]







1️⃣ What the code does

Outer loop (i) → counts the number of passes over the array.

Inner loop (j) → compares each pair of adjacent elements, swapping if out of order.

Over multiple passes, the largest numbers "bubble" to the right.

⚠ Note: Your for(let j=0; j<data.length; j++) runs one step too far (it compares data[data.length - 1] with undefined). This doesn’t crash in JS but wastes work. Normally it’s j < data.length - 1 - i.




2️⃣ Step-by-step for your array

Initial array:
[9, 8, 7, 6, 5, 4, 3, 2, 1]


Pass 1 (i = 0)

We compare and swap until the biggest number (9) reaches the end.

Compare 9 & 8 → swap → [8, 9, 7, 6, 5, 4, 3, 2, 1]

Compare 9 & 7 → swap → [8, 7, 9, 6, 5, 4, 3, 2, 1]

Compare 9 & 6 → swap → [8, 7, 6, 9, 5, 4, 3, 2, 1]

Compare 9 & 5 → swap → [8, 7, 6, 5, 9, 4, 3, 2, 1]

Compare 9 & 4 → swap → [8, 7, 6, 5, 4, 9, 3, 2, 1]

Compare 9 & 3 → swap → [8, 7, 6, 5, 4, 3, 9, 2, 1]

Compare 9 & 2 → swap → [8, 7, 6, 5, 4, 3, 2, 9, 1]

Compare 9 & 1 → swap → [8, 7, 6, 5, 4, 3, 2, 1, 9] ✅ 9 is now in final place.



Pass 2 (i = 1)

8 will bubble to second-last position.

[7, 6, 5, 4, 3, 2, 1, 8, 9]



Pass 3

7 will bubble next.

[6, 5, 4, 3, 2, 1, 7, 8, 9]


Continuing...

After 9 passes (since 9 elements), you get:

Final array:
[1, 2, 3, 4, 5, 6, 7, 8, 9]



| Pass | Result after pass             |
| ---- | ----------------------------- |
| 1    | `[8, 7, 6, 5, 4, 3, 2, 1, 9]` |
| 2    | `[7, 6, 5, 4, 3, 2, 1, 8, 9]` |
| 3    | `[6, 5, 4, 3, 2, 1, 7, 8, 9]` |
| 4    | `[5, 4, 3, 2, 1, 6, 7, 8, 9]` |
| 5    | `[4, 3, 2, 1, 5, 6, 7, 8, 9]` |
| 6    | `[3, 2, 1, 4, 5, 6, 7, 8, 9]` |
| 7    | `[2, 1, 3, 4, 5, 6, 7, 8, 9]` |
| 8    | `[1, 2, 3, 4, 5, 6, 7, 8, 9]` |
| 9    | Sorted.                       |



4️⃣ Time Complexity

Worst/average case: O(n²)

Best case (already sorted with optimization): O(n)

Space complexity: O(1) (in-place)