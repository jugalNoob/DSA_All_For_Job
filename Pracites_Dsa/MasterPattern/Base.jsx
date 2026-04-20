🎯 MASTER DECISION TREE

When you see a string problem, ask:

Substring / window?
→ Sliding Window
Left vs Right compare?
→ Two Pointer
Count / frequency?
→ HashMap
All combinations?

→ Backtracking
Matching pairs?
→ Stack
Palindrome substring?
→ Expand Around Center




🧠 1. Sliding Window Pattern

👉 Use when:

substring / longest / shortest / count
“continuous part of string”
Keywords:
longest substring
without repeating
at most K
minimum window
Template:
let left = 0;
let map = new Map();

for (let right = 0; right < s.length; right++) {

    // expand window
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    // shrink window
    while (/* condition invalid */) {
        map.set(s[left], map.get(s[left]) - 1);
        left++;
    }

    // update answer
}

🔥 Problems:
Longest substring without repeating
Minimum window substring
Longest repeating character replacement



🧠 2. Two Pointer (Palindrome / Reverse)

👉 Use when:

checking symmetry
reverse string
compare left-right
Keywords:
palindrome
reverse
valid string
Template:
let left = 0;
let right = s.length - 1;

while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
}
return true;

🔥 Problems:
Valid palindrome
Reverse string
Longest palindrome (basic)




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
🧠 4. Backtracking (Combination / Permutation)

👉 Use when:

“generate all”
combinations
subsets
Keywords:
all possible
combinations
permutations
Template:
function backtrack(path, index) {
    if (base case) {
        result.push(path);
        return;
    }

    for (let choice of options) {
        backtrack(path + choice, index + 1);
    }
}

🔥 Problems:
Letter combinations (you just did)
Generate parentheses
Permutations
🧠 5. Stack Pattern

👉 Use when:

matching pairs
remove duplicates
expression evaluation
Keywords:
valid parentheses
remove adjacent
nested structure
Template:
let stack = [];

for (let char of s) {
    if (/* condition */) {
        stack.pop();
    } else {
        stack.push(char);
    }
}

🔥 Problems:
Valid parentheses
Remove duplicates
Decode string



🧠 6. Expand Around Center (🔥 VERY IMPORTANT)

👉 Use when:

longest palindrome substring
Idea:

Expand from center → left & right

function expand(l, r, s) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
    }
    return s.slice(l + 1, r);
}

🔥 Problem:
Longest Palindromic Substring
🧠 7. Prefix / Rolling Hash (Advanced)

👉 Use when:

substring comparison
pattern matching
Keywords:
repeated substring
pattern search
🎯 MASTER DECISION TREE

When you see a string problem, ask:

Substring / window?
→ Sliding Window
Left vs Right compare?
→ Two Pointer
Count / frequency?
→ HashMap
All combinations?
→ Backtracking
Matching pairs?
→ Stack
Palindrome substring?
→ Expand Around Center
🔥 PRO LEVEL TRICK

👉 80% of string problems =
Sliding Window + HashMap

👉 15% =
Backtracking

👉 5% =
Stack / Special