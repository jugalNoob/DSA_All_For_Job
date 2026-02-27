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

If sum < target → move left

If sum > target → move right

If sum == target → triplet found

Time Complexity:

Sorting: O(n log n)

Outer loop + inner two-pointer: O(n²)

Use Cases:

3Sum problem

Triplet with closest sum

3-product problems (like max product triplet)

✅ Key Insight:

Two pointers always scan linearly, fixing elements outside of them reduces complexity.

This is the same logic you can extend to 4-pointers: fix two elements → use two pointers for remaining two.

If you want, I can write the 4-pointer / 4-su