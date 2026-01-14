🔥 OPTIMIZE BRUTE FORCE → OPTIMAL (STRINGS)
1️⃣ Longest Substring Without Repeating Characters
❌ Brute Force (Nested Loops)
function longestUnique(str) {
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    let set = new Set();
    for (let j = i; j < str.length; j++) {
      if (set.has(str[j])) break;
      set.add(str[j]);
      max = Math.max(max, j - i + 1);
    }
  }
  return max;
}


⏱ Time: O(n²)
💾 Space: O(n)

⚠️ Problem

Rechecking characters again and again

Duplicate work

✅ Optimal (Sliding Window)
function longestUnique(str) {
  let set = new Set();
  let left = 0;
  let max = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }
    set.add(str[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
}


⏱ Time: O(n)
💾 Space: O(n)

🧠 Pattern: Sliding Window

2️⃣ Check Anagram
❌ Brute Force (Sorting)
function isAnagram(a, b) {
  return a.split('').sort().join('') ===
         b.split('').sort().join('');
}


⏱ O(n log n)

⚠️ Problem

Sorting is expensive

Extra memory

✅ Optimal (Frequency Count)
function isAnagram(a, b) {
  if (a.length !== b.length) return false;

  const freq = {};

  for (let ch of a) freq[ch] = (freq[ch] || 0) + 1;
  for (let ch of b) {
    if (!freq[ch]) return false;
    freq[ch]--;
  }
  return true;
}


⏱ O(n)
💾 O(1) (fixed alphabet)

🧠 Pattern: Frequency Map

3️⃣ Palindrome Check
❌ Brute Force (Reverse)
function isPalindrome(str) {
  let rev = str.split('').reverse().join('');
  return str === rev;
}


⏱ O(n)
💾 O(n)

⚠️ Problem

Extra memory

Full reverse needed

✅ Optimal (Two Pointers)
function isPalindrome(str) {
  let l = 0, r = str.length - 1;

  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  return true;
}


⏱ O(n)
💾 O(1)

🧠 Pattern: Two Pointers

4️⃣ Longest Common Prefix
❌ Brute Force (Compare All)
function lcp(strs) {
  let res = "";

  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
      if (s[i] !== strs[0][i]) return res;
    }
    res += strs[0][i];
  }
  return res;
}


⏱ O(n*m)

✅ Optimized (Shrink Prefix)
function lcp(strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
  }
  return prefix;
}


🧠 Pattern: Prefix Optimization

5️⃣ Substring Search (pattern in string)
❌ Brute Force
function find(s, p) {
  for (let i = 0; i <= s.length - p.length; i++) {
    let j = 0;
    while (j < p.length && s[i + j] === p[j]) j++;
    if (j === p.length) return true;
  }
  return false;
}


⏱ O(n*m)

✅ Optimal (Sliding Window / KMP)

👉 Concept:

Don’t re-check matched characters

Skip unnecessary comparisons

🧠 Pattern: Pattern Matching (KMP / Z)

🧠 INTERVIEW OPTIMIZATION PLAYBOOK
Step-by-step thinking
1. Brute force → nested loops
2. Identify repeated work
3. Ask: Can I reuse previous result?
4. Replace nested loop with:
   - sliding window
   - two pointers
   - prefix/frequency


   | Brute Force  | Optimized Pattern |
| ------------ | ----------------- |
| Nested loops | Sliding window    |
| Sorting      | Frequency map     |
| Reverse copy | Two pointers      |
| Re-scan      | Prefix / cache    |
| Compare all  | Hash / set        |



🎯 Interview GOLD LINE

Optimization means removing repeated work, not clever code.

If you want next:

Same optimization for arrays

ASCII diagrams of sliding window

Convert brute force → optimal in real interview questions

Node.js performance tips for strings