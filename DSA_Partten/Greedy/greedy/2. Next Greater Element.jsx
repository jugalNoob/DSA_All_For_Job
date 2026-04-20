function nextGreaterElement(arr) {
    let stack = [];
    let result = new Array(arr.length).fill(-1);

    for (let i = arr.length - 1; i >= 0; i--) {

        while (stack.length && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        if (stack.length) {
            result[i] = stack[stack.length - 1];
        }

        stack.push(arr[i]);
    }

    return result;
}

console.log(nextGreaterElement([4, 5, 2, 25]));





🔥 Step-by-step dry run

Input:

[4, 5, 2, 25]


We go from right → left

👉 i = 3 → 25

Stack:

[]

no next greater
result[3] = -1

Push 25:

stack = [25]

👉 i = 2 → 2

Stack = [25]

While:

25 <= 2 ❌ no

So:

next greater = 25
result[2] = 25


Push 2:

stack = [25, 2]

👉 i = 1 → 5

Stack = [25, 2]

Remove smaller:
2 <= 5 → pop
stack = [25]

Now:

25 > 5 → stop

So:

result[1] = 25


Push 5:

stack = [25, 5]

👉 i = 0 → 4

Stack = [25, 5]

Remove smaller:
5 <= 4 ❌ no
25 > 4 → stop

So:

result[0] = 5


Push 4:

stack = [25, 5, 4]

🎯 Final result
[5, 25, 25, -1]

🧠 Why this works (IMPORTANT)

At every step:

Stack maintains:

elements in strict decreasing order

So:

top = closest bigger element
anything smaller is useless → removed


2. Next Greater Element to the Right (classic)
Problem: For each element, find the next greater element to its right. If none → -1.
Input: [1, 3, 2, 4]
Output: [3, 4, 4, -1]
Very efficient solution uses monotonic stack (decreasing):



But first — let's see a brute force version using prefixMax intuition (though not optimal):

function nextGreaterBrute(arr) {
    const n = arr.length;
    const ans = new Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
        // look right from i+1 to end
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[i]) {
                ans[i] = arr[j];
                break;
            }
        }
    }
    return ans;
}

Best O(n) solution (monotonic stack – most asked in interviews):


Step-by-Step Dry Run with Example [4, 5, 2, 25]
Initial State:

ans = [-1, -1, -1, -1]

i = 0 (element = 4)

j = 1 → data[1] = 5 > 4? Yes → ans[0] = 5, break
Now ans = [5, -1, -1, -1]

i = 1 (element = 5)

j = 2 → data[2] = 2 > 5? No
j = 3 → data[3] = 25 > 5? Yes → ans[1] = 25, break
Now ans = [5, 25, -1, -1]

i = 2 (element = 2)

j = 3 → data[3] = 25 > 2? Yes → ans[2] = 25, break
Now ans = [5, 25, 25, -1]

i = 3 (element = 25)

Inner loop: j starts from 4 → but array length is 4, so no elements to the right
ans[3] remains -1

Final Output: [5, 25, 25, -1] Correct!

Visual Understanding:
textArray:      4   →  5   →  2   →  25
Next Greater: 5      25     25     -1

For 4: Next greater is 5 (immediately right)
For 5: Next greater is 25 (after skipping 2)
For 2: Next greater is 25
For 25: Nothing greater on right → -1


Important Points:

Why break is used?
As soon as we find the first greater element to the right, we stop searching for that i.
We want the nearest (next) greater element, not the maximum one.

Time Complexity:
Outer loop: O(n)
Inner loop: In worst case O(n) for each i
Total: O(n²) → Slow for large arrays (e.g., 10,000 elements)

Space Complexity: O(n)   


::::::::::: -----------------------: ::::::::::::::::::::::::::::::::::::::::::::::


function nextGreaterStack(arr) {
    const n = arr.length;
    const ans = new Array(n).fill(-1);
    const stack = [];

    for (let i = n - 1; i >= 0; i--) {
        // Pop elements smaller or equal to arr[i]
        while (stack.length && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        // If stack not empty, top is next greater
        if (stack.length) {
            ans[i] = stack[stack.length - 1];
        }

        // Push current element for future checks
        stack.push(arr[i]);
    }

    return ans;
}

// Example
console.log(nextGreaterStack([4, 5, 2, 25])); // [5, 25, 25, -1]


Step-by-Step Dry Run with Example [4, 5, 2, 25]
Initial State:

ans = [-1, -1, -1, -1]

i = 0 (element = 4)

j = 1 → data[1] = 5 > 4? Yes → ans[0] = 5, break
Now ans = [5, -1, -1, -1]

i = 1 (element = 5)

j = 2 → data[2] = 2 > 5? No
j = 3 → data[3] = 25 > 5? Yes → ans[1] = 25, break
Now ans = [5, 25, -1, -1]

i = 2 (element = 2)

j = 3 → data[3] = 25 > 2? Yes → ans[2] = 25, break
Now ans = [5, 25, 25, -1]

i = 3 (element = 25)

Inner loop: j starts from 4 → but array length is 4, so no elements to the right
ans[3] remains -1

Final Output: [5, 25, 25, -1] Correct!

Visual Understanding:
textArray:      4   →  5   →  2   →  25
Next Greater: 5      25     25     -1

For 4: Next greater is 5 (immediately right)
For 5: Next greater is 25 (after skipping 2)
For 2: Next greater is 25
For 25: Nothing greater on right → -1


Important Points:

Why break is used?
As soon as we find the first greater element to the right, we stop searching for that i.
We want the nearest (next) greater element, not the maximum one.

Time Complexity:
Outer loop: O(n)
Inner loop: In worst case O(n) for each i
Total: O(n²) → Slow for large arrays (e.g., 10,000 elements)

Space Complexity: O(n)


console.log(nextGreaterElement([1, 3, 2, 4]));     // [3, 4, 4, -1]
console.log(nextGreaterElement([4, 5, 2, 25]));    // [5, 25, 25, -1]
console.log(nextGreaterElement([13, 7, 6, 12]));   // [-1, 12, 12, -1]
Quick summary – when to think of prefixMax
You should think of prefix maximum when the question asks something about:

maximum in prefix [0…i]
whether current element is the max so far
building histograms / water trapping intuition
some sliding window maximum problems (deque version is better, but prefix helps understand)

Want to see:

Rain water trapping using prefix max + prefix min?
How to modify the code for previous greater instead of next greater?
Or something else you’re curious about?

Just tell me which direction you'd like to go next! 🚀