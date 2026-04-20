🔥 1. Trapping Rain Water (Top FAANG Question)
🧠 Problem

Given heights:

[3,0,2,0,4]


Find how much water is trapped.

💡 Core Idea

Water at index i depends on:

👉 left max (prefix max)
👉 right max (suffix max)

Formula:

water[i] = min(leftMax[i], rightMax[i]) - height[i]

✅ Prefix Max Use
leftMax[i] = Math.max(leftMax[i-1], height[i])

🚀 Full Code
function trap(height) {
    let n = height.length

    let leftMax = new Array(n)
    let rightMax = new Array(n)

    leftMax[0] = height[0]
    for(let i=1;i<n;i++){
        leftMax[i] = Math.max(leftMax[i-1], height[i])
    }

    rightMax[n-1] = height[n-1]
    for(let i=n-2;i>=0;i--){
        rightMax[i] = Math.max(rightMax[i+1], height[i])
    }

    let water = 0

    for(let i=0;i<n;i++){
        water += Math.min(leftMax[i], rightMax[i]) - height[i]
    }

    return water
}

🎯 Why interviewer likes this
Tests prefix + suffix thinking
Shows optimization mindset (O(n))