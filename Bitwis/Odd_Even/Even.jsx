🔹 Binary representation and odd/even

Every integer in binary has a least significant bit (LSB) — 
the last bit on the right.

That last bit determines odd or even:


| Decimal | Binary | Last bit | Odd/Even |
| ------- | ------ | -------- | -------- |
| 0       | 0000   | 0        | Even     |
| 1       | 0001   | 1        | Odd      |
| 2       | 0010   | 0        | Even     |
| 3       | 0011   | 1        | Odd      |
| 4       | 0100   | 0        | Even     |
| 5       | 0101   | 1        | Odd      |




🔹 Check last bit using & 1
function isOdd(n) {
  return (n & 1) === 1; // last bit = 1 → odd
}

function isEven(n) {
  return (n & 1) === 0; // last bit = 0 → even
}

console.log(isOdd(5));  // true (101 → last bit 1)
console.log(isEven(5)); // false
console.log(isOdd(6));  // false (110 → last bit 0)
console.log(isEven(6)); // true


✅ This works because binary LSB is exactly the 
remainder when divided by 2.

(n & 1) is faster than n % 2 in bitwise-heavy DSA problems.

🔹 Visualization
n = 5 → binary = 101
LSB = 1 → odd

n = 6 → binary = 110
LSB = 0 → even

🔹 Interview Tip

“The least significant bit (LSB) in binary tells if a 
number is odd (1) or even (0). Using (n & 1) is a fast and common trick in algorithms.”

If you want, I can make a small cheat sheet showing all
 numbers 0–15 with their last bit and odd/even — super handy for interviews.

Do you want me to make that?



