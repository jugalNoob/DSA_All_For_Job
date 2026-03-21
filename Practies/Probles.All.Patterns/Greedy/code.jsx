Nice — you covered the 4 core patterns, now let’s finish with the last powerful one:

🔥 5. Greedy Pattern (Base Start)
💡 What is Greedy?

👉 Greedy means:

“At every step, pick the best option right now”
without worrying about future.

🧠 Intuition (Very Important)

You don’t try all possibilities (like DP)

You just make a locally optimal choice

Works only when:

Local optimum → Global optimum ✅

⚡ Simple Example
Problem:

You have coins [1, 2, 5, 10]
Find minimum coins for 18

Greedy Approach:
Take largest first:
10 → remaining 8
5 → remaining 3
2 → remaining 1
1 → remaining 0


✔ Answer = 4 coins

✅ Base Code Pattern
function greedy(arr) {
    // Step 1: Sort (important)
    arr.sort((a, b) => a - b)

    let result = 0

    for (let i = arr.length - 1; i >= 0; i--) {
        if (condition) {
            result++
        }
    }

    return result
}

📌 When to Use Greedy?

Use Greedy when you see:

"Minimum" or "Maximum"

Sorted input helps

No need to revisit decisions

Choices are independent

🔥 20 Greedy Interview Problems
🟢 Easy

Assign cookies ⭐

Lemonade change ⭐

Minimum coins (basic)

Largest perimeter triangle

Can place flowers

🟡 Medium

Activity selection problem ⭐

Non-overlapping intervals ⭐

Minimum number of arrows to burst balloons ⭐

Jump Game ⭐

Gas station ⭐

Partition labels ⭐

Queue reconstruction by height

Task scheduler

🔴 Hard

Jump Game II ⭐

Candy distribution ⭐

Minimum platforms ⭐

Job sequencing problem ⭐

Huffman coding ⭐

Merge intervals ⭐

Maximum performance of a team

🧠 Core Greedy Logic Types
1️⃣ Sort + Pick Best
intervals.sort((a,b) => a[1] - b[1])


👉 Used in: Activity selection

2️⃣ Always Take Largest/Smallest

👉 Used in:

Coins

Fractional knapsack ⭐

3️⃣ Interval Problems

👉 Sort by:

End time

Start time

4️⃣ Jump-Based Greedy

👉 Track max reach

maxReach = Math.max(maxReach, i + nums[i])

⚠️ Important Warning

❌ Greedy does NOT always work

Example:

Coin system [1, 3, 4], target 6
Greedy → 4+1+1 = 3 coins
Optimal → 3+3 = 2 coins

👉 That’s where DP is needed

🚀 Interview Strategy

When you see a problem:

Try Greedy first (fast)

If fails → DP

If sorted + local choice works → Greedy

🔥 Final Pattern Map (VERY IMPORTANT)
Problem Type	Pattern
Pair / sorted	Two Pointer
Subarray	Sliding Window
Range sum	Prefix Sum
Lookup	Hash Map
Optimization	Greedy
💯 If you want next level:

I can now give you:

🔥 Greedy + DP comparison (very important for interviews)

🔥 10 FAANG greedy problems with full JS code

🔥 Real system design where greedy is used (load balancing, scheduling)