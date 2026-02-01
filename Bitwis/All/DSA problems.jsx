🔹 1. Check Even / Odd

Problem: Check if a number is even.

function isEven(x) {
  return (x & 1) === 0;
}


Time: O(1)
Used in: Filtering, optimization

🔹 2. Find Single Number (LeetCode 136)

Problem: Every number appears twice except one.

function singleNumber(nums) {
  let xor = 0;
  for (let n of nums) xor ^= n;
  return xor;
}


Why it works

a ^ a = 0
0 ^ b = b


Time: O(n)
Space: O(1)

🔹 3. Count Set Bits (Hamming Weight)

Problem: Count number of 1s in binary.

function countBits(n) {
  let count = 0;
  while (n > 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
}


Key trick: n & (n-1) removes the lowest set bit.

🔹 4. Check Power of Two

Problem: Is n a power of 2?

function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

🔹 5. Find Missing Number

Problem: Numbers from 0..n, one missing.

function missingNumber(nums) {
  let xor = nums.length;
  for (let i = 0; i < nums.length; i++) {
    xor ^= i ^ nums[i];
  }
  return xor;
}

🔹 6. Find Two Non-Repeating Numbers

Problem: All appear twice except two numbers.

function twoSingles(nums) {
  let xor = 0;
  for (let n of nums) xor ^= n;

  let diffBit = xor & -xor;
  let a = 0, b = 0;

  for (let n of nums) {
    if (n & diffBit) a ^= n;
    else b ^= n;
  }
  return [a, b];
}

🔹 7. Swap Two Numbers (No Temp Variable)
function swap(a, b) {
  a ^= b;
  b ^= a;
  a ^= b;
  return [a, b];
}

🔹 8. Reverse Bits (Interview Favorite)
function reverseBits(n) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res = (res << 1) | (n & 1);
    n >>= 1;
  }
  return res >>> 0;
}

🔹 9. Check If Kth Bit Is Set
function isKthBitSet(n, k) {
  return (n & (1 << k)) !== 0;
}

🔹 10. Divide by 2 Without /
function divideBy2(n) {
  return n >> 1;
}

🧠 Pattern Summary


🎤 Interview Tip

“Bitwise operations reduce time and space complexity and are especially useful in problems involving parity, uniqueness, and power-of-two checks.”