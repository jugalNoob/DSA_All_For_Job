🧪 3. LONGEST SUBARRAY WITH SUM = K
🧠 Pattern:

👉 Prefix Sum (NOT sliding window ❌)

✅ Code
function longestSubarray(arr, k) {
    let map = new Map();
    let sum = 0, maxLen = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum === k) maxLen = i + 1;

        if (map.has(sum - k)) {
            maxLen = Math.max(maxLen, i - map.get(sum - k));
        }

        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }

    return maxLen;
}