function maxSumSubarray(data, size) {
    let max = -Infinity;
    console.log(max)
    for (let i = 0; i <= data.length - size; i++) {
        let current = 0;
        // Sum elements of current subarray
        for (let j = i; j < i + size; j++) {
            current += data[j];
        }
        max = Math.max(current, max);
    }
    return max;
}

// Example
let arr = [1, 2, 3, 4, 5];
console.log(maxSumSubarray(arr, 3)); // Output: 12 ([3,4,5] is max sum)


🧠 Key Idea

Outer loop → decides the window start

Inner loop → calculates sum of that window

Then compare with max



🔍 Step-by-Step Execution
👉 Iteration 1 (i = 0)

Window: [1, 2, 3]

current = 0
j = 0 → current = 1
j = 1 → current = 1 + 2 = 3
j = 2 → current = 3 + 3 = 6


👉 max = max(-∞, 6) = 6



👉 Iteration 2 (i = 1)

Window: [2, 3, 4]

current = 0
j = 1 → current = 2
j = 2 → current = 2 + 3 = 5
j = 3 → current = 5 + 4 = 9


👉 max = max(6, 9) = 9



👉 Iteration 3 (i = 2)

Window: [3, 4, 5]

current = 0
j = 2 → current = 3
j = 3 → current = 3 + 4 = 7
j = 4 → current = 7 + 5 = 12


👉 max = max(9, 12) = 12


✅ Final Answer
return 12

📊 Summary Table


| i | Window  | Sum | Max |
| - | ------- | --- | --- |
| 0 | [1,2,3] | 6   | 6   |
| 1 | [2,3,4] | 9   | 9   |
| 2 | [3,4,5] | 12  | 12  |


⚠️ Problem with Your Code

Time Complexity:

O(n * k)


n = array length

k = window size

👉 Slow for large data