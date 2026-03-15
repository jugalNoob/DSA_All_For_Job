function TapWater(data){
    let left=0
    let right=data.length-1 
    let leftmax=0
    let rightmax=0
     let water = 0

    while(left <right){

         
        leftmax=Math.max(leftmax , data[left])
        rightmax=Math.max(rightmax , data[right])

        if(leftmax  < rightmax){
            water+=leftmax-data[left]
            left++
        }else{
            water+=rightmax-data[right]
            right--
        }

    }
   return water

}

 console.log(TapWater([0,1,0,2,1,0,1,3,2,1,2,1])) // 6



// function trap(height) {
//     let left = 0
//     let right = height.length - 1
//     let leftMax = 0
//     let rightMax = 0
//     let water = 0

//     while (left < right) {

//         if (height[left] < height[right]) {

//             if (height[left] >= leftMax) {
//                 leftMax = height[left]
//             } else {
//                 water += leftMax - height[left]
//             }

//             left++
//         } else {

//             if (height[right] >= rightMax) {
//                 rightMax = height[right]
//             } else {
//                 water += rightMax - height[right]
//             }

//             right--
//         }
//     }

//     return water
// }

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // 6



// function trap(height) {
//     let left = 0
//     let right = height.length - 1
//     let leftMax = 0
//     let rightMax = 0
//     let water = 0

//     while (left < right) {

//         leftMax = Math.max(leftMax, height[left])
//         rightMax = Math.max(rightMax, height[right])

//         if (leftMax < rightMax) {
//             water += leftMax - height[left]
//             left++
//         } else {
//             water += rightMax - height[right]
//             right--
//         }
//     }

//     return water
// }

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // 6
