function majorityElement(nums) {
    let candidate = null;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
}

// Example usage
const nums = [2,2,1,1,1,2,2];
console.log(majorityElement(nums)); // Output: 2


4️⃣ Complexity Analysis

Time: O(n) → Single pass through the array

Space: O(1) → Only two variables (candidate, count)

💡 Key Intuition:

Think of it as “cancelling out” different numbers.

Only the number that occurs more than half the time
 will survive the cancellations.