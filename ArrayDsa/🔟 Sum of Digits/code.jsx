🔟 Sum of Digits

Example:

123 → 1+2+3 = 6

function sumDigits(num){

 let sum = 0

 while(num > 0){

   sum += num % 10
   num = Math.floor(num/10)

 }

 return sum
}

⭐ Important Logic Tricks Learned

These programs teach important operations:

% 10  → get last digit
/ 10  → remove last digit
Math.floor() → remove decimal
Math.pow() → power


These are very common in DSA number problems.