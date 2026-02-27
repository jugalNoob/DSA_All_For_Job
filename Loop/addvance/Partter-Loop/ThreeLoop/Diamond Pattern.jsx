
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