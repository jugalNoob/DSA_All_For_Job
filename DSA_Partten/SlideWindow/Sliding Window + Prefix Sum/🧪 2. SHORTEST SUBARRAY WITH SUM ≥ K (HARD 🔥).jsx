🧪 2. SHORTEST SUBARRAY WITH SUM ≥ K (HARD 🔥)
🧠 Pattern:

👉 Prefix Sum + Monotonic Deque

💡 Idea:

Build prefix sum array

Use deque to maintain increasing order

✅ Code
function shortestSubarray(nums, k) {
    let n = nums.length;
    let prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    let deque = [];
    let minLen = Infinity;

    for (let i = 0; i <= n; i++) {

        while (deque.length && prefix[i] - prefix[deque[0]] >= k) {
            minLen = Math.min(minLen, i - deque.shift());
        }

        while (deque.length && prefix[i] <= prefix[deque[deque.length - 1]]) {
            deque.pop();
        }

        deque.push(i);
    }

    return minLen === Infinity ? -1 : minLen;
}
