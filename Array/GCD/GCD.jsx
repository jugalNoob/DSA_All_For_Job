Looks like you’re asking how to find the GCD of two numbers 👍
Let’s do it cleanly and interview-ready.

✅ What is GCD?

GCD (Greatest Common Divisor) is the largest number that divides both numbers exactly.

Example:

gcd(12, 18) = 6

🔥 Best Method: Euclidean Algorithm

Fast, efficient, and most expected in interviews.

Logic (math magic ✨)
gcd(a, b) = gcd(b, a % b)


repeat until b === 0

✅ JavaScript Implementation
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(12, 18)); // 6
console.log(gcd(48, 18)); // 6


 
🧠 Recursive Version (clean & elegant)
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log(gcd(12, 18)); // 6

🐢 Brute Force Method (not recommended)

Only for understanding, not interviews.

function gcd(a, b) {
  let result = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      result = i;
    }
  }
  return result;
}

⏱️ Time Complexity


| Method      | Complexity             |
| ----------- | ---------------------- |
| Euclidean   | **O(log min(a, b))** ✅ |
| Brute Force | O(n) ❌                 |


🎯 Interview one-liner

“I use the Euclidean algorithm because it reduces the problem 
size using modulo and runs in logarithmic time.”




✅ What is the Euclidean Algorithm?

The Euclidean Algorithm is a fast method to find the GCD (Greatest Common Divisor) of two numbers.

One-line meaning:

GCD(a, b) = GCD(b, a % b) until the remainder becomes 0.

When remainder becomes 0, the other number is the GCD.


function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function gcdOfArray(arr) {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result = gcd(result, arr[i]);

    // early stop
    if (result === 1) return 1;
  }

  return result;
}

console.log(gcdOfArray([12, 18, 24])); // 6
console.log(gcdOfArray([8, 16, 32]));  // 8
console.log(gcdOfArray([7, 13, 19]));  // 1



48 % 18 = 12   → GCD(48,18) = GCD(18,12)
18 % 12 = 6    → GCD(18,12) = GCD(12,6)
12 % 6 = 0     → stop



🔁 Visual flow
(48,18)
   ↓
(18,12)
   ↓
(12,6)
   ↓
(6,0)  ← stop