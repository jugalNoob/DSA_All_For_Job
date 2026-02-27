Love this 🧠🔥
If you master this method, ANY pattern question becomes easy — stars, numbers, pyramids, diamonds, anything.

I’ll give you a universal step-by-step formula + examples.

🧠 How to Solve ANY Pattern Question (STEP-BY-STEP)
✅ STEP 1: LOOK at the OUTPUT (not the code)

Never start coding first.

Example:

    *
   **
  ***
 ****
*****


Ask:

How many rows?

What changes row by row?

👉 Rows = 5

✅ STEP 2: Decide the OUTER LOOP (ROWS)

Outer loop = number of lines

for (let i = 1; i <= n; i++)


✔ i always represents row number

✅ STEP 3: Break ONE ROW into PARTS

Every row is made of parts:

spaces

stars / numbers

maybe extra spaces

Example:

[spaces][stars]

✅ STEP 4: Write FORMULAS (THIS IS KEY 🔥)
Example 1: Right-aligned triangle
    *
   **
  ***
 ****
*****




| Row (i) | Spaces | Stars |
| ------- | ------ | ----- |
| 1       | n - i  | i     |
| 2       | n - i  | i     |
| 5       | n - i  | i     |




📌 Formula:

spaces → n - i

stars → i

Example 2: Pyramid
    *
   ***
  *****

  | Row | Spaces | Stars   |
| --- | ------ | ------- |
| i   | n - i  | 2*i - 1 |




✅ STEP 5: Translate FORMULA → CODE
for (let i = 1; i <= n; i++) {
  let row = ""

  for (let s = 1; s <= n - i; s++) row += " "
  for (let st = 1; st <= i; st++) row += "*"

  console.log(row)
}

✅ STEP 6: Dry Run ONE ROW (MANDATORY)

Example i = 3:

spaces = 5 - 3 = 2

stars = 3

If it matches output → ✅ correct

🧩 UNIVERSAL PATTERN CHEAT SHEET 🧠
🔺 Left Triangle
*
**
***


stars = i

🔺 Right Triangle
  *
 **
***


spaces = n - i

stars = i

🔺 Pyramid
  *
 ***
*****


spaces = n - i

stars = 2*i - 1

🔻 Inverted Triangle
*****
****
***
**
*


stars = n - i + 1

🔢 Number Pattern
1
12
123


numbers = 1 → i

🔥 GOLDEN RULES (Never Forget)

✔ Outer loop → rows

✔ Inner loops → pattern parts
✔ Use n - i, i, 2*i - 1
✔ Always dry-run

🎯 Interview One-Line Strategy

“I first identify rows, break each row into parts, derive formulas, then code.”

Say this and interviewer smiles 😄