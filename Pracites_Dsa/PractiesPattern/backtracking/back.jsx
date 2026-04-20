🧠 4. Backtracking (Combination / Permutation)

👉 Use when:

“generate all”
combinations
subsets
Keywords:
all possible
combinations
permutations
Template:
function backtrack(path, index) {
    if (base case) {
        result.push(path);
        return;
    }

    for (let choice of options) {
        backtrack(path + choice, index + 1);
    }
}

🔥 Problems:
Letter combinations (you just did)
Generate parentheses
Permutations