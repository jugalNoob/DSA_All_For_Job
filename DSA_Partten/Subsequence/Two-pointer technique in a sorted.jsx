Two-pointer technique in a sorted(B) Two-pointer technique in a sorted array for sum problems

Problem: Find a pair with sum = target

const arr = [1,2,3,4,6];
let target = 6;

let left = 0;
let right = arr.length-1;

while(left < right){
    const sum = arr[left] + arr[right];
    if(sum === target){
        console.log([arr[left], arr[right]]);
        break;
    } else if(sum < target){
        left++;
    } else {
        right--;
    }
}


✅ Use case: pair sum / two sum in sorted array

Complexity: O(n)