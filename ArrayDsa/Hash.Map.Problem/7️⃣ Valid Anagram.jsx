7️⃣ Valid Anagram

Problem: Check if two strings are anagrams.

Core Logic: Count frequencies of letters → compare.

DS: HashMap / Array[26]

Time/Space: O(n) / O(1)

Use: Spell-check, duplicate detection, encoding validation.

function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const count = new Array(26).fill(0);
    const a = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i)-a]++;
        count[t.charCodeAt(i)-a]--;
    }
    return count.every(c => c === 0);
}