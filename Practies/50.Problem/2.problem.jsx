You posted a very large list of DSA problems (mostly from GeeksforGeeks). Solving them randomly is not efficient.
The best way is to group them by patterns so your DSA logic improves step-by-step.

Since you are preparing for JavaScript interviews, I organized them into a clear roadmap.

1️⃣ Basic Array Logic (Start Here)

These build core thinking.

Problems:

Largest in Array

Second Largest

Min and Max in Array

Reverse an Array

Rotate Array by One

Array Search

Check if array is sorted

Value equal to index value

Count Odd and Even

Print Elements of Array

Example pattern:

let arr=[3,5,1,8]

let max=arr[0]

for(let i=1;i<arr.length;i++){
 if(arr[i]>max){
   max=arr[i]
 }
}

console.log(max)

2️⃣ Two Pointer Pattern

Very important pattern.

Problems:

Sort 0s,1s,2s

Two Sum

Pair with given sum

Segregate 0s and 1s

Move All Zeroes to End

Rearrange Array Alternately

Alternate Positive Negative

Triplet Sum

Container With Most Water

Example:

let arr=[0,1,0,1]

let left=0
let right=arr.length-1

while(left<right){

 if(arr[left]==0){
   left++
 }
 else if(arr[right]==1){
   right--
 }
 else{
   [arr[left],arr[right]]=[arr[right],arr[left]]
 }

}

console.log(arr)

3️⃣ Sliding Window Pattern

Used for subarray problems.

Problems:

Longest Subarray with Sum K

K Sized Subarray Maximum

First negative in every window

Smallest subarray with sum > x

Subarray product < k

Longest subarray with sum divisible by K

Example:

let arr=[2,1,5,1,3,2]
let k=3

let sum=0

for(let i=0;i<k;i++){
 sum+=arr[i]
}

let max=sum

for(let i=k;i<arr.length;i++){

 sum=sum-arr[i-k]+arr[i]

 max=Math.max(max,sum)

}

console.log(max)

4️⃣ Prefix Sum Pattern

Problems:

Equilibrium Point

Largest subarray with 0 sum

Zero Sum Subarrays

Missing and Repeating

Range sum queries

Example:

let arr=[1,2,3,4]

let prefix=[arr[0]]

for(let i=1;i<arr.length;i++){
 prefix[i]=prefix[i-1]+arr[i]
}

console.log(prefix)


Output

[1,3,6,10]

5️⃣ Binary Search Pattern

Problems:

Binary Search

First and Last Occurrences

Peak Element

Find Kth Rotation

Transition Point

Ceil The Floor

Example:

let arr=[1,2,3,4,5]
let target=3

let left=0
let right=arr.length-1

while(left<=right){

 let mid=Math.floor((left+right)/2)

 if(arr[mid]==target){
  console.log(mid)
  break
 }

 if(arr[mid]<target){
   left=mid+1
 }else{
   right=mid-1
 }

}

6️⃣ Greedy Pattern

Problems:

Minimum Jumps

Stock Buy and Sell

Minimum Platforms

Max Circular Subarray Sum

Maximum Tip Calculator

Example:

let arr=[2,3,1,1,4]

let jumps=0
let far=0
let end=0

for(let i=0;i<arr.length-1;i++){

 far=Math.max(far,i+arr[i])

 if(i==end){
   jumps++
   end=far
 }

}

console.log(jumps)

7️⃣ Sorting + Advanced Array

Problems:

Count Inversions

Merge without extra space

Minimum swaps to sort

Nearly sorted array

Max value permutation

8️⃣ Hard Interview Problems

These are FAANG level.

Trapping Rain Water

Median of Two Sorted Arrays

Maximum Product Subarray

Next Permutation

Top K Frequent Elements

K closest elements

Example concept:

Trapping Rain Water
= prefix max + suffix max

⭐ Most Important 20 Problems (Do First)

If you want strong logic, solve these first:

Largest element

Second largest

Reverse array

Rotate array

Sort 0 1 2

Move zeros to end

Two sum

Kadane algorithm

Longest subarray with sum K

Binary search

Peak element

Kth smallest

Count inversions

Minimum jumps

Equilibrium point

Array leaders

Majority element

Largest subarray with 0 sum

Trapping rain water

Maximum product subarray

🚀 Best Order to Solve (Very Important)
Step 1
Basic arrays (10 problems)

Step 2
Two pointer (10 problems)

Step 3
Sliding window (10 problems)

Step 4
Binary search (10 problems)

Step 5
Greedy (10 problems)

Step 6
Advanced problems


Total

~60 problems


Enough for most coding interviews.

✅ Since you are already solving many problems like:

Kadane

Equilibrium

Wave array

Maximum index

Product array puzzle

You are already in the intermediate stage.