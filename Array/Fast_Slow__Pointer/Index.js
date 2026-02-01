when to use Fast & slow in array ?

1: You want  o(n) time 
2: no extra space 
3: problem metions 

.middle
.cycle 
.duplicated 
.palindrome 
.sorted array 



let nums =[1 , 1, 2 , 2 ]

let slow=0

for(let fast=1; fast<nums.length; fast++){
    if(nums[fast] !== nums[slow]){
        slow++
        nums[slow]=nums[fast]
    }
}

console.log(nums.slice(0 , slow+1))


2::used Floyd Cycle Detection 

let nums =[ 2,3 , 1 , 2 , 3]

let slow=0
let fast=0

do{
    slow=nums[slow]
    fast=nums[nums[fast]]

}while (slow !== fast)

    console.log('cycle ')

3:: Find middle of an Array 

let arr=[10 , 20 ,30 , 40]

let slow=0
let fast =0

while(fast < arr.length && fast +1 < arr.length;){
    slow++
    fast+=2
}

console.log(arr[slow])


