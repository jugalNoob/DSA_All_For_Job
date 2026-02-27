Perfect 🔥 now let’s understand Prefix–Suffix Array Method for 🌧️ Trapping Rain Water.

🧠 Core Idea

For every index i:

Water at i = min(maxLeft[i], maxRight[i]) - height[i]


So we precompute:

leftMax[i] → highest bar from start → i

rightMax[i] → highest bar from end → i

📌 Step 1: Example Input
height = [0,1,0,2,1,0,1,3,2,1,2,1]

📌 Step 2: Build Prefix (leftMax)
leftMax:
[0,1,1,2,2,2,2,3,3,3,3,3]


Meaning:

At index 3 → max from left = 2

At index 7 → max from left = 3

📌 Step 3: Build Suffix (rightMax)
rightMax:
[3,3,3,3,3,3,3,3,2,2,2,1]


Meaning:

At index 0 → max from right = 3

At index 8 → max from right = 2

📌 Step 4: Calculate Water

For each index:

water += min(leftMax[i], rightMax[i]) - height[i]


Total = 6

✅ Full Code (Prefix–Suffix Method)
function trap(height) {
    let n = height.length
    let leftMax = new Array(n)
    let rightMax = new Array(n)
    let water = 0

    // Build leftMax array
    leftMax[0] = height[0]
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i])
    }

    // Build rightMax array
    rightMax[n - 1] = height[n - 1]
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i])
    }

    // Calculate trapped water
    for (let i = 0; i < n; i++) {
        water += Math.min(leftMax[i], rightMax[i]) - height[i]
    }

    return water
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // 6

⏱ Complexity

Time → O(n)
Space → O(n) (because of two arrays)

🆚 Compare With Two Pointer
Method	Time	Space
Brute Force	O(n²)	O(1)
Prefix–Suffix	O(n)	O(n)
Two Pointer	O(n)	O(1)
🎯 When To Use Prefix–Suffix?

Use it when:

Interview allows extra space

You want simple readable logic

Debugging is easier than two-pointer

🧠 Interview Tip

If interviewer asks:

“Can you optimize space?”

👉 Then convert this to Two Pointer approach.

If you want next level:

🔥 Dry run with full index table
🔥 Stack-based method
🔥 Why min(leftMax, rightMax) works mathematically
🔥 How to recognize this pattern in new problems

Tell me 🚀