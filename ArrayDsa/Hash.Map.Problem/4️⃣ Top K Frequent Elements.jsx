4️⃣ Top K Frequent Elements

Problem: Return K most frequent elements.

Core Logic: Count frequency with hash map → use heap or bucket sort.

DS: HashMap + Heap / Bucket

Time/Space: O(n log k) / O(n)

Use: Trending topics, analytics, logs.

function topKFrequent(nums, k) {
    const freq = new Map();
    for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);
    const heap = [...freq.entries()].sort((a,b)=>b[1]-a[1]);
    return heap.slice(0,k).map(e => e[0]);
}