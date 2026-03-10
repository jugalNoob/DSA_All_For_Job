2️⃣ Group Anagrams

Problem: Group strings that are anagrams.

Core Logic: Sort string → use sorted string as key in hashmap → append original string.

DS: HashMap<string, Array<string>>

Time/Space: O(n * k log k) / O(n * k) (k = word length)

Use: Search engines, word games, autocomplete suggestions.

function groupAnagrams(strs) {
    const map = new Map();
    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
    }
    return [...map.values()];
}
