🔥 SLIDING WINDOW PATTERNS (0 → ADVANCED)
✅ What is Sliding Window?

Sliding Window is used to process a continuous subarray / substring efficiently by expanding and shrinking a window instead of recalculating every time.

👉 Converts O(n²) → O(n)

🧠 When to Use Sliding Window?

Subarray / substring

Contiguous elements

Maximum / minimum / count / sum

Fixed or variable size

Strings or arrays

📌 1️⃣ FIXED SIZE WINDOW
1. Maximum Sum Subarray of Size k

Pattern: Fixed window

Logic

Calculate first window sum

Slide by removing left, adding right

Code
function maxSumSubarray(arr, k) {
  let windowSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    if (i >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[i - (k - 1)];
    }
  }
  return maxSum;
}


⏱ Time: O(n) | Space: O(1)

2. Average of Subarrays
function averageSubarray(arr, k) {
  let result = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      result.push(sum / k);
      sum -= arr[i - (k - 1)];
    }
  }
  return result;
}

📌 2️⃣ VARIABLE SIZE WINDOW
3. Longest Subarray With Sum ≤ K

Pattern: Expand → Shrink

Code
function longestSubarraySumK(arr, k) {
  let left = 0, sum = 0, maxLen = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum > k) {
      sum -= arr[left];
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

4. Minimum Size Subarray Sum ≥ K
function minSubArrayLen(k, nums) {
  let left = 0, sum = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= k) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

📌 3️⃣ STRING SLIDING WINDOW (MOST IMPORTANT)
5. Longest Substring Without Repeating Characters

Pattern: HashMap + Window

Code
function lengthOfLongestSubstring(s) {
  let map = {};
  let left = 0, maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    if (map[s[right]] >= left) {
      left = map[s[right]] + 1;
    }
    map[s[right]] = right;
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

6. Longest Repeating Character Replacement
function characterReplacement(s, k) {
  let count = {};
  let left = 0;
  let maxCount = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    count[s[right]] = (count[s[right]] || 0) + 1;
    maxCount = Math.max(maxCount, count[s[right]]);

    if (right - left + 1 - maxCount > k) {
      count[s[left]]--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

📌 4️⃣ PERMUTATION / ANAGRAM WINDOW
7. Find All Anagrams
function findAnagrams(s, p) {
  let freq = {};
  for (let ch of p) freq[ch] = (freq[ch] || 0) + 1;

  let left = 0, right = 0;
  let count = Object.keys(freq).length;
  let result = [];

  while (right < s.length) {
    if (freq[s[right]] !== undefined) {
      freq[s[right]]--;
      if (freq[s[right]] === 0) count--;
    }
    right++;

    if (count === 0) result.push(left);

    if (right - left === p.length) {
      if (freq[s[left]] !== undefined) {
        if (freq[s[left]] === 0) count++;
        freq[s[left]]++;
      }
      left++;
    }
  }
  return result;
}

📌 5️⃣ ADVANCED SLIDING WINDOW
8. Maximum Number of Vowels
function maxVowels(s, k) {
  let vowels = new Set(['a','e','i','o','u']);
  let count = 0, max = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) count++;
    if (i >= k) {
      if (vowels.has(s[i - k])) count--;
    }
    max = Math.max(max, count);
  }
  return max;
}

9. Subarray Product Less Than K
function numSubarrayProductLessThanK(nums, k) {
  let left = 0, product = 1, count = 0;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];

    while (product >= k && left <= right) {
      product /= nums[left++];
    }
    count += right - left + 1;
  }
  return count;
}

📌 SLIDING WINDOW PATTERN SUMMARY


| Pattern        | Use Case          |
| -------------- | ----------------- |
| Fixed Size     | Max sum, average  |
| Variable Size  | Min/Max subarray  |
| HashMap Window | Unique, frequency |
| Anagram Window | Permutations      |
| Greedy Window  | Replacement       |



🧠 INTERVIEW STRATEGY

✔ Identify contiguous condition
✔ Decide fixed vs variable window
✔ Use HashMap for strings
✔ Shrink only when invalid
✔ Always mention O(n)

🎯 FINAL TAKEAWAY

🔥 Sliding Window + Two Pointer = Most powerful array technique
🔥 Covers 70% coding interview questions

If you want next:
➡ Sliding Window + Two Pointer Combined Problems
➡ Top 25 Interview Questions
➡ Dry Run Visuals

Just say NEXT 🚀