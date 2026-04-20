🔥 1. KMP Algorithm (Knuth-Morris-Pratt)
🧠 Idea

Avoid re-checking characters by using prefix-suffix knowledge

💡 Example
Text:    ABABDABACDABABCABAB
Pattern: ABABCABAB


Instead of restarting, KMP says:

“I already know part of the pattern matched, don’t waste it”

🔑 Key Concept: LPS Array

LPS = Longest Prefix = Suffix

Example:

Pattern: ABABCABAB
LPS:     0 0 1 2 0 1 2 3 4

✅ Code (Important)
function buildLPS(pattern) {
    let lps = new Array(pattern.length).fill(0);
    let len = 0;
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

function KMP(text, pattern) {
    let lps = buildLPS(pattern);
    let i = 0, j = 0;

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++; j++;
        }

        if (j === pattern.length) {
            return i - j; // found
        } else if (i < text.length && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1;
}

⚡ Complexity
Time: O(n + m) (very fast)
🧠 Interview Line

“KMP avoids redundant comparisons using LPS array.”