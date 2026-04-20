
🧠 3. HashMap / Frequency Count

👉 Use when:

counting characters
anagram
duplicates
Keywords:
count
frequency
anagram
Template:
let map = new Map();

for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
}


🔥 Problems:
Valid anagram
First unique character
Majority char