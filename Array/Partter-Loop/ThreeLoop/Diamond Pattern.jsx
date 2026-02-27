
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

  // spaces
  for (let space = 1; space <= n - i; space++) {
    row += " ";
  }

  // stars
  for (let star = 1; star <= 2 * i - 1; star++) {
    row += "*";
  }

  console.log(row);
}

// Lower pyramid
for (let i = n - 1; i >= 1; i--) {
  let row = "";

  // spaces
  for (let space = 1; space <= n - i; space++) {
    row += " ";
  }

  // stars
  for (let star = 1; star <= 2 * i - 1; star++) {
    row += "*";
  }

  console.log(row);
}
