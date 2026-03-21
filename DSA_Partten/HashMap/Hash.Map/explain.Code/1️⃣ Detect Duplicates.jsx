1️⃣ Detect Duplicates

Problem: Given an array, check if it contains any duplicates.

Example:

arr = [1, 2, 3, 1] → true
arr = [1, 2, 3, 4] → false


Approach using HashMap:

function hasDuplicates(arr) {
    const map = {};
    for (let num of arr) {
        if (map[num]) return true;
        map[num] = true;
    }
    return false;
}
console.log(hasDuplicates([1,2,3,1])); // true


Time Complexity: O(n)

Space Complexity: O(n)