function reverse(arr, start, end){
    while(start < end){
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
}

function rotateArray(arr, k){

  
    let n = arr.length
    console.log(n)
    k = k % n
    console.log(5%3 , 'answer 2')

    reverse(arr, 0, k-1)
    reverse(arr, k, n-1)
    reverse(arr, 0, n-1)

    return arr
}

console.log(rotateArray([1,2,3,4,5],3))



Let's explain the second function part step-by-step. Your code rotates the array using the Array Rotation Using Reversal Algorithm.

We will trace this example:

arr = [1,2,3,4,5]
k = 3

1️⃣ Step: Get Array Length
let n = arr.length


Result:

n = 5


So the array has 5 elements.

2️⃣ Step: Reduce k if it is larger than n
k = k % n


Example:

k = 3
n = 5

3 % 5 = 3


So rotation stays 3.

If it was:

k = 8


Then

8 % 5 = 3


So we rotate only 3 times.

3️⃣ Step: Reverse first part
reverse(arr, 0, k-1)


Here:

reverse(arr,0,2)


Array before:

[1,2,3,4,5]


Reverse 1 2 3

Result:

[3,2,1,4,5]

4️⃣ Step: Reverse second part
reverse(arr, k, n-1)


This becomes

reverse(arr,3,4)


Reverse 4 5

Before

[3,2,1,4,5]


After

[3,2,1,5,4]

5️⃣ Step: Reverse the whole array
reverse(arr,0,n-1)


Reverse entire array.

Before

[3,2,1,5,4]


After

[4,5,1,2,3]

6️⃣ Final Result
[4,5,1,2,3]


This means the array is rotated left by 3.

7️⃣ Visual Trick (Easy Way)

Split array into two parts:

[1,2,3 | 4,5]
   A       B


Goal:

[4,5 | 1,2,3]
   B       A


Reversal trick converts:

A B  →  B A

8️⃣ Time Complexity
O(n)


Space

O(1)


So this is the optimal solution.