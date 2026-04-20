🧠 3. Combination Sum (Target Based)
Idea:

👉 Pick numbers until target = 0

✅ Code
function combinationSum(nums, target) {

    let result = [];

    function backtrack(start, path, sum) {

        if (sum === target) {
            result.push([...path]);
            return;
        }

        if (sum > target) return;

        for (let i = start; i < nums.length; i++) {

            path.push(nums[i]);

            backtrack(i, path, sum + nums[i]); // reuse allowed

            path.pop();
        }
    }

    backtrack(0, [], 0);
    return result;
}

🔑 Pattern
Can reuse same element → i (not i+1)
Prune when sum > target