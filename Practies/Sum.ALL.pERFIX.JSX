
Prefix sum array (also called cumulative sum or running total) is one of the
 most useful preprocessing techniques in arrays — especially in competitive 
 programming, interviews, and many real problems.

It is very similar in structure to the prefixMax you were asking
 about earlier, but instead of taking maximum, we take sum (addition).
What does it mean?

prefix[i] = sum of all elements from index 0 to i (inclusive)
In simple words:
At every position, it tells you "How much is the total collected so far
 from the beginning up to here?"

Example – Step by step
Input array:
[3, 1, 4, 2, 5]

Index,arr[i],prefix[i] calculation,prefix array so far,Meaning (total so far)
0,3,prefix[0] = 3,[3],3
1,1,prefix[1] = 3 + 1 = 4,"[3, 4]",3 + 1 = 4
2,4,prefix[2] = 4 + 4 = 8,"[3, 4, 8]",3 + 1 + 4 = 8
3,2,prefix[3] = 8 + 2 = 10,"[3, 4, 8, 10]",3+1+4+2 = 10
4,5,prefix[4] = 10 + 5 = 15,"[3, 4, 8, 10, 15]",3+1+4+2+5 = 15



Final prefix sum array: [3, 4, 8, 10, 15]
JavaScript code (very similar to your prefixMax)
JavaScriptfunction prefixSum(arr) {
    if (arr.length === 0) return [];

    let prefix = [];
    prefix[0] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        prefix[i] = prefix[i - 1] + arr[i];   // only difference: + instead of Math.max
    }

    return prefix;
}

console.log(prefixSum([3, 1, 4, 2, 5]));  
// Output: [3, 4, 8, 10, 15]
The most powerful feature: Range sum in O(1) time
Once you have the prefix sum array, you can answer any subarray sum query instantly (without looping).
Formula:
sum from index L to R (inclusive) = prefix[R] - prefix[L-1]
(if L == 0, then just prefix[R])
Examples using the array above [3,1,4,2,5] and prefix [3,4,8,10,15]:

Range,Calculation,Sum,Explanation
0 to 4,prefix[4],15,whole array
0 to 2,prefix[2],8,3+1+4
2 to 4,prefix[4] - prefix[1],11,4+2+5 = 15 - 4 = 11
1 to 3,prefix[3] - prefix[0],7,1+4+2 = 10 - 3 = 7
3 to 3,prefix[3] - prefix[2],2,just 2

This is why prefix sums are magical — many problems that ask for 
"sum in range X to Y" become very fast after O(n) preprocessing.
Comparison: prefixMax vs prefixSum


Property,prefixMax,prefixSum
Operation,"Math.max(prev, arr[i])",prev + arr[i]
Value at i,Maximum from 0 to i,Sum from 0 to i
Can answer …,max in [0..i] in O(1),sum in [L..R] in O(1)
Typical problems,"Next greater, stock span intuition, trapping rain
 water","Range sum queries, subarray sum equals K, 
 equilibrium points, max subarray sum variants"

 Very common real uses of prefix sum

Find if there is a subarray with sum = K (very famous problem)
Count number of subarrays with sum = 0 / K
Find maximum subarray sum (Kadane is better, but prefix sum + min tracking also works)
Range sum queries (many, many times in contests)
Balance points / equilibrium index
2D prefix sums → submatrix sum in O(1)

Want to see:

Code for "subarray sum equals K" using prefix sum + hashmap?
How to handle negative numbers?
2D prefix sum example?
Or compare with your prefixMax on the same array?

Just tell me which one interests you most! 😄