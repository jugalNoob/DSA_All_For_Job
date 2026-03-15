
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