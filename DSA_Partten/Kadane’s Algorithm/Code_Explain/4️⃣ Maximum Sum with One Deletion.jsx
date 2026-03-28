Ah! Now we’re on Maximum Sum Subarray with One Deletion — another tricky
 Kadane-style variation. This is a favorite interview twist because it tests
  understanding of Kadane and how to handle “exceptions” (deletion)
  . Let’s break it down step by step.

Problem

Given an array, find the maximum sum subarray 
where you can delete at most one element.

Deletion is optional — you may or may not 
delete an element.

Example: [1, -2, 0, 3]

Maximum sum = 4 → delete -2, subarray [1,0,3].

Observation / Idea

We need to track two states at each index:

maxEndHereNoDel → max subarray sum ending
 at i without deletion

maxEndHereOneDel → max subarray sum ending at
 i with one deletion allowed

Transition formulas:

maxEndHereNoDel = Math.max(arr[i], maxEndHereNoDel + arr[i])

→ Standard Kadane update.

maxEndHereOneDel = Math.max(maxEndHereNoDelPrev, maxEndHereOneDel + arr[i])
→ Either delete current element (maxEndHereNoDelPrev) 
or extend previous subarray that already used deletion (maxEndHereOneDel + arr[i]).

Keep track of maxSoFar = Math.max(maxSoFar, maxEndHereNoDel, maxEndHereOneDel)


maxonedel = max(maxnodel, maxonedel + (-2))
           = max(1, -2)
           = 1



           Original:   [1,  -2,  0,  3]

Delete -2 → [1,   X,  0,  3]
                      ↓
                 continue sum



function maxsumoneDelete(data){
    let n = data.length 
    if(n === 0) return 0

    let maxnodel = data[0]
    let maxonedel = 0
    let maxso = data[0]

    for(let i=1; i<n; i++){
        maxonedel = Math.max(maxnodel, maxonedel + data[i])
        maxnodel = Math.max(data[i], data[i] + maxnodel)
        maxso = Math.max(maxso, maxnodel, maxonedel)
    }
    return maxso
}

console.log(maxsumoneDelete([1, -2, 0, 3]))



maxnodel = 1
maxonedel = 0
maxso = 1



👉 i = 1 (value = -2)
maxonedel = max(1, 0 + (-2)) = 1   ✅ delete -2
maxnodel = max(-2, 1 + (-2)) = -1
maxso = max(1, -1, 1) = 1

👉 i = 2 (value = 0)
maxonedel = max(-1, 1 + 0) = 1
maxnodel = max(0, -1 + 0) = 0
maxso = max(1, 0, 1) = 1

👉 i = 3 (value = 3)
maxonedel = max(0, 1 + 3) = 4
maxnodel = max(3, 0 + 3) = 3
maxso = max(1, 3, 4) = 4

🎯 Final Answer
4

💡 Intuition (Super Easy)

Think like this:

maxnodel → "normal subarray"
maxonedel → "I already deleted one bad element somewhere"

👉 At -2, we delete it → that’s why result improves.

Final best subarray:

[1, 0, 3]  → sum = 4

🧠 Interview Tip

If interviewer asks:

“Why 2 variables?”

Answer:

One tracks no deletion
One tracks one deletion
This avoids O(n²) brute force → gives O(n)