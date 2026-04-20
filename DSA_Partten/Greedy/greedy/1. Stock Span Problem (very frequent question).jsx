1. Stock Span Problem (very frequent question)
Problem statement (simplified):
You are given daily stock prices (array of numbers).
For each day, calculate the span = number of consecutive previous days (including today) for which today's price was greater than or equal to all those previous days' prices.
Example:
textPrices:  [100, 80, 60, 70, 60, 75, 85]
Output:  [1,   1,  1,  2,  1,  4,  6]
Explanation of last few:

75 → greater/equal than previous 4 days (60,70,60,75) → span = 4
85 → greater/equal than previous 6 days → span = 6

Solution using prefixMax (naive but very clear way):




function calculateSpan(prices) {
    const n = prices.length;
    const span = new Array(n).fill(0);
    const stack = [];  // stores indices

    for (let i = 0; i < n; i++) {
        // Pop all elements with smaller or equal price
        while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
            stack.pop();
        }

        // If stack is empty, span is i+1 (all previous days + today)
        if (stack.length === 0) {
            span[i] = i + 1;
        } else {
            span[i] = i - stack[stack.length - 1];
        }

        // Push current index
        stack.push(i);
    }

    return span;
}

// Test Cases
console.log(calculateSpan([100, 80, 60, 120]));     
// Output: [1, 1, 1, 4]

console.log(calculateSpan([10, 4, 5, 90, 120, 80])); 
// Output: [1, 1, 2, 4, 5, 1]

console.log(calculateSpan([100, 80, 60, 70, 60, 75, 85])); 
// Output: [1, 1, 1, 2, 1, 4, 6]




function stockSpan(prices) {
    const n = prices.length;
    const span = new Array(n);
    const stack = []; // will store indices

    for (let i = 0; i < n; i++) {

        // Remove all smaller or equal elements
        while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
            stack.pop();
        }

        // If stack is empty → no greater element on left
        span[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];

        // Push current index
        stack.push(i);
    }

    return span;
}


[100, 80, 60, 70, 60, 75, 85]


⚙️ Key Idea (IMPORTANT)

👉 Use a stack to store indices of previous greater elements

Stack stores indices
Prices are compared using those indices
🔥 Dry Run Step-by-Step
i = 0 → price = 100
Stack empty
👉 span = 1
stack = [0]
span = [1]

i = 1 → price = 80
100 > 80 → no pop
👉 span = 1
stack = [0,1]
span = [1,1]

i = 2 → price = 60
80 > 60 → no pop
👉 span = 1
stack = [0,1,2]
span = [1,1,1]

i = 3 → price = 70
60 ≤ 70 → pop
80 > 70 → stop

👉 span = 3 - 1 = 2

stack = [0,1,3]
span = [1,1,1,2]

i = 4 → price = 60
70 > 60 → no pop

👉 span = 1

stack = [0,1,3,4]
span = [1,1,1,2,1]

i = 5 → price = 75
60 ≤ 75 → pop
70 ≤ 75 → pop
80 > 75 → stop

👉 span = 5 - 1 = 4

stack = [0,1,5]
span = [1,1,1,2,1,4]

i = 6 → price = 85
75 ≤ 85 → pop
80 ≤ 85 → pop
100 > 85 → stop

👉 span = 6 - 0 = 6

stack = [0,6]
span = [1,1,1,2,1,4,6]

✅ Final Output
[1, 1, 1, 2, 1, 4, 6]

💡 Why Stack Works

👉 It keeps track of nearest greater element on left
👉 Removes useless smaller elements → makes it O(n)

🔥 Interview One-Liner

👉
“I used a monotonic decreasing stack to efficiently find the nearest greater element on the left, giving O(n) time complexity.”

🚀 Real-World Use Cases
Stock market trend analysis 📈
Span of temperature (similar problem)
Histogram / next greater element problems

// But wait — we can make it faster using prefixMax cleverly? Actually no...
// The efficient way uses monotonic stack (O(n)), not prefixMax directly.
// But prefixMax helps you understand "maximum so far" logic very well.
The best & most common solution uses a monotonic decreasing stack (not prefix max), but understanding prefix max helps build intuition for these kinds of "looking left for bigger/smaller" problems.