Great — this is a very famous algorithm 🔥
👉 Called: Boyer-Moore Voting Algorithm (Greedy Pattern)

🧠 PROBLEM

👉 Find element that appears more than n/2 times

🎯 CORE IDEA (Simple)

👉 Majority element will survive all cancellations

💡 INTUITION (IMPORTANT 🔥)

Think like:

Same element → vote +1

Different element → cancel vote -1

👉 Majority element will still remain at the end


🔍 STEP-BY-STEP DRY RUN 🔥
Example:
data = [2, 2, 1, 1, 1, 2, 2]

Start:
candidate = null
count = 0

Iteration Table



| i | value | candidate | count | Action          |
| - | ----- | --------- | ----- | --------------- |
| 0 | 2     | 2         | 1     | new candidate   |
| 1 | 2     | 2         | 2     | same → count++  |
| 2 | 1     | 2         | 1     | diff → count--  |
| 3 | 1     | 2         | 0     | diff → count--  |
| 4 | 1     | 1         | 1     | reset candidate |
| 5 | 2     | 1         | 0     | diff → count--  |
| 6 | 2     | 2         | 1     | reset candidate |


Final:
candidate = 2 ✅

🧠 WHAT’S HAPPENING?

👉 Elements cancel each other:

2 vs 1 → cancel
2 vs 1 → cancel


👉 Majority element remains

🔥 KEY LOGIC
1️⃣ Reset Candidate
if (count === 0) {
    candidate = data[i];
}


👉 New election starts

2️⃣ Same Element
count++;


👉 Support increases

3️⃣ Different Element
count--;


👉 Vote cancels

🧠 WHY IT WORKS?

👉 Majority element (> n/2)
👉 Can never be fully cancelled