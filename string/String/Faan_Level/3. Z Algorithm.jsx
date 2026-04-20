🔥 3. Z Algorithm (Most underrated 🔥)
🧠 Idea

Build a Z-array:

Z[i] = length of substring starting at i which matches prefix

💡 Trick

Combine:

pattern + "$" + text


Then compute Z array.

✅ Code
function Zalgo(s) {
    let Z = new Array(s.length).fill(0);
    let left = 0, right = 0;

    for (let i = 1; i < s.length; i++) {
        if (i <= right) {
            Z[i] = Math.min(right - i + 1, Z[i - left]);
        }

        while (i + Z[i] < s.length && s[Z[i]] === s[i + Z[i]]) {
            Z[i]++;
        }

        if (i + Z[i] - 1 > right) {
            left = i;
            right = i + Z[i] - 1;
        }
    }

    return Z;
}

function search(text, pattern) {
    let combined = pattern + "$" + text;
    let Z = Zalgo(combined);

    for (let i = 0; i < Z.length; i++) {
        if (Z[i] === pattern.length) {
            return i - pattern.length - 1;
        }
    }

    return -1;
}

⚡ Complexity
Time: O(n + m)
🧠 Interview Line

“Z algorithm uses prefix matching to find pattern efficiently.”

🧠 When to use what?