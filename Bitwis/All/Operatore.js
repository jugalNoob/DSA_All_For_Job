First: What are bitwise operators?

👉 They work on binary numbers (0 and 1) instead of normal numbers.

Example

5  = 0101
3  = 0011

1️⃣ & (AND)

Rule:
➡️ Result bit = 1 only if both bits are 1

5 & 3
0101
0011
----
0001  = 1

Why use AND?

✔ Check if a specific flag/permission exists
✔ Masking values

Real use

if (userRole & ADMIN) {
  // admin access
}

2️⃣ | (OR)

Rule:
➡️ Result bit = 1 if at least one bit is 1

5 | 3
0101
0011
----
0111 = 7

Why use OR?

✔ Combine flags
✔ Enable permissions

READ = 1;   // 0001
WRITE = 2;  // 0010

permission = READ | WRITE; // 0011

3️⃣ ^ (XOR)

Rule:
➡️ Result bit = 1 only if bits are different

5 ^ 3
0101
0011
----
0110 = 6

Why use XOR?

✔ Toggle values
✔ Swap numbers without temp variable

a = a ^ b;
b = a ^ b;
a = a ^ b;

4️⃣ ~ (NOT)

Rule:
➡️ Flips bits (1 → 0, 0 → 1)

~5
5 = 0000000000000101
~ = 1111111111111010 = -6

Why result is negative?

👉 JavaScript uses 32-bit signed integers

Why use NOT?

✔ Fast inversion
✔ Trick: ~index to check existence

if (~arr.indexOf(5)) {
  // found
}

5️⃣ << (Left Shift)

Rule:
➡️ Shift bits left, add 0 on right
➡️ Each shift = multiply by 2

5 << 1
0101 → 1010 = 10

Why use?

✔ Fast multiplication
✔ Bit positioning

price = price << 1; // price * 2

6️⃣ >> (Signed Right Shift)

Rule:
➡️ Shift bits right
➡️ Keeps the sign bit (important for negatives)

-8 >> 1 = -4

Why use?

✔ Divide by 2
✔ Preserve negative sign

7️⃣ >>> (Zero Fill Right Shift)

Rule:
➡️ Shift right
➡️ Always fill with 0 (no sign)

-8 >>> 1 = 2147483644

Why use?

✔ Convert negative to large positive
✔ Work with unsigned integers

id = id >>> 0; // force unsigned number

🔥 When should YOU use bitwise operators?

✔ Competitive programming
✔ DSA (bit manipulation problems)
✔ Performance-critical code
✔ Flags & permissions
✔ Low-level logic (encryption, hashing)

⚡ Super-simple summary


| Operator | Meaning     | Common Use       |              |
| -------- | ----------- | ---------------- | ------------ |
| `&`      | Check       | Permission check |              |
| `        | `           | Combine          | Enable flags |
| `^`      | Toggle      | Swap / flip      |              |
| `~`      | Invert      | Existence check  |              |
| `<<`     | ×2          | Fast multiply    |              |
| `>>`     | ÷2          | Signed divide    |              |
| `>>>`    | Unsigned ÷2 | Remove sign      |              |
