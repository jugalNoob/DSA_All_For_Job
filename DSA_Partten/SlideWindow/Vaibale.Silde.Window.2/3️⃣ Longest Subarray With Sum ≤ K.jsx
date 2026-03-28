3️⃣ Longest Subarray With Sum ≤ K
function longestSubarray(nums, k) {
    let left = 0;
    let sum = 0;
    let maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum > k) {
            sum -= nums[left];
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

console.log(longestSubarray([1,2,3,4,5], 9)); // 3


Ahh I see 👍 — you want your variable sliding window 
code explained in the same “detailed 
iteration story style” like fixed window.

Let’s do exactly that 🔥

✅ Code Logic (Your Function)

Expand → sum += data[i]
Shrink → while sum > target
Track max length → i - left + 1
✅ Input
data = [1,2,3,4,5]
target = 9

🔍 Detailed Iterations (Story Style)

👉 i = 0 (new element: 1)
Add: 1
sum = 0 + 1 = 1  (valid)

Window: [1]
length = 1

max = max(0,1) = 1



👉 i = 1 (new element: 2)
Add: 2
sum = 1 + 2 = 3  (valid)

Window: [1,2]
length = 2

max = max(1,2) = 2



👉 i = 2 (new element: 3)
Add: 3
sum = 3 + 3 = 6  (valid)

Window: [1,2,3]
length = 3

max = max(2,3) = 3




👉 i = 3 (new element: 4)
Add: 4
sum = 6 + 4 = 10  ❌ (exceeds target)

Shrink:
remove data[left] = 1
sum = 10 - 1 = 9 ✅
left = 1

Window: [2,3,4]
length = 3

max = max(3,3) = 3



👉 i = 4 (new element: 5)
Add: 5
sum = 9 + 5 = 14 ❌

Shrink:
remove 2 → sum = 12
left = 2

Still > target:
remove 3 → sum = 9 ✅
left = 3

Window: [4,5]
length = 2

max = max(3,2) = 3


✅ Final Answer
3

🔥 SAME PATTERN AS YOUR FIXED WINDOW?

Not exactly 👇

Fixed Window (your first example)
currentSum = currentSum - leaving + incoming

Variable Window (this one)
Expand → sum += incoming
Shrink → repeatedly remove from left until valid


👉 Key difference:

Fixed → 1 remove + 1 add
Variable → 1 add + multiple removes (while loop)
🧠 Interview Killer Line

👉 “In variable sliding window, the window size is dynamic. We expand greedily and shrink only when constraints break.”



| i | data[i] | Action (Add) | Sum After Add | While (sum > 9) | Left | Window  | Length | Max |
| - | ------- | ------------ | ------------- | --------------- | ---- | ------- | ------ | --- |
| 0 | 1       | +1           | 1             | No              | 0    | [1]     | 1      | 1   |
| 1 | 2       | +2           | 3             | No              | 0    | [1,2]   | 2      | 2   |
| 2 | 3       | +3           | 6             | No              | 0    | [1,2,3] | 3      | 3   |
| 3 | 4       | +4           | 10            | Yes → remove 1  | 1    | [2,3,4] | 3      | 3   |
| 4 | 5       | +5           | 14            | Yes → remove 2  | 2    |         |        |     |
|   |         |              | 12            | Yes → remove 3  | 3    | [4,5]   | 2      | 3   |



| i | data[i] | Action | Sum | While (sum > 9) Steps   | Left | Window  | Length | Max |
| - | ------- | ------ | --- | ----------------------- | ---- | ------- | ------ | --- |
| 0 | 1       | +1     | 1   | No                      | 0    | [1]     | 1      | 1   |
| 1 | 2       | +2     | 3   | No                      | 0    | [1,2]   | 2      | 2   |
| 2 | 3       | +3     | 6   | No                      | 0    | [1,2,3] | 3      | 3   |
| 3 | 4       | +4     | 10  | 10>9 → -1 → sum=9       | 1    | [2,3,4] | 3      | 3   |
| 4 | 5       | +5     | 14  | 14>9 → -2 → 12 → -3 → 9 | 3    | [4,5]   | 2      | 3   |



Idea:

Maintain window sum

Shrink window when sum > k