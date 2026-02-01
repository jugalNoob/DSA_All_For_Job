6️⃣ Palindrome check (array)
let arr = [1,2,3,2,1]
let slow = 0
let fast = 0

while (fast < arr.length && fast + 1 < arr.length) {
    slow++
    fast += 2
}

// slow is middle index
console.log("middle =", arr[slow])


(Then reverse & compare if needed)