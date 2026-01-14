🔥 DSA PATTERNS USING for LOOP
1️⃣ Linear Traversal (Most Basic)

📌 Pattern: visit every element once

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


🧠 Use when:

Printing array

Sum, max, min

Count frequency

⏱ Time: O(n)

2️⃣ Reverse Traversal

📌 Pattern: go from end → start

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}


🧠 Use when:

Reverse array

Palindrome check

Right rotation

3️⃣ Accumulator Pattern

📌 Pattern: keep updating a result

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}


🧠 Use when:

Sum / product

Prefix sum

Running total

4️⃣ Counting / Frequency Pattern

📌 Pattern: count occurrences

const freq = {};

for (let i = 0; i < arr.length; i++) {
  freq[arr[i]] = (freq[arr[i]] || 0) + 1;
}


🧠 Use when:

Anagram

Duplicate detection

Mode

5️⃣ Two Pointers Pattern

📌 Pattern: left & right pointers

let left = 0;
let right = arr.length - 1;

while (left < right) {
  // logic
  left++;
  right--;
}


🧠 Use when:

Palindrome

Pair sum

Reverse in-place

⏱ Time: O(n)
💾 Space: O(1)

6️⃣ Sliding Window Pattern

📌 Pattern: fixed or variable window

let sum = 0;
for (let i = 0; i < k; i++) sum += arr[i];

for (let i = k; i < arr.length; i++) {
  sum += arr[i] - arr[i - k];
}


🧠 Use when:

Max sum subarray

Longest substring

Window-based problems

7️⃣ Nested Loop Pattern

📌 Pattern: compare pairs

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    // compare arr[i] and arr[j]
  }
}


🧠 Use when:

Brute force

Pair problems

Pattern printing

⏱ Time: O(n²)

8️⃣ Prefix Sum Pattern

📌 Pattern: pre-calculate sums

const prefix = [0];
for (let i = 0; i < arr.length; i++) {
  prefix[i + 1] = prefix[i] + arr[i];
}


🧠 Use when:

Range sum queries

Subarray sum

Optimization

9️⃣ Kadane’s Algorithm

📌 Pattern: dynamic window

let max = arr[0];
let curr = arr[0];

for (let i = 1; i < arr.length; i++) {
  curr = Math.max(arr[i], curr + arr[i]);
  max = Math.max(max, curr);
}


🧠 Use when:

Maximum subarray sum

🔟 Partition / Dutch Flag Pattern

📌 Pattern: segregate values

let low = 0, mid = 0, high = arr.length - 1;

while (mid <= high) {
  if (arr[mid] === 0) {
    [arr[low], arr[mid]] = [arr[mid], arr[low]];
    low++; mid++;
  } else if (arr[mid] === 1) {
    mid++;
  } else {
    [arr[mid], arr[high]] = [arr[high], arr[mid]];
    high--;
  }
}


🧠 Use when:

Sort 0,1,2

Partition problems

🧠 Master Mental Map
for loop →
  ├─ single loop → traversal, sum
  ├─ reverse loop → palindrome
  ├─ two pointers → in-place
  ├─ sliding window → subarray
  ├─ nested → brute force
  ├─ prefix → optimization

🎯 Interview GOLD LINE

Every array DSA problem is a variation of a for loop pattern.