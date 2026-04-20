🔥 4. Maximum Difference (arr[j] - arr[i], j > i)
🧠 Problem

Find max difference where j > i

💡 Idea



function maxdiff(data) {
    let minvalue = data[0];
    let max = 0;

    for (let i = 1; i < data.length; i++) {

        max = Math.max(max, data[i] - minvalue);

        if (minvalue > data[i]) {
            minvalue = data[i];   // ✅ update properly
        }
    }

    return max;
}

console.log(maxdiff([10, 7, 2, 1])); // 0




🧠 What minvalue is doing

👉 This line is the key:

minvalue = Math.min(minvalue, data[i])

Meaning:

“Update the smallest value seen so far”

🔍 Step-by-step (your confusion part)
Input:
[10, 7, 2, 1]

Iteration 1 (i = 1)
minvalue = 10
data[i] = 7
max = Math.max(0, 7 - 10) = 0
minvalue = Math.min(10, 7) = 7   ✅ updated

Iteration 2 (i = 2)
minvalue = 7
data[i] = 2
max = Math.max(0, 2 - 7) = 0
minvalue = Math.min(7, 2) = 2   ✅ updated

Iteration 3 (i = 3)
minvalue = 2
data[i] = 1
max = Math.max(0, 1 - 2) = 0
minvalue = Math.min(2, 1) = 1   ✅ updated

🎯 Your confusion line fixed

You wrote:

minvalue=  // 10 , 7 


👉 Correct thinking:

minvalue updates like:

10 → 7 → 2 → 1

⚡ Simple Memory Trick

👉 Think:

minvalue = "best buying price so far"


👉 And:

max = "best profit so far"

🔥 Visual Summary
data:     [10, 7, 2, 1]
minvalue: 10 → 7 → 2 → 1
profit:   -3  -5  -1 → ignored (because max = 0)

🚀 Final Understanding
minvalue = keeps decreasing (best buy price)
max = never updates because profit is always negative
So result = 0


| i | arr[i] | minval | arr[i] - minval | maxdiff |
| - | ------ | ------ | --------------- | ------- |
| 0 | 10     | 10     | —               | 0       |
| 1 | 7      | 10     | -3              | 0       |
| 2 | 2      | 7      | -5              | 0       |
| 3 | 1      | 2      | -1              | 0       |


🔥 Real-world analogy

Think like stock market:

Buy at 10 → sell at 7 ❌ loss
Buy at 7 → sell at 2 ❌ loss
Buy at 2 → sell at 1 ❌ loss

👉 Best decision:

DON’T TRADE → profit = 0


🧠 Core Logic (Memorize This Line)

👉 "Keep track of minimum so far, and compare with current element"

🔥 Why this is powerful

This pattern is used in:

📈 Stock buy/sell problems
📊 Time-series analysis
📉 Loss minimization systems
⚡ Real-time trading systems (your Redis + Kafka system 🔥)