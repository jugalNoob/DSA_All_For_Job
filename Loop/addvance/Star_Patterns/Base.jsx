⭐ STAR PATTERNS — LOOP BASED (BASIC ➜ ADVANCED)
🧠 RULE TO REMEMBER

Outer loop → number of rows

Inner loop → stars / spaces per row

Build row as string → print

📌 BASIC PATTERNS
1️⃣ Square Pattern
*****
*****
*****
*****
*****

Code
let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    row += "*";
  }
  console.log(row);
}

2️⃣ Right Triangle
*
**
***
****
*****

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

3️⃣ Inverted Right Triangle
*****
****
***
**
*

let n = 5;

for (let i = n; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

📌 INTERMEDIATE PATTERNS
4️⃣ Left Triangle
    *
   **
  ***
 ****
*****

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let space = 1; space <= n - i; space++) {
    row += " ";
  }

  for (let star = 1; star <= i; star++) {
    row += "*";
  }

  console.log(row);
}

5️⃣ Pyramid
    *
   ***
  *****
 *******
*********

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let space = 1; space <= n - i; space++) {
    row += " ";
  }

  for (let star = 1; star <= 2 * i - 1; star++) {
    row += "*";
  }

  console.log(row);
}

6️⃣ Inverted Pyramid
*********
 *******
  *****
   ***
    *

let n = 5;

for (let i = n; i >= 1; i--) {
  let row = "";

  for (let space = 1; space <= n - i; space++) {
    row += " ";
  }

  for (let star = 1; star <= 2 * i - 1; star++) {
    row += "*";
  }

  console.log(row);
}

📌 ADVANCED PATTERNS
7️⃣ Diamond Pattern
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

let n = 5;

// Upper pyramid
for (let i = 1; i <= n; i++) {
  let row = "";

  for (let space = 1; space <= n - i; space++) {
    row += " ";
  }

  for (let star = 1; star <= 2 * i - 1; star++) {
    row += "*";
  }
  console.log(row);
}

// Lower pyramid
for (let i = n - 1; i >= 1; i--) {
  let row = "";

  for (let space = 1; space <= n - i; space++) {
    row += " ";
  }

  for (let star = 1; star <= 2 * i - 1; star++) {
    row += "*";
  }
  console.log(row);
}

8️⃣ Hollow Square
*****
*   *
*   *
*   *
*****

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= n; j++) {
    if (i === 1 || i === n || j === 1 || j === n) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}

9️⃣ Hollow Pyramid
    *
   * *
  *   *
 *     *
*********

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let space = 1; space <= n - i; space++) {
    row += " ";
  }

  for (let star = 1; star <= 2 * i - 1; star++) {
    if (star === 1 || star === 2 * i - 1 || i === n) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}

🧠 LOGIC CHEAT SHEET


| Pattern        | Space | Star |
| -------------- | ----- | ---- |
| Square         | 0     | n    |
| Right Triangle | 0     | i    |
| Left Triangle  | n-i   | i    |
| Pyramid        | n-i   | 2i-1 |
| Diamond        | ↑↓    | ↑↓   |




🎯 INTERVIEW TIPS

✔ Build row string first
✔ Think row-wise
✔ Outer loop controls height
✔ Inner loop controls shape

✅ FINAL TAKEAWAY

⭐ All star patterns = space + star math
⭐ Loops only — no tricks
⭐ Once logic is clear → any pattern is easy

If you want next:
➡ Number patterns
➡ Star pattern dry-run visuals
➡ Pattern logic formulas