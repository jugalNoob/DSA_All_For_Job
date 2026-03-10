8️⃣ Ransom Note

Problem: Can string ransomNote be constructed from letters in magazine?

Core Logic: Count letters in magazine → subtract for ransomNote → check if any negative.

DS: HashMap / Array[26]

Time/Space: O(n + m) / O(1)

Use: Resource allocation, string availability, inventory checks.

function canConstruct(ransomNote, magazine) {
    const count = new Array(26).fill(0);
    const a = 'a'.charCodeAt(0);
    for (const ch of magazine) count[ch.charCodeAt(0)-a]++;
    for (const ch of ransomNote) {
        count[ch.charCodeAt(0)-a]--;
        if (count[ch.charCodeAt(0)-a] < 0) return false;
    }
    return true;
}
