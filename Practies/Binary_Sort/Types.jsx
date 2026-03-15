6️⃣ Binary Search Pattern

Used when array is sorted.

Problems:

Binary search

First occurrence

Last occurrence

Search insert position

Peak element

Square root

Kth smallest element


🔑 Binary Search Recognition Trick

Use Binary Search when you see:

sorted array
find position
minimum/maximum in sorted structure
search in range

🚀 Interview Trick

Binary search is not just for arrays.

It is also used for:

search space problems
minimum capacity
maximum possible value
optimization problems


Example

Aggressive cows
Book allocation
Minimum eating speed




The Binary Search pattern is used when the array is sorted (or the search space is ordered).
Main idea:

Divide the array into two halves repeatedly.


Time Complexity:

O(log n)

1️⃣ Binary Search

Find a target element in a sorted array.

Example

arr = [1,3,5,7,9]
target = 7


Code

function binarySearch(arr,target){

let left=0
let right=arr.length-1

while(left<=right){

let mid=Math.floor((left+right)/2)

if(arr[mid]===target){
return mid
}

if(arr[mid] < target){
left=mid+1
}else{
right=mid-1
}

}

return -1
}

console.log(binarySearch([1,3,5,7,9],7))


Output

3

2️⃣ First Occurrence

Find the first position of a number.

Example

[1,2,2,2,3,4]
target = 2


Answer

index = 1


Code

function firstOccurrence(arr,target){

let left=0
let right=arr.length-1
let result=-1

while(left<=right){

let mid=Math.floor((left+right)/2)

if(arr[mid]===target){
result=mid
right=mid-1
}
else if(arr[mid] < target){
left=mid+1
}
else{
right=mid-1
}

}

return result
}

console.log(firstOccurrence([1,2,2,2,3,4],2))

3️⃣ Last Occurrence

Find the last index of target.

Example

[1,2,2,2,3,4]
target = 2


Answer

index = 3


Code

function lastOccurrence(arr,target){

let left=0
let right=arr.length-1
let result=-1

while(left<=right){

let mid=Math.floor((left+right)/2)

if(arr[mid]===target){
result=mid
left=mid+1
}
else if(arr[mid] < target){
left=mid+1
}
else{
right=mid-1
}

}

return result
}

console.log(lastOccurrence([1,2,2,2,3,4],2))

4️⃣ Search Insert Position

Find the index where element should be inserted.

Example

arr = [1,3,5,6]
target = 2


Insert position

1


Code

function searchInsert(arr,target){

let left=0
let right=arr.length-1

while(left<=right){

let mid=Math.floor((left+right)/2)

if(arr[mid]===target){
return mid
}

if(arr[mid] < target){
left=mid+1
}else{
right=mid-1
}

}

return left
}

console.log(searchInsert([1,3,5,6],2))

5️⃣ Peak Element

Peak element means:

arr[i] > arr[i-1] and arr[i] > arr[i+1]


Example

[1,3,20,4,1,0]


Peak

20


Code

function peakElement(arr){

let left=0
let right=arr.length-1

while(left<right){

let mid=Math.floor((left+right)/2)

if(arr[mid] < arr[mid+1]){
left=mid+1
}else{
right=mid
}

}

return arr[left]
}

console.log(peakElement([1,3,20,4,1,0]))

6️⃣ Square Root (Binary Search)

Find floor value of √n.

Example

n = 16


Answer

4


Code

function sqrt(n){

let left=1
let right=n
let ans=0

while(left<=right){

let mid=Math.floor((left+right)/2)

if(mid*mid <= n){
ans=mid
left=mid+1
}else{
right=mid-1
}

}

return ans
}

console.log(sqrt(16))

7️⃣ Kth Smallest Element

Example

[7,10,4,3,20,15]
k=3


Sorted

[3,4,7,10,15,20]


Answer

7


Code

function kthSmallest(arr,k){

arr.sort((a,b)=>a-b)

return arr[k-1]

}

console.log(kthSmallest([7,10,4,3,20,15],3))

🔑 Binary Search Recognition Trick

Use Binary Search when you see:

sorted array
find position
minimum/maximum in sorted structure
search in range

🚀 Interview Trick

Binary search is not just for arrays.

It is also used for:

search space problems
minimum capacity
maximum possible value
optimization problems


Example

Aggressive cows
Book allocation
Minimum eating speed
