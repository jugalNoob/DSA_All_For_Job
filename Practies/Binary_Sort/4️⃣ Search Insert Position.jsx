
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
