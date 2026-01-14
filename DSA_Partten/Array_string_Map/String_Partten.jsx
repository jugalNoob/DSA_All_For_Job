🔥 DSA PATTERNS FOR STRINGS
1️⃣ Linear Traversal

📌 Visit each character once

let str = "jugal";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}


🧠 Use when:

Print characters

Count vowels

Validate string

⏱ O(n)

2️⃣ Reverse Traversal

📌 Traverse from end

for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
}


🧠 Use when:

Reverse string

Palindrome check

3️⃣ Accumulator Pattern

📌 Build result string

let result = "";

for (let i = 0; i < str.length; i++) {
  result += str[i];
}


🧠 Use when:

String transformation

Filtering characters

⚠️ In JS, strings are immutable → creates new strings

4️⃣ Frequency Count

📌 Character counting

const freq = {};

for (let i = 0; i < str.length; i++) {
  freq[str[i]] = (freq[str[i]] || 0) + 1;
}


🧠 Use when:

Anagram

Duplicate characters

First non-repeating char

5️⃣ Two Pointers

📌 Left & right pointers

let left = 0;
let right = str.length - 1;

while (left < right) {
  if (str[left] !== str[right]) return false;
  left++;
  right--;
}
return true;


🧠 Use when:

Palindrome

Valid string checks

6️⃣ Sliding Window

📌 Window over substring

Fixed window
let count = 0;

for (let i = 0; i < k; i++) {
  if (isVowel(str[i])) count++;
}

for (let i = k; i < str.length; i++) {
  if (isVowel(str[i])) count++;
  if (isVowel(str[i - k])) count--;
}

Variable window
let left = 0;
const set = new Set();

for (let right = 0; right < str.length; right++) {
  while (set.has(str[right])) {
    set.delete(str[left]);
    left++;
  }
  set.add(str[right]);
}


🧠 Use when:

Longest substring

Pattern matching

7️⃣ Nested Loop (Brute Force)

📌 All substrings

for (let i = 0; i < str.length; i++) {
  let temp = "";
  for (let j = i; j < str.length; j++) {
    temp += str[j];
    console.log(temp);
  }
}


🧠 Use when:

Generate substrings

Brute force solutions

⏱ O(n²)

8️⃣ Prefix Pattern

📌 Compare prefixes

function commonPrefix(strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
  }
  return prefix;
}


🧠 Use when:

Longest common prefix

9️⃣ Pattern Matching

📌 Manual substring check

function contains(s, p) {
  for (let i = 0; i <= s.length - p.length; i++) {
    let j = 0;
    while (j < p.length && s[i + j] === p[j]) {
      j++;
    }
    if (j === p.length) return true;
  }
  return false;
}


🧠 Use when:

Substring search

KMP (advanced)

🔟 String Builder Optimization

📌 Avoid repeated concatenation

const arr = [];
for (let ch of str) {
  arr.push(ch.toUpperCase());
}
const result = arr.join("");


🧠 Use when:

Performance critical string building

🧠 Master Mental Map
Strings →
  ├─ traversal → count, validate
  ├─ reverse → palindrome
  ├─ frequency → anagram
  ├─ two pointers → checks
  ├─ sliding window → substring
  ├─ nested → brute force

🎯 Interview GOLD LINE

String problems are array problems with immutability.