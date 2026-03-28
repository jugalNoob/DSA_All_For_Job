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

