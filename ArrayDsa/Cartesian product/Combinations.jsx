3️⃣ Combinations
📌 Definition

Selection of elements
Order does NOT matter

Example:

[1,2,3]
Choose 2


Combinations:

[1,2]
[1,3]
[2,3]


Notice:
[1,2] and [2,1] are SAME → not counted twice.

🔢 Formula

Choose r from n:

nCr = n! / (r! (n - r)!)

✅ Code (Backtracking)
function combinations(nums, k) {
    const result = [];

    function backtrack(start, path) {
        if (path.length === k) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }

    backtrack(0, []);
    return result;
}

console.log(combinations([1,2,3], 2));

⏱ Complexity

Time: O(nCr)
Space: O(nCr)