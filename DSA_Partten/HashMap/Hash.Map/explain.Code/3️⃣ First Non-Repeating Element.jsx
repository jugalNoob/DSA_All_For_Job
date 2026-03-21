3️⃣ First Non-Repeating Element

Problem: Find the first element that occurs only once.

Example:

arr = [2,3,2,4,3] → 4


Solution:

function firstNonRepeating(arr) {
    const freq = {};
    for (let num of arr) freq[num] = (freq[num] || 0) + 1;
    for (let num of arr) if (freq[num] === 1) return num;
    return null;
}
console.log(firstNonRepeating([2,3,2,4,3])); // 4