1️⃣ Basic Prefix Sum
📌 Idea

Instead of calculating sum again and again:

[2, 4, 6, 8]


We build:

Prefix Sum = [2, 6, 12, 20]


Each index stores:

prefix[i] = sum from 0 → i

✅ Code (Basic)
function buildPrefixSum(arr) {
    const prefix = [];
    prefix[0] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }

    return prefix;
}

console.log(buildPrefixSum([2,4,6,8])); 
// [2, 6, 12, 20]

🔎 Dry Run

Array:

[2,4,6,8]


Step-by-step:

prefix[0] = 2
prefix[1] = 2+4 = 6
prefix[2] = 6+6 = 12
prefix[3] = 12+8 = 20

⏱ Complexity

Time: O(n)
Space: O(n)

🎯 Why Useful?

To find range sum quickly:

Sum(L → R) = prefix[R] - prefix[L-1]


Instead of O(n) per query → becomes O(1)