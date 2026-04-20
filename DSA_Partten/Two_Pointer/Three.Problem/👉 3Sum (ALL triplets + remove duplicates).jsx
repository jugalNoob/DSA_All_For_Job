🔥 Now this is the real interview version of 3Sum
👉 Return ALL unique triplets (no duplicates)

🧠 Problem
arr = [-1,0,1,2,-1,-4]
target = 0


👉 Output:

[[-1,-1,2], [-1,0,1]]

🚀 Key Challenges

Find all triplets

Avoid duplicate triplets

Use efficient approach (O(n²))

✅ Final Code (INTERVIEW READY 🔥)

function threeSumAll(nums, target = 0) {
    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {

        // ❌ Skip duplicate "i"
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === target) {
                result.push([nums[i], nums[left], nums[right]]);

                // ❌ Skip duplicates for left
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }

                // ❌ Skip duplicates for right
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                left++;
                right--;

            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

console.log(threeSumAll([-1,0,1,2,-1,-4]));

🔍 Step-by-Step (Important Part)

Sorted:

[-4, -1, -1, 0, 1, 2]

👉 i = 0 → -4

No valid triplet ❌

👉 i = 1 → -1
left = -1, right = 2
-1 + (-1) + 2 = 0 ✅ → [-1,-1,2]

Move pointers
-1 + 0 + 1 = 0 ✅ → [-1,0,1]

👉 i = 2 → -1 (duplicate)

👉 Skip ❌

✅ Final Output
[[-1,-1,2], [-1,0,1]]

🧠 Duplicate Handling (VERY IMPORTANT 🔥)
1️⃣ Skip duplicate i
if (i > 0 && nums[i] === nums[i - 1]) continue;

2️⃣ Skip duplicate left
while (nums[left] === nums[left + 1]) left++;

3️⃣ Skip duplicate right
while (nums[right] === nums[right - 1]) right--;

⚡ Why This Works

👉 Sorting groups duplicates together
👉 Then we skip them carefully

🚀 Complexity

Time: O(n²)

Space: O(1) (excluding output)

🧠 Interview Tips

If interviewer asks:

👉 “Why sorting?”

To use two pointers and remove duplicates easily


👉 “Why skip duplicates?”

To avoid repeated triplets

🔥 Pattern Summary
Sort
Fix i
Use 2 pointers
Skip duplicates

🚀 Next Level (Top 1%)

If you want to go deeper:

👉 🔥 3Sum Closest
👉 🔥 4Sum (hard extension)
👉 🔥 K-Sum generalization