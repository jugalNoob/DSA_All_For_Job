The Product Array Puzzle means:

For each index, return the product of all elements of the array except the element at that index.

Important rule (in most interviews):

Do not use division

Example

Array

[10, 3, 5, 6, 2]


Output

[180, 600, 360, 300, 900]

How it works
Index	Value	Product of others
0	10	3×5×6×2 = 180
1	3	10×5×6×2 = 600
2	5	10×3×6×2 = 360
3	6	10×3×5×2 = 300
4	2	10×3×5×6 = 900
Method 1️⃣ Brute Force

Time Complexity

O(n²)

Code
let arr = [10,3,5,6,2]

let result=[]

for(let i=0;i<arr.length;i++){

let product=1

for(let j=0;j<arr.length;j++){

if(i!==j){
product*=arr[j]
}

}

result.push(product)

}

console.log(result)


Output

[180,600,360,300,900]

Method 2️⃣ Efficient (Prefix + Suffix) ⭐

Time Complexity

O(n)

Idea

Calculate left products

Calculate right products

Multiply them

Code
let arr=[10,3,5,6,2]

let n=arr.length

let left=[]
let right=[]
let result=[]

left[0]=1
for(let i=1;i<n;i++){
left[i]=left[i-1]*arr[i-1]
}

right[n-1]=1
for(let i=n-2;i>=0;i--){
right[i]=right[i+1]*arr[i+1]
}

for(let i=0;i<n;i++){
result[i]=left[i]*right[i]
}

console.log(result)

Visualization

Array

[10,3,5,6,2]


Left products

[1,10,30,150,900]


Right products

[180,60,12,2,1]


Multiply

[180,600,360,300,900]

Time Complexity
O(n)


Space

O(n)

Interview Insight

This problem teaches Prefix + Suffix pattern, which is also used in:

Trapping Rain Water

Equilibrium Index

Maximum Product Subarray

Range Product Queries