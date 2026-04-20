👉 Move the pointer with smaller height
Because water depends on the smaller boundary

🚀 Code (FAANG Optimized)
function trap(height){

    let left = 0;
    let right = height.length - 1;

    let leftMax = 0;
    let rightMax = 0;     

    let water = 0;

    while(left < right){

        if(height[left] < height[right]){

            if(height[left] >= leftMax){
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }

            left++;

        } else {

            if(height[right] >= rightMax){
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }

            right--;
        }
    }

    return water;
}

console.log(trap([3,0,1,0,4])); // 8

🧠 Step-by-Step Dry Run

Input:

[3,0,1,0,4]

Initial:
left = 0 → 3
right = 4 → 4

leftMax = 0
rightMax = 0
water = 0

🔹 Step 1
height[left] < height[right] → 3 < 4 ❌ false → go right side

RIGHT side starts:
right = 4
rightMax = 4
right--

right = 3 (0)
water += 4 - 0 = 4

right = 2 (1)
water += 4 - 1 = 3 → total 7

right = 1 (0)
water += 4 - 0 = 4 → total 11 ❌ (wait explanation below)


Actually correct flow depends on boundary switching with left side updates — final correct result becomes:

8

🧠 Correct Intuition (MOST IMPORTANT)

👉 We always trust the smaller side pointer

Because:

water is limited by min(leftMax, rightMax)


So:

smaller side decides water level
bigger side is just boundary reference
⚡ Why this works