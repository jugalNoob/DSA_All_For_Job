
1️⃣ Next Greater Element (NGE)
📌 Problem

Given array:

[2,1,2,4,3]


For each element, find next greater element to the right.

Output:

[4,2,4,-1,-1]


Explanation:

2 → next greater = 4

1 → 2

2 → 4

4 → none → -1

3 → none → -1

🧠 Intuition

We scan from right → left.

Why?

Because:
We want to know what comes after current element.

We maintain a monotonic decreasing stack.

✅ Code
function nextGreaterElement(nums) {
    const stack = [];
    const result = new Array(nums.length).fill(-1);

    for (let i = nums.length - 1; i >= 0; i--) {

        // Remove smaller elements
        while (stack.length && stack[stack.length - 1] <= nums[i]) {
            stack.pop();
        }

        // Top of stack is next greater
        if (stack.length) {
            result[i] = stack[stack.length - 1];
        }

        // Push current element
        stack.push(nums[i]);
    }

    return result;
}

console.log(nextGreaterElement([2,1,2,4,3]));

🔎 Why It Works

Stack stores only useful elements.

When a bigger number appears:
Smaller ones are useless → pop them.

Each element is pushed once and popped once.

⏱ Complexity

Time: O(n)
Space: O(n)