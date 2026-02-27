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