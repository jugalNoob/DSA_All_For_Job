function subsets(nums) {

    let result = [];

    function backtrack(start, path) {
        result.push([...path]);

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }

    backtrack(0, []);
    return result;
}

console.log(subsets([1 , 2 , 3 , 4 , 5]))





Great — your code is already perfect 👍
Now I’ll explain it step-by-step using two functions clearly so you can visualize recursion + backtracking like an interviewer expects.

🔥 Two Functions View (VERY IMPORTANT)
1️⃣ Main Function
function subset(data){
    let result = []

    backtrack(0, [])   // call helper

    return result
}


👉 Responsibility:

Initialize result
Start recursion
2️⃣ Helper Function (Core Logic)
function backtrack(start, path){
    result.push([...path])

    for(let i = start; i < data.length; i++){
        path.push(data[i])
        backtrack(i+1, path)
        path.pop()
    }
}


👉 Responsibility:

Build subsets
Handle recursion
Do backtracking
🧠 Flow Understanding (Super Simple)

Think like:

subset() → starts process
backtrack() → does all work

🌳 Step-by-Step Dry Run (IMPORTANT)

Take small input:

subset([1,2,3])

🔹 STEP 1 → Main Function Call
subset([1,2,3])
→ result = []
→ call backtrack(0, [])

🔹 STEP 2 → backtrack(0, [])
path = []
result = [[]]


Loop starts from index 0

🔹 STEP 3 → Pick 1
path = [1]
call backtrack(1, [1])

🔹 STEP 4 → backtrack(1, [1])
result = [[], [1]]


Loop from index 1

🔹 STEP 5 → Pick 2
path = [1,2]
call backtrack(2, [1,2])

🔹 STEP 6 → backtrack(2, [1,2])
result = [[], [1], [1,2]]


Loop from index 2

🔹 STEP 7 → Pick 3
path = [1,2,3]
call backtrack(3, [1,2,3])

🔹 STEP 8 → backtrack(3, [1,2,3])
result = [[], [1], [1,2], [1,2,3]]


Loop ends → return

🔹 STEP 9 → Backtrack
path.pop()
path = [1,2]

🔹 STEP 10 → Backtrack again
path = [1]


Now try next element → 3

🔹 STEP 11 → Pick 3
path = [1,3]
result adds [1,3]

🔹 STEP 12 → Backtrack
path = [1]
→ []

🔹 STEP 13 → Pick 2
path = [2]

🔹 STEP 14 → Pick 3
path = [2,3]

🔹 STEP 15 → Pick 3 alone
path = [3]

🎯 Final Output
[
 [],
 [1], [1,2], [1,2,3], [1,3],
 [2], [2,3],
 [3]
]

⚡ SUPER IMPORTANT CONCEPTS
✅ 1. Why result.push([...path])

👉 Copy current subset
👉 Without ..., all values change (reference issue)

✅ 2. Why i + 1
backtrack(i+1, path)


👉 Move forward only
👉 Avoid duplicates
👉 Ensures combinations (not permutations)

✅ 3. Why path.pop()

👉 Undo last step
👉 Go back and try next option

🧠 Mental Model (Best Explanation)

Each recursion does:

1. Save current subset
2. Try adding new elements
3. Go deeper
4. Undo and try next

🌳 Tree Visualization
          []
       /   |   \
     [1]  [2]  [3]
    /  \     \
 [1,2] [1,3] [2,3]
   |
[1,2,3]

⏱️ Complexity
Time: O(2ⁿ)
Space: O(n)
🔥 Interview One-Liner

👉 “We use backtracking to explore all combinations by making a choice, exploring deeper, and then undoing that choice.”