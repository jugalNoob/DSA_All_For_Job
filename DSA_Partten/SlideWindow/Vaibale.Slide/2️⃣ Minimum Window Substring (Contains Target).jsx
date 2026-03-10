2️⃣ Minimum Window Substring (Contains Target)

Problem: Find the smallest substring in string s that contains all characters of t.

Pattern: Sliding window + Hash Map (frequency map)

Code (JavaScript):

function minWindow(s, t) {
    let need = new Map();
    for (let char of t) need.set(char, (need.get(char) || 0) + 1);

    let left = 0, count = 0;
    let minLen = Infinity, start = 0;

    for (let right = 0; right < s.length; right++) {
        let c = s[right];
        if (need.has(c)) {
            need.set(c, need.get(c) - 1);
            if (need.get(c) >= 0) count++;
        }

        while (count === t.length) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }
            let leftChar = s[left];
            if (need.has(leftChar)) {
                need.set(leftChar, need.get(leftChar) + 1);
                if (need.get(leftChar) > 0) count--;
            }
            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
}

console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"


Explanation:

need map → tracks required characters

count → how many matched

Expand right to include chars

Shrink left to find minimum window

Complexity: O(n + m), where n = s.length, m = t.length