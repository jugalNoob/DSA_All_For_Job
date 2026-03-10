6️⃣ Word Pattern

Problem: Check if string follows pattern.

Core Logic: Map pattern char → word and ensure bijection.

DS: HashMap + Set

Time/Space: O(n) / O(n)

Use: Input format validation, matching templates.

function wordPattern(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;
    const map = new Map();
    const used = new Set();
    for (let i = 0; i < pattern.length; i++) {
        const p = pattern[i], w = words[i];
        if (map.has(p)) {
            if (map.get(p) !== w) return false;
        } else {
            if (used.has(w)) return false;
            map.set(p, w);
            used.add(w);
        }
    }
    return true;
}