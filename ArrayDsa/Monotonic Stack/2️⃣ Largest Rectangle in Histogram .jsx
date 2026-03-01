
2️⃣ Largest Rectangle in Histogram 🔥🔥

Very famous hard problem.

📌 Problem

Given heights:

[2,1,5,6,2,3]


Find largest rectangle area.

Output:

10


Rectangle: height=5 and 6 → width=2 → area=10

🧠 Intuition

For each bar:
Find:

Previous smaller element

Next smaller element

Width =

rightIndex - leftIndex - 1


Monotonic increasing stack helps.

✅ Code
function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;

    heights.push(0); // Sentinel

    for (let i = 0; i < heights.length; i++) {

        while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {

            const height = heights[stack.pop()];
            const width = stack.length === 0
                ? i
                : i - stack[stack.length - 1] - 1;

            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    }

    return maxArea;
}

console.log(largestRectangleArea([2,1,5,6,2,3]));

🔎 Dry Run Concept

When we see smaller height:

It means:
Previous bars cannot expand further.

So we calculate area.

📊 Why Width Formula Works

If stack empty:

width = i


Else:

width = i - previousSmallerIndex - 1

⏱ Complexity

Time: O(n)
Space: O(n)

Each index pushed once and popped once.

🔥 Pattern Recognition
| Problem      | Stack Type           |
| ------------ | -------------------- |
| Next Greater | Monotonic Decreasing |
| Histogram    | Monotonic Increasing |
| Rain Water   | Monotonic Stack      |
| Stock Span   | Monotonic Stack      |




🧠 Backend/System Thinking

Monotonic stack models:

Event stream dominance

Time-based metrics window

Rate-limit burst detection

Stock price processing

Used in real-time systems.

🎯 Interview Tips

If interviewer says:

"For each element, find next greater/smaller"

Immediately think:
Monotonic stack.

If interviewer says:

"Largest rectangle / area problem"

Also monotonic stack.

🚀 Advanced Follow-Up (Common)

Interviewer may ask:

Next Greater Element II (circular array)

Trapping Rain Water

Stock Span

Sliding Window Maximum (deque)

If you want next level:

I can now explain:

Trapping Rain Water

Sliding Window Maximum

Stock Span Problem

