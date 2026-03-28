✅ Code (Kadane + Subarray)
function kadaneWithSubarray(arr) {

    let maxSoFar = arr[0];
    let maxEnding = arr[0];

    let start = 0;
    let end = 0;
    let s = 0;

    for (let i = 1; i < arr.length; i++) {

        // Decide: start new OR extend
        if (arr[i] > maxEnding + arr[i]) {
            maxEnding = arr[i];
            s = i; // new start
        } else {
            maxEnding = maxEnding + arr[i];
        }

        // Update global max
        if (maxEnding > maxSoFar) {
            maxSoFar = maxEnding;
            start = s;
            end = i;
        }
    }

    return {
        maxSum: maxSoFar,
        subarray: arr.slice(start, end + 1)
    };
}

🔥 Example
console.log(kadaneWithSubarray([-2,1,-3,4,-1,2,1,-5,4]));

✅ Output
{
  maxSum: 6,
  subarray: [4, -1, 2, 1]
}

📊 Step-by-Step Intuition
[-2, 1, -3, 4, -1, 2, 1, -5, 4]
             ↑ best starts here

Why?
Negative prefix is dropped ❌
New subarray starts at 4 ✅
Then grows → [4, -1, 2, 1] = 6
🔥 Important Trick (INTERVIEW GOLD)
if (arr[i] > maxEnding + arr[i])


👉 Means:

If previous sum is hurting → reset
Else → continue
⚡ Edge Case

All negative:

[-5, -2, -8]


Output:

maxSum = -2
subarray = [-2]

🧠 Complexity
Time → O(n)
Space → O(1)