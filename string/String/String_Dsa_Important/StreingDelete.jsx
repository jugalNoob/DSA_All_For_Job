Ah! I see what you’re trying 😅

In JavaScript, strings are immutable, which means you cannot delete characters from a string directly like data.d or delete data[2]. That’s why your code doesn’t work.

✅ Ways to “delete” a character from a string
1️⃣ Using slice()
let data = 'jugal';
// delete character at index 2 ('g')
let index = 2;

let newData = data.slice(0, index) + data.slice(index + 1);
console.log(newData); // "jual"

2️⃣ Convert to Array + splice
let data = 'jugal';
let arr = data.split('');   // ['j','u','g','a','l']

arr.splice(2, 1);           // delete index 2
let newData = arr.join('');
console.log(newData);       // "jual"

3️⃣ Using replace() (if deleting a specific character)
let data = 'jugal';
let newData = data.replace('g', ''); // removes first 'g'
console.log(newData);               // "jual"


⚠️ replace() removes the first occurrence only.
To remove all occurrences: data.replace(/g/g, '')

🔑 Key Takeaways

Strings are immutable in JS

Cannot use delete operator on string characters

Use slice, split + splice, or replace to remove characters




function deleteChar(str, index) {
  if (index < 0 || index >= str.length) {
    // invalid index, return original string
    return str;
  }
  // remove character at index using slice
  return str.slice(0, index) + str.slice(index + 1);
}

console.log(deleteChar('jugal', 0)); // "ugal"  → remove first char
console.log(deleteChar('jugal', 2)); // "jual"  → remove 'g'
console.log(deleteChar('jugal', 4)); // "juga"  → remove last char
console.log(deleteChar('jugal', 5)); // "jugal" → invalid index
