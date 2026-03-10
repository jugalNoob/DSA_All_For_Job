1️⃣ Boyer-Moore Majority Vote
function majorityElement(data) {
    let candidate = null;
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        if (count === 0) {
            candidate = data[i];
            count = 1;
        } else if (data[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
}

✅ Characteristics:

Time Complexity: O(n) → Single pass

Space Complexity: O(1) → Constant space

Logic: Only works correctly if a majority element exists (> n/2 times)

Why fast: No extra object or array needed

Example:

[2,2,1,1,1,2,2] → majority = 2
