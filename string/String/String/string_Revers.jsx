| Method        | Best For              |
| ------------- | --------------------- |
| for loop      | Logic clarity         |
| split-reverse | Clean code            |
| while loop    | DSA                   |
| for...of      | Modern JS             |
| reduce        | Functional JS         |
| recursion     | Concept               |
| two pointers  | System-level / arrays |

🔑 Interview One-Liner

Strings are immutable in JS, so we always create a new reversed string or convert to array.


✅ 1. Reverse using for loop (you already did this)

Best for understanding logic

let data = 'jugal';
let reversed = '';

for (let i = data.length - 1; i >= 0; i--) {
  reversed += data[i];
}

console.log(reversed);


🔹 Why good?

No built-in methods

Interviewers like this

Time: O(n) | Space: O(n)

✅ 2. Using split().reverse().join() (you already used this)

Most common one-liner

let main = 'jugal';
console.log(main.split('').reverse().join(''));


🔹 Why good?

Clean & readable

Not always preferred in low-level interviews

✅ 3. Using while loop (Two Pointer style 🔥)

DSA-friendly approach

let str = 'jugal';
let left = str.length - 1;
let reversed = '';

while (left >= 0) {
  reversed += str[left];
  left--;
}

console.log(reversed);


🔹 Interview bonus: shows pointer logic

✅ 4. Using for...of loop

Modern JS approach

let str = 'jugal';
let reversed = '';

for (let char of str) {
  reversed = char + reversed;
}

console.log(reversed);


🔹 Builds string from front

✅ 5. Using reduce() (Functional style)

Advanced JS / React interviews

let str = 'jugal';

let reversed = str.split('').reduce((acc, char) => {
  return char + acc;
}, '');

console.log(reversed);


🔹 Shows strong JS fundamentals

✅ 6. Recursion (Advanced / concept-heavy)

Good for theory questions

function reverseString(str) {
  if (str === '') return '';
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString('jugal'));


🔹 Time: O(n)
🔹 Space: O(n) (call stack)

✅ 7. In-place array swap (Two Pointers – very important 🔥)

Used when string is mutable (array)

let arr = ['j','u','g','a','l'];
let start = 0;
let end = arr.length - 1;

while (start < end) {
  [arr[start], arr[end]] = [arr[end], arr[start]];
  start++;
  end--;
}

console.log(arr.join(''));


🔹 Core two-pointer pattern