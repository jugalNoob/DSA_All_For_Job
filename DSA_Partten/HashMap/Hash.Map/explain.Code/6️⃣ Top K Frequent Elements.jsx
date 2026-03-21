6️⃣ Top K Frequent Elements

Problem: Return the k most frequent elements.

Example:

arr = [1,1,1,2,2,3], k=2 → [1,2]


Solution:

function topKFrequent(nums, k) {
    const freq = {};
    for (let n of nums) freq[n] = (freq[n] || 0) + 1;
    return Object.keys(freq)
                 .sort((a,b) => freq[b]-freq[a])
                 .slice(0,k)
                 .map(Number);
}
console.log(topKFrequent([1,1,1,2,2,3],2)); // [1,2]