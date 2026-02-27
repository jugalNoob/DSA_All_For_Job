1️⃣ Two-Pointer Technique Explained

You maintain two indices (pointers) to traverse an array or two arrays simultaneously.

Works best when the array is sorted or you need to scan from both ends.

Typical goal: reduce time complexity from O(n²) to O(n) in some problems.

2️⃣ Common Use Cases in Subsequence / Array Problems
(A) Check if array A is a subsequence of array B
function isSubsequence(A, B) {
    let i = 0; // pointer for A
    let j = 0; // pointer for B

    while(i < A.length && j < B.length){
        if(A[i] === B[j]){
            i++; // match found, move pointer in A
        }
        j++; // always move pointer in B
    }
    return i === A.length; // all elements of A found in B
}

const A = [2,1];
const B = [9,2,1];
console.log(isSubsequence(A,B)); // true


✅ Use case: “Check if one sequence exists inside another”

Complexity: O(n + m)

No recursion, no DP, just two pointers