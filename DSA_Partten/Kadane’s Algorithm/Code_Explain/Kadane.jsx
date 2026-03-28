✅ Correct Kadane’s Algorithm:

function kadane(data) {
    let maxSoFar = data[0];
    let maxEndingHere = data[0];

    for (let i = 1; i < data.length; i++) {
        // Either start new subarray at current element or extend the existing one
        maxEndingHere = Math.max(data[i], maxEndingHere + data[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

// Examples
console.log(kadane([10, 20, 30]));      // 60
console.log(kadane([-2, -3, 4, -1, -2, 1, 5, -3])); // 7



🧠 Core Idea

At every index, you decide:

👉 Should I start a new subarray OR continue the old one?

That’s this line:

maxending = Math.max(data[i], maxending + data[i])

📊 Step-by-Step Table

Input:

[10, 20, 30]

| i | data[i] | maxending (choice)     | maxsofar      |
| - | ------- | ---------------------- | ------------- |
| 0 | 10      | 10 (init)              | 10            |
| 1 | 20      | max(20, 10+20=30) → 30 | max(10,30)=30 |
| 2 | 30      | max(30, 30+30=60) → 60 | max(30,60)=60 |


🔥 Final Answer
60

🎯 Visualization

Think like this:

Step 1: [10] → sum = 10
Step 2: [10,20] → sum = 30
Step 3: [10,20,30] → sum = 60


👉 It keeps extending because adding is always better.

⚡ Important Case (WHY this works)

Try this:

[-2, 1, -3, 4, -1, 2, 1, -5, 4]


Kadane finds:

[4, -1, 2, 1] = 6


Because:

It drops bad prefix when sum becomes harmful
Starts fresh when needed
💡 Key Logic Line (MOST IMPORTANT 🔥)
maxending = Math.max(data[i], maxending + data[i])


👉 Means:

Start new subarray → data[i]
Continue old → maxending + data[i]

Pick best.