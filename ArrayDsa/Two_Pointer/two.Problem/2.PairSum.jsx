
function twoSum(nums, target) {
  console.log("📥 Input array:", nums);
  console.log("🎯 Target sum:", target);

  let left = 0;
  let right = nums.length - 1;

  console.log("\n🔁 Starting Two-Pointer Search...\n");

  while (left < right) {
    const sum = nums[left] + nums[right];
    console.log(`🔎 Trying: nums[${left}] = ${nums[left]} + nums[${right}] = ${nums[right]} → sum = ${sum}`);

    if (sum === target) {
      console.log(`✅ Found! Indices: [${left}, ${right}] → Values: [${nums[left]}, ${nums[right]}]`);
      return [left, right];
    } else if (sum < target) {
      console.log(`📉 Sum < target. Moving left pointer: ${left} → ${left + 1}`);
      left++;
    } else {
      console.log(`📈 Sum > target. Moving right pointer: ${right} → ${right - 1}`);
      right--;
    }
  }

  console.log("❌ No pair found that adds up to the target.");
  return null;
}

// ✅ Example usage
const nums = [2, 7, 11, 15]; // Must be sorted
const target = 9;
console.log("\n🔚 Result:", twoSum(nums, target));



2:::Two pointer

function TwoPoin(data, target) {
    let start = 0
    let end = data.length - 1

    while (start < end) {
        const sum = data[start] + data[end]
        console.log(sum)

        if (sum === target) {
            return [data[start], data[end]]
        } 
        else if (sum > target) {
            end--        // ✅ FIXED
        } 
        else {
            start++      // ✅ FIXED
        }
    }
    return null
}

let data = [1, 2, 3, 4]
let target = 5

console.log(TwoPoin(data, target))


// 6️⃣ Visual Pointer Movement (Easy Memory Trick)
// [ 1, 2, 3, 4 ]
//   ↑           ↑
//  start       end


// Sum too big? → move end left

// Sum too small? → move start right



Perfect! Let’s go step by step and see how your TwoPointer
 function works for the input:

data = [1, 2, 3, 4, 6, 8, 9]
target = 10



Step 0 — Initialization
start = 0  // points to 1
end = 6    // points to 9


Step 1
sum = data[start] + data[end] = 1 + 9 = 10


sum === target ✅ → return [data[start], data[end]] = [1, 9]

Function ends here because pair found.

Console Output
6      // end pointer index
10     // sum of start and end
[1, 9] // final result



⚡ If we had no immediate pair:

Let’s assume target = 14 (example):

Step by step loop:



| start | end | data[start] | data[end] | sum | action                     |
| ----- | --- | ----------- | --------- | --- | -------------------------- |
| 0     | 6   | 1           | 9         | 10  | sum < 14 → start++         |
| 1     | 6   | 2           | 9         | 11  | sum < 14 → start++         |
| 2     | 6   | 3           | 9         | 12  | sum < 14 → start++         |
| 3     | 6   | 4           | 9         | 13  | sum < 14 → start++         |
| 4     | 6   | 6           | 9         | 15  | sum > 14 → end--           |
| 4     | 5   | 6           | 8         | 14  | sum === 14 → return [6, 8] |


