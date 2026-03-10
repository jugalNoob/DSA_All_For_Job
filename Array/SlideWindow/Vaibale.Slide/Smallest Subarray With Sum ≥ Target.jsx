This is used in problems like:

Longest substring without repeating characters

Smallest subarray with sum ≥ target

Longest subarray with sum ≤ k

🧠 Core Idea

We use:

Two pointers → left and right

Expand → right++

Shrink → left++ when condition breaks

🔥 Example 1: Smallest Subarray With Sum ≥ Target
Problem:
arr = [2,3,1,2,4,3]
target = 7
Output = 2  (subarray [4,3])

✅ Code (Variable Sliding Window)
function minSubArrayLen(target, nums) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        // shrink window as long as sum >= target
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // 2


🧠 Why This is Variable?

Because window size changes dynamically:

Expand until sum >= target

Shrink from left to minimize window