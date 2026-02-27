




🧩 Your Code (unchanged)
let n = 5;

for (let i = 1; i <= n; i++) {
  let show = '';

  // spaces
  for (let j = 1; j <= n - i; j++) {
    show += '';
  }

  // stars
  for (let b = 1; b <= i; b++) {
    show += '*';
  }

  console.log(show);
}



////////// -------------------->>Your code (reverse) ----------------->>



let n=5

for (let i=n; i>=0; i--) {
  let show = '';

  // spaces
  for (let j = 1; j <= n - i; j++) {
    show += ' ';
  }

  // stars
  for (let b = 1; b <= i; b++) {
    show += '*';
  }

  console.log(show);
}









🔍 DRY RUN (Loop by Loop)
🔁 OUTER LOOP (Rows)
for (let i = 1; i <= 5; i++)


This loop runs 5 times → 5 rows

🟢 ROW 1 (i = 1)
➤ row = ""
🔲 Space loop
space <= n - i  →  5 - 1 = 4


Runs 4 times:

row = " "
row = "  "
row = "   "
row = "    "

🔢 Number loop
star <= i → 1


Runs 1 time:

row = "    1"

🖨 Output
    1

🟢 ROW 2 (i = 2)
🔲 Spaces: 5 - 2 = 3
row = "   "

🔢 Numbers: 1 → 2
row = "   1"
row = "   12"

🖨 Output
   12

🟢 ROW 3 (i = 3)
🔲 Spaces: 5 - 3 = 2
row = "  "

🔢 Numbers: 1 → 3
row = "  1"
row = "  12"
row = "  123"

🖨 Output
  123

🟢 ROW 4 (i = 4)
🔲 Spaces: 5 - 4 = 1
row = " "

🔢 Numbers: 1 → 4
row = " 1234"

🖨 Output
 1234

🟢 ROW 5 (i = 5)
🔲 Spaces: 5 - 5 = 0

(No space loop runs)

🔢 Numbers: 1 → 5
row = "12345"

🖨 Output
12345

✅ FINAL OUTPUT
    1
   12
  123
 1234
12345

🧠 HOW LOOPS WORK TOGETHER (VERY EASY)