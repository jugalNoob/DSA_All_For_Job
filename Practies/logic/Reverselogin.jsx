1️⃣ Pairwise Swap (Your Problem)

Swap every two elements.

let arr = [10,20,30,40,50]

for(let i=0;i<arr.length-1;i+=2){
    [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
}

console.log(arr)


Output

[20,10,40,30,50]


Logic
➡ Move index by 2 and swap.

2️⃣ Reverse Array (Two Pointer Trick)
let arr=[1,2,3,4,5]

let left=0
let right=arr.length-1

while(left<right){
    [arr[left],arr[right]]=[arr[right],arr[left]]
    left++
    right--
}

console.log(arr)


Output

[5,4,3,2,1]


Logic
➡ Start + End pointer swap

3️⃣ Find Largest Number
let arr=[3,7,2,9,5]

let max=arr[0]

for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}

console.log(max)


Output

9


Logic
➡ Compare with current max

4️⃣ Find Second Largest
let arr=[10,20,5,30,25]

let first=-Infinity
let second=-Infinity

for(let num of arr){
    if(num>first){
        second=first
        first=num
    }
    else if(num>second && num!=first){
        second=num
    }
}

console.log(second)


Output

25


Logic
➡ Maintain two variables

5️⃣ Remove Duplicates
let arr=[1,2,2,3,3,4]

let unique=[...new Set(arr)]

console.log(unique)


Output

[1,2,3,4]


Logic
➡ Set removes duplicates

6️⃣ Rotate Array Right
let arr=[1,2,3,4,5]

let last=arr.pop()
arr.unshift(last)

console.log(arr)


Output

[5,1,2,3,4]


Logic
➡ Remove last → add to start

7️⃣ Sum of Array
let arr=[1,2,3,4]

let sum=0

for(let num of arr){
    sum+=num
}

console.log(sum)


Output

10


Logic
➡ Accumulate values

8️⃣ Find Missing Number

Example

[1,2,3,5]

let arr=[1,2,3,5]

let n=5

let total=n*(n+1)/2

let sum=arr.reduce((a,b)=>a+b,0)

console.log(total-sum)


Output

4


Logic
➡ Math formula

9️⃣ Count Frequency
let arr=[1,2,2,3,3,3]

let freq={}

for(let num of arr){
    freq[num]=(freq[num]||0)+1
}

console.log(freq)


Output

{1:1,2:2,3:3}


Logic
➡ Hashmap counting

🔟 Move Zeros to End
let arr=[0,1,0,3,12]

let result=arr.filter(x=>x!==0)

while(result.length<arr.length){
    result.push(0)
}

console.log(result)


Output

[1,3,12,0,0]


Logic
➡ Remove zeros → append later

🧠 The 5 Most Important Logic Patterns

In interviews most array problems use:

1️⃣ Two Pointer
2️⃣ Sliding Window
3️⃣ Hash Map
4️⃣ Sorting + Comparison
5️⃣ Mathematical formula

✅ Since you are preparing for Node.js +