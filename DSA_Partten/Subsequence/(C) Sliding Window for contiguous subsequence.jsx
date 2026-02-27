(C) Sliding Window for contiguous subsequence
#
Problem: Maximum sum subarray of size k, or longest substring without repeating characters

Two pointers = window start & window end

// Max sum subarray of size k
const arr = [2,1,5,1,3,2];
const k = 3;
let maxSum = 0, windowSum = 0;

for(let end=0; end<arr.length; end++){
    windowSum += arr[end];
    if(end >= k-1){
        maxSum = Math.max(maxSum, windowSum);
        windowSum -= arr[end-k+1]; // shrink window
    }
}
console.log(maxSum); // 9


✅ Use case: all contiguous subsequence / subarray problems