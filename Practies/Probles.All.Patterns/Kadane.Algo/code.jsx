Ah, I see what you’re doing! You have two different 
approaches in your code:

maxSumSubarray → computes the maximum sum of a 
fixed-size subarray (size k) using brute-force. ✅ Correct.

kandam → looks like an attempt at Kadane’s 
Algorithm to find the maximum sum subarray of 
any size, but there are a couple of issues:

Let’s analyze kandam:


function kandam(data){
    let sum = 0;
    let max = data[0];
    for(let i=0; i<data.length; i++){
        sum += data[i];
        if(sum > max){
            max = sum;
        }
    }
    return max;
}


❌ Problems:

If sum becomes negative, it should be reset to 0. Otherwise, it will incorrectly carry over negative sums.

Currently, it works only if all numbers are positive.

✅ Correct Kadane’s Algorithm:

function kadane(data) {
    let maxSoFar = data[0];
    let maxEndingHere = data[0];

    for (let i = 1; i < data.length; i++) {
        // Either start new subarray at current element or extend the existing one
        maxEndingHere = Math.max(data[i], maxEndingHere + data[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

// Examples
console.log(kadane([10, 20, 30]));      // 60
console.log(kadane([-2, -3, 4, -1, -2, 1, 5, -3])); // 7


✅ Explanation:

maxEndingHere keeps track of the maximum sum ending at current index.

maxSoFar keeps track of the global maximum sum.

Handles negative numbers correctly.

So, to summarize:

Fixed-size max sum → use maxSumSubarray (brute force or sliding window).

Any-size max sum → use Kadane’s Algorithm (kadane).

If you want, I can also rewrite maxSumSubarray using sliding window in O(n) so it’s super efficient for large arrays. This is a common interview trick.

Do you want me to do that?