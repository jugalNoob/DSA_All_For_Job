
::::::::::::::::::IsPowerTwo :::::::::::::::::::::::::
function isPowerOfTwo(n) {
  if (n < 1) {
    return false
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false
    }
    n = n / 2
  }
  return true
}

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false
  }
  return (n & (n - 1)) === 0
}

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(2)) // true
console.log(isPowerOfTwo(5)) // false


::::::::::::: ISPrime ::::::::::::::::::::::::
function isPrime(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // if n is divisible by any number then it is not prime
    if (n % i === 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(1)) // false
console.log(isPrime(5)) // true
console.log(isPrime(4)) // false


::::::::::::::::::: Dsa Level_Practies :::::::::::::::::::::::


🔢 ODD & EVEN — LOOP BASED (BASIC ➜ ADVANCED)
✅ What is Odd & Even?

Even → divisible by 2

Odd → NOT divisible by 2

num % 2 === 0  // Even
num % 2 !== 0  // Odd

📌 BASIC LEVEL
1️⃣ Print Even Numbers (1 to N)
function printEven(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

2️⃣ Print Odd Numbers (1 to N)
function printOdd(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

3️⃣ Count Odd & Even
function countOddEven(arr) {
  let odd = 0, even = 0;

  for (let num of arr) {
    if (num % 2 === 0) even++;
    else odd++;
  }
  return { odd, even };
}

📌 INTERMEDIATE LEVEL (DSA USE-CASES)
4️⃣ Separate Odd & Even Numbers
function separateOddEven(arr) {
  let odd = [], even = [];

  for (let num of arr) {
    if (num % 2 === 0) even.push(num);
    else odd.push(num);
  }
  return { odd, even };
}

5️⃣ Sum of Odd & Even Numbers
function sumOddEven(arr) {
  let oddSum = 0, evenSum = 0;

  for (let num of arr) {
    if (num % 2 === 0) evenSum += num;
    else oddSum += num;
  }
  return { oddSum, evenSum };
}

6️⃣ Check Array Has Only Even Numbers
function allEven(arr) {
  for (let num of arr) {
    if (num % 2 !== 0) return false;
  }
  return true;
}

📌 TWO POINTER APPROACH (ADVANCED)
7️⃣ Reorder Array (Even First, Odd Later)

Pattern: Two Pointer

function reorderOddEven(arr) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    if (arr[left] % 2 === 0) left++;
    else if (arr[right] % 2 !== 0) right--;
    else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr;
}


⏱ O(n) | 📦 O(1)

📌 SLIDING WINDOW USE-CASE
8️⃣ Longest Subarray with Even Numbers
function longestEvenSubarray(arr) {
  let left = 0, maxLen = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] % 2 !== 0) {
      left = right + 1;
    } else {
      maxLen = Math.max(maxLen, right - left + 1);
    }
  }
  return maxLen;
}

📌 NESTED LOOP USE-CASE
9️⃣ Count Odd-Even Pairs
function countOddEvenPairs(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] % 2 !== arr[j] % 2) {
        count++;
      }
    }
  }
  return count;
}

📌 BITWISE TRICK (INTERVIEW BONUS)
num & 1 === 0 // Even
num & 1 === 1 // Odd


Example:

function isEven(num) {
  return (num & 1) === 0;
}


⚡ Faster than % in low-level systems

🧠 INTERVIEW TIPS

✔ Use % 2 for clarity
✔ Use Two Pointer for rearranging
✔ Sliding Window for longest sequence
✔ Bitwise for optimization explanation

🎯 FINAL SUMMARY

Odd → %2 !== 0

Even → %2 === 0

Used in loops, arrays, windows, pointers

Core logic for many DSA problems

If you want next:
➡ Odd-Even interview questions
➡ Odd-Even pattern problems
➡ Odd-Even + Two Pointer deep dive

Just say NEXT 🚀