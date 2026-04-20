🔥 Idea Behind Iterative Approach

Instead of recursion, we:

Start with [[]] (empty subset)
For each number:
Take all existing subsets
Add the new number to each
Append new subsets to result
✅ Code (Iterative)
function subsetIterative(data){
    let result = [[]];   // start with empty subset

    for(let num of data){
        let newSubsets = [];

        for(let subset of result){
            newSubsets.push([...subset, num]); // add current number
        }

        result.push(...newSubsets); // merge
    }

    return result;
}

console.log(subsetIterative([1,2,3]));

🧠 Step-by-Step Dry Run
Start:
result = [[]]

🔹 Add 1

Take existing subsets → [[]]

Add 1:

[1]


Merge:

result = [[], [1]]

🔹 Add 2

Existing:

[[], [1]]


Add 2:

[2], [1,2]


Merge:

result = [[], [1], [2], [1,2]]

🔹 Add 3

Existing:

[[], [1], [2], [1,2]]


Add 3:

[3], [1,3], [2,3], [1,2,3]


Merge:

result = [
 [],
 [1], [2], [1,2],
 [3], [1,3], [2,3], [1,2,3]
]

🎯 Final Output
[
 [],
 [1], [2], [1,2],
 [3], [1,3], [2,3], [1,2,3]
]

⚡ Key Insight

👉 Every new number doubles the subsets

n elements → 2ⁿ subsets

🆚 Recursive vs Iterative
Feature	Recursive (Backtracking)	Iterative
Easy to think	✅ Yes	❌ Medium
Stack usage	Uses recursion stack	No stack
Speed	Same	Same
Interview	⭐ Most common	⭐ Bonus
🧠 Mental Model
Start:     [[]]

Add 1 →    duplicate + add 1
Add 2 →    duplicate + add 2
Add 3 →    duplicate + add 3

🔥 Interview One-Liner

👉 “Iteratively, we build subsets by expanding existing subsets with each new element.”