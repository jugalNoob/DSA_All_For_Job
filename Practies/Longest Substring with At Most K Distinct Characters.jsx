❓ Example
s = "eceba"
k = 2


👉 Output:

3 → "ece"

✅ Code
function longestKDistinct(s, k) {
    let map = new Map();
    let left = 0;
    let max = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        map.set(char, (map.get(char) || 0) + 1);

        // shrink window if > k
        while (map.size > k) {
            let leftChar = s[left];
            map.set(leftChar, map.get(leftChar) - 1);

            if (map.get(leftChar) === 0) {
                map.delete(leftChar);
            }

            left++;
        }

        max = Math.max(max, right - left + 1);
    }

    return max;
}

console.log(longestKDistinct("eceba", 2)); // 3

🧠 Pattern

👉 Expand window:

right++


👉 Shrink window:

while (invalid condition) → left++