Each problem file:
// Problem: Two Sum
// Approach: HashMap
// Time: O(n)
// Space: O(n)

function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(nums[i], i);
  }
}

💡 Pro Tip (INTERVIEW GOLD)

👉 Add this in README:

Approach explanation
Time & space complexity
Edge cases

👉 Recruiters LOVE this