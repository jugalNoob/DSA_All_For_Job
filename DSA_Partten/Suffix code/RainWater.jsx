function trap(height){

    let n = height.length;

    let leftMax = [];
    let rightMax = [];
    let water = 0;

    // build left max
    leftMax[0] = height[0];
    for(let i = 1; i < n; i++){
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    // build right max
    rightMax[n - 1] = height[n - 1];
    for(let i = n - 2; i >= 0; i--){
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    // calculate water
    for(let i = 0; i < n; i++){
        water += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return water;
}

console.log(trap([3,0,1,0,4])); // 8
