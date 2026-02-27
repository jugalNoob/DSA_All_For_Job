🧠 MASTER FORMULA TABLE (MEMORIZE)

| Pattern    | Formula       |
| ---------- | ------------- |
| Increment  | `j`           |
| Repeat row | `i`           |
| Reverse    | `i - j + 1`   |
| Floyd      | `counter++`   |
| Binary     | `(i + j) % 2` |
| Palindrome | `2*i - j`     |
| Zigzag     | `j*rows + i`  |



🎯 Interview Power Line

“I derive number patterns using row i and column j, not hard-coded values.”

Instant confidence boost 💪




🧠 UNIVERSAL FORMULAS FOR NUMBER PATTERNS (INTERVIEW GOLD)
🔑 The Core Rule

Every number pattern depends on:

value = f(row i, column j)


👉 If you can express the number using i and j, you’ve won.

1️⃣ Basic Increasing Number Triangle
1
1 2
1 2 3
1 2 3 4

Formula
value = j

Code
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}

2️⃣ Repeating Row Numbers
1
2 2
3 3 3
4 4 4 4

Formula
value = i

3️⃣ Floyd’s Triangle
1
2 3
4 5 6
7 8 9 10

Formula
value = counter++


📌 Counter is outside loops

4️⃣ Reverse Number Triangle
1 2 3 4
1 2 3
1 2
1

Formula
value = j
columns = n - i + 1

5️⃣ Decreasing Numbers per Row
1
2 1
3 2 1
4 3 2 1

Formula
value = i - j + 1

6️⃣ Palindrome Number Pyramid
    1
   121
  12321
 1234321

Formula

Split into two parts:

Left side
value = j

Right side
value = 2*i - j

7️⃣ Binary Triangle (0/1)
1
0 1
1 0 1
0 1 0 1

Formula
value = (i + j) % 2


🔥 Interview favorite!

8️⃣ Number Diamond
   1
  121
 12321
  121
   1

Formula
stars = 2*i - 1
value = i - Math.abs(mid - j)


(mid = center index)

9️⃣ Zig-Zag / Wave Pattern
1  4  7
2  5  8
3  6  9

Formula
value = j * rows + i + 1

🔟 Hollow Number Pattern
1 2 3 4
1     4
1     4
1 2 3 4

Condition Formula
if (i == 1 || i == n || j == 1 || j == n)

