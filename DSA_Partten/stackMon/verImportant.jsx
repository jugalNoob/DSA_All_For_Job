🔥 Monotonic Stack (VERY IMPORTANT DSA PATTERN)

A monotonic stack is a stack that keeps elements in a sorted order (increasing or decreasing) while processing data.

🧠 Definition

A monotonic stack is:

A stack that is always either strictly increasing or strictly decreasing from bottom to top.

📌 Two types
1. 🔽 Monotonic Decreasing Stack

(top → smallest trend)

Example:

[25, 10, 5]


👉 Used for:

Next Greater Element
Stock Span
Daily Temperatures
2. 🔼 Monotonic Increasing Stack

(top → largest trend)

Example:

[5, 10, 25]


👉 Used for:

Next Smaller Element
Histogram problems
Trapping Rain Water
🚀 Core Idea (VERY IMPORTANT)

Instead of comparing every element with all others:

👉 We maintain a stack where useless elements are removed immediately.

⚡ Why it is powerful
❌ Normal approach:
compare with all → O(n²)
✅ Monotonic stack:
each element pushed once
each element popped once

👉 O(n)

🧠 Real intuition

Think of stack as:

“keeping only useful candidates for future answers”

🔥 Example (Next Greater Element)

Input:

[4, 5, 2, 25]


We use monotonic decreasing stack

Step idea:

We go right → left:

remove all smaller elements
top of stack = answer
🧩 Pattern rule (MOST IMPORTANT)
For Next Greater Element:
Maintain decreasing stack

For Next Smaller Element:
Maintain increasing stack

💻 Generic template
🔽 Decreasing stack
while (stack.length && stack[top] <= current) {
    stack.pop();
}

🔼 Increasing stack
while (stack.length && stack[top] >= current) {
    stack.pop();
}

🚀 Where it is used in real world

This is NOT just DSA — it is used in:

📊 1. Stock market systems
trend detection
span analysis
⚡ 2. Monitoring systems
CPU spikes
latency tracking
🔥 3. Kafka / streaming systems
real-time event window processing
🌐 4. Browser engines
parsing expressions
DOM tree processing
🧠 One-line interview answer

Monotonic stack is a stack that maintains elements in sorted order (increasing or decreasing) and is used to solve range and next greater/smaller problems in O(n) time.



✅ Correct version
while (
    stack.length &&
    stack[stack.length - 1] <= current
) {
    stack.pop();
}