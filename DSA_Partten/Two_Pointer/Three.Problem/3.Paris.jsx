Two-Pointer Recap

You have left and right pointers.

Move left++ if sum < target.

Move right-- if sum > target.

Stops when left >= right.

Three-Pointer Technique (Triplet Sum)

Idea:

Fix one element using a loop (i).

Use two pointers (left = i+1, right = end) to find the remaining two elements.

This reduces brute-force O(n³) → O(n²).

JavaScript Example:

function threeSum(nums, target) {
  nums.sort((a, b) => a - b); // Must be sorted
  console.log("📥 Input array:", nums);
  console.log("🎯 Target sum:", target);

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    console.log(`\n🔁 Fixing nums[${i}] = ${nums[i]}`);

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      console.log(`🔎 Trying: ${nums[i]} + ${nums[left]} + ${nums[right]} = ${sum}`);

      if (sum === target) {
        console.log(`✅ Found triplet: [${nums[i]}, ${nums[left]}, ${nums[right]}]`);
        return [nums[i], nums[left], nums[right]];
      } else if (sum < target) {
        console.log(`📉 Sum < target. Moving left: ${left} → ${left + 1}`);
        left++;
      } else {
        console.log(`📈 Sum > target. Moving right: ${right} → ${right - 1}`);
        right--;
      }
    }
  }

  console.log("❌ No triplet found that adds up to the target.");
  return null;
}

// ✅ Example usage
const nums = [-1, 0, 1, 2, -1, -4];
const target = 0;
console.log("\n🔚 Result:", threeSum(nums, target));

How it Works

Sort the array.

Fix the first element nums[i].

Use two pointers (left and right) on the remaining array to find the other two numbers.



function threeSum(data, target) {
    data.sort((a, b) => a - b);
console.log(data)
    for (let i = 0; i < data.length - 2; i++) {

        let start = i + 1;

        let end = data.length - 1;

        while (start < end) {
            let sum = data[i] + data[start] + data[end];

            if (sum === target) {
                return [data[i], data[start], data[end]];
            } else if (sum < target) {
                start++;   // ✅ increase sum
            } else {
                end--;     // ✅ decrease sum
            }
        }
    }

    return null;
}

console.log(threeSum([-1,0,1,2,-1,-4], 2));




2. Walkthrough with your example
Input:
data = [-1, 0, 1, 2, -1, -4]
target = 2
Step 1: Sorting
JavaScriptdata.sort((a, b) => a - b);
Sorted array becomes:
[-4, -1, -1, 0, 1, 2]
(Indices: 0:-4, 1:-1, 2:-1, 3:0, 4:1, 5:2)
Now the outer loop runs: for (let i = 0; i < data.length-2; i++) → i goes from 0 to 3.

Step 2: i = 0 (fixed number = -4)
JavaScriptstart = 1, end = 5

sum = -4 + (-1) + 2 = -3 < 2 → start++ → start=2
sum = -4 + (-1) + 2 = -3 < 2 → start++ → start=3
sum = -4 + 0 + 2 = -2 < 2 → start++ → start=4
sum = -4 + 1 + 2 = -1 < 2 → start++ → start=5

start == end, inner while loop ends.
No triplet found for i=0.

Step 3: i = 1 (fixed number = -1)
JavaScriptstart = 2, end = 5

sum = -1 + (-1) + 2 = 0 < 2 → start++ → start=3
sum = -1 + 0 + 2 = 1 < 2 → start++ → start=4
sum = -1 + 1 + 2 = 2 == target ✓

Found!
Return [data[1], data[4], data[5]] → [-1, 1, 2]
The function stops here and never checks i=2 or i=3.

3. What the console.log prints
JavaScriptconsole.log(threeSum([-1,0,1,2,-1,-4], 2));
Output:
[-1, 1, 2]
4. Why this works perfectly
