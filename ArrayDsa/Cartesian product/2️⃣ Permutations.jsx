2️⃣ Permutations
📌 Definition

Rearrangements of elements
Order matters

Example:

[1,2,3]


Permutations:

[1,2,3]
[1,3,2]
[2,1,3]
[2,3,1]
[3,1,2]
[3,2,1]

🔢 Formula

For n elements:

n!


For selecting r elements:

nPr = n! / (n - r)!

✅ Code (Backtracking)
function permutations(nums) {
    const result = [];

    function backtrack(path, remaining) {
        if (remaining.length === 0) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            backtrack(
                [...path, remaining[i]],
                remaining.slice(0, i).concat(remaining.slice(i + 1))
            );
        }
    }

    backtrack([], nums);
    return result;
}

console.log(permutations([1,2,3]));

⏱ Complexity

Time: O(n!)
Space: O(n!)

Explodes very fast.

🎯 When Used?

Password generation

Traveling salesman

Scheduling problems

Game state generation