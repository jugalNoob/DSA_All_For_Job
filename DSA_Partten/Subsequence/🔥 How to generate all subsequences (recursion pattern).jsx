🔥 How to generate all subsequences (recursion pattern)




Perfect 🔥
This is a very important recursion pattern for interviews.

Let’s understand how to generate all subsequences using recursion step by step.

🧠 Core Idea (Very Important)

For every element, you have 2 choices:

1️⃣ Include it
2️⃣ Exclude it


That’s it.

Because of this:

Total subsequences = 2^n

🔥 Example
arr = [1, 2, 3]


We will decide for each element:

Take it OR Skip it

🌳 Recursion Tree Thinking

For [1,2,3]:

                     []
                 /           \
            take 1           skip 1
           /        \        /       \
      take2     skip2   take2    skip2
      /   \       /  \    /  \      /  \
    3     _     3    _   3    _     3    _


Every level = decision for one element.

🔥 Recursion Pattern (Template)

This is the most important part 👇

function generateSubsequence(arr, index = 0, current = []) {

    // Base case
    if (index === arr.length) {
        console.log(current);
        return;
    }

    // 1️⃣ Include current element
    current.push(arr[index]);
    generateSubsequence(arr, index + 1, current);

    // Backtrack
    current.pop();

    // 2️⃣ Exclude current element
    generateSubsequence(arr, index + 1, current);
}

generateSubsequence([1,2,3]);

🔍 Step-by-Step Execution

For [1,2,3] it prints:

[1,2,3]
[1,2]
[1,3]
[1]
[2,3]
[2]
[3]
[]


Order may vary, but total = 8 (2³).

🧠 Why Backtracking?

After including an element:

current.push(arr[index])


We must remove it before exploring exclude branch:

current.pop()


Otherwise it will affect other recursive calls.

⚡ Time & Space Complexity
Time: O(2^n)
Space: O(n) recursion stack


Because:

Each element has 2 choices

Total combinations = 2^n

🔥 Important Interview Pattern

Most subsequence problems follow this template:

include → recurse
exclude → recurse


If question asks:

print all subsequences

count subsequences

subsequence sum

subset generation

combination generation

👉 This pattern works.

🎯 Cleaner Version (More Interview Friendly)
function solve(arr, index, output) {
    if (index >= arr.length) {
        console.log(output);
        return;
    }

    // Exclude
    solve(arr, index + 1, output);

    // Include
    solve(arr, index + 1, [...output, arr[index]]);
}

solve([1,2,3], 0, []);

🧠 Mental Model To Remember

For each element:

Binary decision → 0 or 1


Like:

1 = take
0 = skip


For [1,2,3]:

000 → []
001 → [3]
010 → [2]
011 → [2,3]
100 → [1]
101 → [1,3]
110 → [1,2]
111 → [1,2,3]


This is why total = 2^n.

🚀 Final Summary

Subsequence generation =

Choice at every index:
    include OR exclude


Recursion template:

Base case
Include branch
Exclude branch
Backtrack
