🚀 2. Optimal Approach (MOST IMPORTANT)

👉 Uses Array Reversal Algorithm

Right Rotation Logic

Steps:

Reverse whole array
Reverse first k elements
Reverse remaining
✅ Code
function reverse(arr, start, end){
    while(start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
}

function rotateRight(arr, k){
    let n = arr.length
    k = k % n

    reverse(arr, 0, n-1)
    reverse(arr, 0, k-1)
    reverse(arr, k, n-1)

    return arr
}

console.log(rotateRight([1,2,3,4,5], 2))
// [4,5,1,2,3]




🧠 Core Idea

Using
👉 Array Reversal Algorithm

Steps:

Reverse whole array
Reverse first k elements
Reverse remaining
🔁 STEP 1: Reverse Full Array
Original:
[ 1   2   3   4   5 ]

Reverse whole:
[ 5   4   3   2   1 ]


👉 Last elements moved to front (but order wrong)

🔁 STEP 2: Reverse First k Elements (k = 2)

We reverse index 0 → k-1

Before:
[ 5   4 | 3   2   1 ]
  ↑   ↑


Reverse first 2:

After:
[ 4   5 | 3   2   1 ]


👉 Now first part is correct

🔁 STEP 3: Reverse Remaining Elements

Reverse index k → n-1 → 2 → 4

Before:
[ 4   5 | 3   2   1 ]
            ↑     ↑


Reverse last part:

After:
[ 4   5 | 1   2   3 ]

✅ FINAL ANSWER
[4, 5, 1, 2, 3]

🎯 Visual Summary (Super Important)
Step 1: Full reverse
[1,2,3,4,5] → [5,4,3,2,1]

Step 2: Reverse first k
[5,4,3,2,1] → [4,5,3,2,1]

Step 3: Reverse rest
[4,5,3,2,1] → [4,5,1,2,3]

💡 Why This Works

👉 Think like this:

Last k elements should come in front
Reversal helps reposition them efficiently
🔥 Interview Memory Trick

👉 Remember this line:

“Reverse all → reverse first k → reverse rest”

🚀 Bonus: Pointer View (Advanced)

Step 1 swap:

1 ↔ 5
2 ↔ 4


Step 2 swap:

5 ↔ 4


Step 3 swap:

3 ↔ 1
