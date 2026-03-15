
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