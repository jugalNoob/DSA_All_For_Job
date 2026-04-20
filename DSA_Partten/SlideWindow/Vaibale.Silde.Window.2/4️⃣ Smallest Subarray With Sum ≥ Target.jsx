⚡ Intuition
Maximum ≤ target: “How long can I stretch the window before breaking the rule?”
Minimum ≥ target: “How quickly can I reach the rule and then shrink to get the smallest window?”




🔥 Key Difference From Previous Problem

| Problem Type          | Condition    | Goal           |
| --------------------- | ------------ | -------------- |
| Max length (≤ target) | sum ≤ target | Expand more    |
| Min length (≥ target) | sum ≥ target | Shrink more 🔥 |


4️⃣ Smallest Subarray With Sum ≥ Target

function smallestSubarray(nums, target) {
    let left = 0;
    let sum = 0;
    let minLen = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

console.log(smallestSubarray([2,3,1,2,4,3], 7)); // 2


2️⃣ Minimum Size Subarray Sum ≥ Target

Problem:

Find shortest subarray such that sum ≥ target.
You shrink the window while sum ≥ target to find the minimum length.

✅ Example
data = [2,3,1,2,4,3], target=7

windows:
[2,3,1,2] sum=8 ≥ 7 → shrink → [3,1,2] sum=6 < 7
[4,3] sum=7 ≥ 7 → shrink → min length = 2




🔍 Step-by-step Explanation
Input:
data = [2,3,1,2,4,3]
target = 7

Variables:
left = 0
sum = 0
min = Infinity

i = 0 → data[i] = 2
sum = 2
sum < target → no shrink
min = Infinity

i = 1 → data[i] = 3
sum = 2 + 3 = 5
sum < target → no shrink
min = Infinity

i = 2 → data[i] = 1
sum = 5 + 1 = 6
sum < target → no shrink
min = Infinity

i = 3 → data[i] = 2
sum = 6 + 2 = 8
sum >= target → shrink

min = min(Infinity, 3-0+1) = 4
sum -= data[0] → sum = 8 - 2 = 6
left = 1
sum < target → stop

i = 4 → data[i] = 4
sum = 6 + 4 = 10
sum >= target → shrink

min = min(4, 4-1+1) = 4
sum -= data[1] → sum = 10 - 3 = 7
left = 2
sum >= target → shrink again

min = min(4, 4-2+1) = 3
sum -= data[2] → sum = 7 - 1 = 6
left = 3
sum < target → stop

i = 5 → data[i] = 3
sum = 6 + 3 = 9
sum >= target → shrink

min = min(3, 5-3+1) = 3
sum -= data[3] → sum = 9 - 2 = 7
left = 4
sum >= target → shrink

min = min(3, 5-4+1) = 2  🔥
sum -= data[4] → sum = 7 - 4 = 3
left = 5
sum < target → stop

✅ Final Answer
min = 2  ✅

Subarray [4,3] sum = 7 → minimum length
🧠 Key Idea (Sliding Window)
Expand window (add data[i])
Shrink window from left while sum >= target
Update min each time
⚡ Complexity
Time: O(n)
Space: O(1)
Idea:

Expand window until sum ≥ target

Shrink window to find smallest length


✅ Input
data = [2,3,1,2,4,3]
target = 7

🔍 Detailed Iterations (Story Style)
👉 i = 0 (new element: 2)
Add: 2
sum = 2  (< 7, not valid)

Window: [2]
No update

👉 i = 1 (new element: 3)
Add: 3
sum = 5  (< 7)

Window: [2,3]
No update

👉 i = 2 (new element: 1)
Add: 1
sum = 6  (< 7)

Window: [2,3,1]
No update

👉 i = 3 (new element: 2)
Add: 2
sum = 8  (>= 7 ✅ valid)

Now shrink to find MIN length:

Window: [2,3,1,2] → length = 4
min = 4

Shrink:
remove 2 → sum = 6 (<7 ❌ stop)

left = 1

👉 i = 4 (new element: 4)
Add: 4
sum = 6 + 4 = 10 (>=7 ✅)

Window: [3,1,2,4] → length = 4
min = min(4,4) = 4

Shrink:
remove 3 → sum = 7 (>=7 ✅)

Window: [1,2,4] → length = 3
min = min(4,3) = 3

Shrink again:
remove 1 → sum = 6 (<7 ❌ stop)

left = 3

👉 i = 5 (new element: 3)
Add: 3
sum = 6 + 3 = 9 (>=7 ✅)

Window: [2,4,3] → length = 3
min = min(3,3) = 3

Shrink:
remove 2 → sum = 7 (>=7 ✅)

Window: [4,3] → length = 2
min = min(3,2) = 2 ✅🔥

Shrink again:
remove 4 → sum = 3 (<7 ❌ stop)

left = 5

✅ Final Answer
2


👉 Smallest subarray:

[4,3]

🧠 Core Logic (VERY IMPORTANT)
Pattern:
Expand → sum += data[i]

When valid (sum >= target):
    update answer (min length)
    shrink from left to try smaller window

