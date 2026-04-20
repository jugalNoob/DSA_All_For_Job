


// ---------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function solve(input) {

    let result = [];

    function backtrack(start, path) {

        // base case
        if (/* condition */) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < input.length; i++) {

            // skip invalid
            if (/* condition */) continue;

            // choose
            path.push(input[i]);

            // explore
            backtrack(i + 1, path);

            // undo
            path.pop();
        }
    }

    backtrack(0, []);
    return result;
}


/// ----------------------------------->>> 


function backtrack(state) {

    // ✅ 1. Base Case (solution found)
    if (condition) {
        result.push(copy of state);
        return;
    }

    // 🔁 2. Try all choices
    for (let choice of choices) {

        // ❌ 3. Skip invalid choices
        if (invalid(choice)) continue;

        // 👉 4. Make choice
        makeChoice(choice);

        // 🔽 5. Go deeper
        backtrack(updatedState);

        // 🔙 6. Undo choice (BACKTRACK)
        undoChoice(choice);
    }
}




/////////////////////// ---------------------------->>

🔥 MASTER PATTERN (Very Important)
function backtrack(...) {

    if (base case) {
        save result;
        return;
    }

    for (choices) {

        if (invalid) continue;

        make choice;

        backtrack(next);

        undo choice; // 🔥 MUST
    }
}