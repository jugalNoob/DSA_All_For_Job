
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