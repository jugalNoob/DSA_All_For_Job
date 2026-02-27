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



Great question 😄 — this loop is the heart of the pyramid, so once you get it, all pattern questions feel easy.

We’ll zoom in only on this part:

for (let star = 1; star <= 2 * i - 1; star++) {
  row += "*";
}

🧠 What this loop is doing

It decides how many stars to print in each row.

In a pyramid, stars increase like this:

1
3
5
7
9


That’s odd numbers.

And guess what generates odd numbers?

👉 2 * i - 1

🔍 Let’s dry-run row by row (n = 5)
🔹 Row 1 → i = 1
2 * 1 - 1 = 1


⭐ Stars printed = 1

    *

🔹 Row 2 → i = 2
2 * 2 - 1 = 3


⭐ Stars printed = ***

   ***

🔹 Row 3 → i = 3
2 * 3 - 1 = 5


⭐ Stars printed = *****

  *****

🔹 Row 4 → i = 4
2 * 4 - 1 = 7


⭐ Stars printed = *******

🔹 Row 5 → i = 5
2 * 5 - 1 = 9


⭐ Stars printed = *********

📊 Pattern table (memorize this)

| i (row) | Spaces (`n - i`) | Stars (`2*i - 1`) |
| ------- | ---------------- | ----------------- |
| 1       | 4                | 1                 |
| 2       | 3                | 3                 |
| 3       | 2                | 5                 |
| 4       | 1                | 7                 |
| 5       | 0                | 9                 |



🤯 Why not i stars?

If you did:

for (let star = 1; star <= i; star++)


You’d get:

*
**
***
****
*****


That’s a triangle, not a pyramid.

The pyramid needs:

left side

center

right side
➡️ so stars grow twice as fast, minus the overlap in the middle
➡️ 2*i - 1

🔑 One-line interview explanation

“Each row in a pyramid has an odd number of stars, which follows the formula 2*i - 1, so the shape stays symmetric.”











/// Simple Code Explain All ----------------->>


let n=5

for (let i=n; i>=0; i--) {
  let show = '';

  // spaces
  for (let j = 1; j <= n - i; j++) {
    show += ' ';
  }

  // stars
  for (let b = 1; b <= i; b++) {
    show += ' * ';
  }

  console.log(show);
}