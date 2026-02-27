
8️⃣ Hollow Square



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