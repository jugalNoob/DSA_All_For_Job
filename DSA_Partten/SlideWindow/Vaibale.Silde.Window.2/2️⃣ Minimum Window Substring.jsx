2️⃣ Minimum Window Substring
function minWindow(s, t) {
    let map = new Map();

    for (let char of t) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let left = 0;
    let count = t.length;
    let minLen = Infinity;
    let start = 0;

    for (let right = 0; right < s.length; right++) {

        if (map.has(s[right])) {
            if (map.get(s[right]) > 0) count--;
            map.set(s[right], map.get(s[right]) - 1);
        }

        while (count === 0) {

            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }

            if (map.has(s[left])) {
                map.set(s[left], map.get(s[left]) + 1);
                if (map.get(s[left]) > 0) count++;
            }

            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
}

console.log(minWindow("ADOBECODEBANC", "ABC")); // BANC


Idea:

Track required characters with HashMap

Expand window until valid

Shrink window to get minimum length