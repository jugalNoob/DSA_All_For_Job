7. Looping with Labeled Blocks ::::::::::::::::::::::::::::::::::::::
You can use labels with loops to break or continue a specific loop when working with nested loops.
Labels provide more control over complex loop structures.

outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // Breaks out of the outer loop
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}



🔁 Loop Control Statements
1️⃣ break (STOP the loop)
🔹 What break does

break immediately stops the loop and jumps outside the loop.

👉 No further iterations happen.

🔹 Example
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

🔹 Output
1
2


➡ Loop stops when i === 3

🔹 Real-life Example

🚦 Traffic light:

Green → go

Red → STOP immediately (break)

🔹 Use break when

✅ You found the answer
✅ No need to continue loop
✅ Early exit required

2️⃣ continue (SKIP current step)
🔹 What continue does

continue skips the current iteration and moves to the next iteration.

👉 Loop does NOT stop.

🔹 Example
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

🔹 Output
1
2
4
5


➡ 3 is skipped, loop continues

🔹 Real-life Example

🧍 Line of people:

Skip person wearing hat (continue)

Keep checking others

🔹 Use continue when

✅ Want to skip invalid data
✅ Ignore one condition
✅ Continue loop normally

🔥 Key Differences (Interview Table)


| Feature         | `break`     | `continue` |
| --------------- | ----------- | ---------- |
| Stops loop      | ✅ Yes       | ❌ No       |
| Skips iteration | ❌ No        | ✅ Yes      |
| Exits loop      | Immediately | No         |
| Used for        | Early exit  | Skip logic |



🧠 Common Mistake

❌ Forgetting loop increment with continue

// Infinite loop ❌
while (i < 5) {
  if (i === 3) continue;
  i++;
}


✅ Correct

while (i < 5) {
  if (i === 3) {
    i++;
    continue;
  }
  i++;
}

🎯 One-Line Summary

break = STOP LOOP

continue = SKIP STEP


::::::::::::::::::::::: DSA Real Use  ::::::::::::::::::::::::::::



Here are REAL DSA use-cases of break and continue, explained simply, with patterns you actually use in interviews and problem-solving.

🔥 REAL DSA USE-CASES: break & continue
1️⃣ LINEAR SEARCH (Use break)

Problem: Find an element in an array

Why break?

Once found → no need to check remaining elements

Code
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;   // break implicitly
    }
  }
  return -1;
}


🧠 Interview point:

Early exit improves performance

2️⃣ TWO POINTER – PAIR FOUND (Use break)

Problem: Find pair with given sum (sorted array)

Code
function twoSumSorted(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right]; // break loop
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}


👉 Once pair found → stop scanning

3️⃣ SLIDING WINDOW – STOP WHEN ANSWER FOUND

Problem: Check if permutation exists

Code
function checkInclusion(s1, s2) {
  let freq = {};
  for (let ch of s1) freq[ch] = (freq[ch] || 0) + 1;

  let left = 0, count = Object.keys(freq).length;

  for (let right = 0; right < s2.length; right++) {
    if (freq[s2[right]] !== undefined) {
      freq[s2[right]]--;
      if (freq[s2[right]] === 0) count--;
    }

    if (count === 0) return true; // break early

    if (right - left + 1 === s1.length) {
      if (freq[s2[left]] !== undefined) {
        if (freq[s2[left]] === 0) count++;
        freq[s2[left]]++;
      }
      left++;
    }
  }
  return false;
}

4️⃣ SKIP INVALID DATA (Use continue)

Problem: Sum only positive numbers

Code
function sumPositive(arr) {
  let sum = 0;

  for (let num of arr) {
    if (num < 0) continue;
    sum += num;
  }
  return sum;
}


👉 Skip invalid data without stopping loop

5️⃣ REMOVE DUPLICATES (Use continue)

Problem: Ignore duplicate elements

function uniqueArray(arr) {
  let result = [];
  let set = new Set();

  for (let num of arr) {
    if (set.has(num)) continue;
    set.add(num);
    result.push(num);
  }
  return result;
}

6️⃣ NESTED LOOPS – BREAK INNER LOOP

Problem: Matrix search

function findInMatrix(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        return true; // breaks both loops
      }
    }
  }
  return false;
}


🧠 Tip:

return breaks all loops

7️⃣ PRIME CHECK (Use break)
function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false; // break early
    }
  }
  return true;
}

8️⃣ SKIP UNWANTED CHARACTERS (String Problems)
function countLetters(str) {
  let count = 0;

  for (let ch of str) {
    if (ch === ' ') continue;
    count++;
  }
  return count;
}

9️⃣ SLIDING WINDOW – SHRINK USING continue
function longestSubarray(nums, k) {
  let left = 0, sum = 0, max = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    if (sum > k) {
      sum -= nums[left++];
      continue;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
}

🧠 INTERVIEW RULES (VERY IMPORTANT)
✅ Prefer return over break

Cleaner

Stops function fully

✅ Use continue to

Skip invalid cases

Avoid nested if

❌ Avoid overusing continue

Can reduce readability

🔑 QUICK MEMORY


| Situation     | Use                |
| ------------- | ------------------ |
| Found answer  | `break` / `return` |
| Skip bad data | `continue`         |
| Nested loops  | `return`           |
| Performance   | Early break        |


🎯 FINAL TAKEAWAY

✔ break = performance optimization
✔ continue = clean logic flow
✔ Used in almost every DSA problem