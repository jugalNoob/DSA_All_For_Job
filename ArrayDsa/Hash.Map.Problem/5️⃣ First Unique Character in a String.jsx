5️⃣ First Unique Character in a String

Problem: Return index of first non-repeating char.

Core Logic: Count frequency with hash map → iterate string again.

DS: HashMap

Time/Space: O(n) / O(n)

Use: Input validation, deduplication.

function firstUniqChar(s) {
    const count = new Map();
    for (const ch of s) count.set(ch, (count.get(ch) || 0) + 1);
    for (let i = 0; i < s.length; i++) {
        if (count.get(s[i]) === 1) return i;
    }
    return -1;
}