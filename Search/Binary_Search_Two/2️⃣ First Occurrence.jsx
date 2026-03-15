
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