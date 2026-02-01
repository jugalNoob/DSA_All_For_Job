🔥 Bitwise Tricks for DSA Interviews (Must-Know)
1️⃣ Check Even or Odd
Trick
n & 1

Why?

Last bit of odd = 1

Last bit of even = 0

if (n & 1) console.log("Odd");
else console.log("Even");


📌 Interview favorite

2️⃣ Multiply / Divide by 2 (Fast)
Multiply
n << 1   // n * 2

Divide
n >> 1   // n / 2

5 << 1 = 10
10 >> 1 = 5


📌 Used in binary search, heap, tree levels

3️⃣ Check if Number is Power of 2
Trick
n > 0 && (n & (n - 1)) === 0

Why?

Power of 2 has only one 1 bit

8  = 1000
7  = 0111
&  = 0000


📌 Very common interview question

4️⃣ Find Single Number (Others Twice)
Problem
[2, 3, 5, 2, 3]

Trick (XOR)
let ans = 0;
for (let n of arr) ans ^= n;

Why XOR?

a ^ a = 0

a ^ 0 = a

📌 LeetCode #136

5️⃣ Swap Two Numbers (No Temp)
a = a ^ b;
b = a ^ b;
a = a ^ b;


📌 Mostly conceptual, but interviewers love it

6️⃣ Count Set Bits (1s in Binary)
Brian Kernighan’s Algorithm
count = 0;
while (n) {
  n = n & (n - 1);
  count++;
}

Why?

Removes rightmost set bit every time

📌 Used in Hamming Weight, Bit Count

7️⃣ Get Rightmost Set Bit
n & -n


Example:

12 = 1100
-n = 0100


📌 Used in Fenwick Tree, XOR problems

8️⃣ Turn Off Rightmost Set Bit
n & (n - 1)


Example:

12 = 1100
11 = 1011
→ 1000


📌 Used in bit DP

9️⃣ Set / Clear / Toggle a Bit
Set bit at position i
n | (1 << i)

Clear bit
n & ~(1 << i)

Toggle bit
n ^ (1 << i)


📌 Frequently used in bitmask problems

🔟 Check if i-th Bit is Set
(n & (1 << i)) !== 0

1️⃣1️⃣ Subsets using Bitmask
Example
nums = [1,2,3]

for (let mask = 0; mask < (1 << nums.length); mask++) {
  let subset = [];
  for (let i = 0; i < nums.length; i++) {
    if (mask & (1 << i)) subset.push(nums[i]);
  }
  console.log(subset);
}


📌 Used in subset / power set problems

1️⃣2️⃣ XOR from 1 to N (O(1))
function xorUpto(n) {
  if (n % 4 === 0) return n;
  if (n % 4 === 1) return 1;
  if (n % 4 === 2) return n + 1;
  return 0;
}


📌 Used in range XOR queries

🧠 Interview Cheat Sheet


| Problem        | Trick       |
| -------------- | ----------- |
| Odd/Even       | `n & 1`     |
| Power of 2     | `n & (n-1)` |
| Unique element | XOR         |
| Bit count      | `n & (n-1)` |
| Toggle bit     | `^`         |
| Subsets        | Bitmask     |
| Fast multiply  | `<<`        |
