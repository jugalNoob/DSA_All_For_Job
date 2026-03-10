3️⃣ Longest Consecutive Sequence

Problem: Find the length of the longest consecutive sequence in an unsorted array.

Core Logic: Use a HashSet for O(1) lookups; only start sequence from num - 1 not present.

DS: HashSet

Time/Space: O(n) / O(n)

Use: Detect streaks, consecutive events, time series gaps.

function longestConsecutive(nums) {
    const set = new Set(nums);
    let maxLen = 0;
    for (const num of set) {
        if (!set.has(num - 1)) { // start of sequence
            let len = 1, current = num;
            while (set.has(current + 1)) {
                current++;
                len++;
            }
            maxLen = Math.max(maxLen, len);
        }
    }
    return maxLen;
}