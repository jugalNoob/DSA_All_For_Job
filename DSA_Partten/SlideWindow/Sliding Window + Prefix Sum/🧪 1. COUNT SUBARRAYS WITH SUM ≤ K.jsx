🧪 1. COUNT SUBARRAYS WITH SUM ≤ K
🧠 Pattern:

👉 Sliding Window (only if all positive)
👉 Prefix Sum (if negatives exist)

✅ Sliding Window Version (Positive only)
function countSubarrays(arr, k) {
    let left = 0, sum = 0, count = 0;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];

        while (sum > k) {
            sum -= arr[left];
            left++;
        }

        count += (right - left + 1);
    }

    return count;
}

❗ If negatives exist → use Prefix Sum (harder)