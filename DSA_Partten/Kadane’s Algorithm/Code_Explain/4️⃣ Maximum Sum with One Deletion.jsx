Ah! Now we’re on Maximum Sum Subarray with One Deletion — another tricky
 Kadane-style variation. This is a favorite interview twist because it tests
  understanding of Kadane and how to handle “exceptions” (deletion)
  . Let’s break it down step by step.

Problem

Given an array, find the maximum sum subarray 
where you can delete at most one element.

Deletion is optional — you may or may not 
delete an element.

Example: [1, -2, 0, 3]

Maximum sum = 4 → delete -2, subarray [1,0,3].

Observation / Idea

We need to track two states at each index:

maxEndHereNoDel → max subarray sum ending
 at i without deletion

maxEndHereOneDel → max subarray sum ending at
 i with one deletion allowed

Transition formulas:

maxEndHereNoDel = Math.max(arr[i], maxEndHereNoDel + arr[i])

→ Standard Kadane update.

maxEndHereOneDel = Math.max(maxEndHereNoDelPrev, maxEndHereOneDel + arr[i])
→ Either delete current element (maxEndHereNoDelPrev) 
or extend previous subarray that already used deletion (maxEndHereOneDel + arr[i]).

Keep track of maxSoFar = Math.max(maxSoFar, maxEndHereNoDel, maxEndHereOneDel)


JavaScript Implementation
function maxSumOneDeletion(arr) {
    const n = arr.length;
    if (n === 0) return 0;

    let maxEndHereNoDel = arr[0];      // max sum ending here without deletion
    let maxEndHereOneDel = arr[0];     // max sum ending here with one deletion
    let maxSoFar = arr[0];

    for (let i = 1; i < n; i++) {
        // Update max sum ending here with one deletion
        maxEndHereOneDel = Math.max(maxEndHereNoDel, maxEndHereOneDel + arr[i]);

        // Update max sum ending here without deletion (standard Kadane)
        maxEndHereNoDel = Math.max(arr[i], maxEndHereNoDel + arr[i]);

        maxSoFar = Math.max(maxSoFar, maxEndHereNoDel, maxEndHereOneDel);
    }

    return maxSoFar;
}

// Example
let arr = [1, -2, 0, 3];
console.log(maxSumOneDeletion(arr)); // Output: 4

Step-by-step Example [1, -2, 0, 3]

| i | arr[i] | maxEndHereNoDel | maxEndHereOneDel | maxSoFar |
| - | ------ | --------------- | ---------------- | -------- |
| 0 | 1      | 1               | 1                | 1        |
| 1 | -2     | -1              | 1                | 1        |
| 2 | 0      | 0               | 1                | 1        |
| 3 | 3      | 3               | 4                | 4 ✅      |


Notice at i=3:

maxEndHereOneDel = Math.max(maxEndHereNoDelPrev, 
    maxEndHereOneDel + arr[i]) = Math.max(-1, 1+3) = 4

Maximum sum = 4 → we effectively deleted -2.

Key Insight

This is essentially Kadane with 2 states.

maxEndHereNoDel → standard subarray sum

maxEndHereOneDel → keeps track of max sum when we’ve used the single deletion

Works with negatives and positives, and deletion is optional.