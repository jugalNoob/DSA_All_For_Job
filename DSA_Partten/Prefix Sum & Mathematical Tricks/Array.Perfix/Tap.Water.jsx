function trapRainWater(height){

let n = height.length

let leftMax = []
let rightMax = []

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

console.log(trapRainWater([4,2,0,3,2,5]))
