🧠 Interview Rule (VERY IMPORTANT)

If the problem is algorithmic → use Map.
If the data is structured → use Object.


🔥 DSA PROBLEMS USING Map (INTERVIEW READY)
1️⃣ Frequency Counting (Most Common)
📌 Problem

Count occurrences of elements.

✅ Solution
function frequency(arr) {
  const map = new Map();

  for (let x of arr) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  return map;
}


🧠 Pattern: Frequency Map
⏱ Time: O(n)

2️⃣ First Non-Repeating Character
📌 Problem

Find first unique character in a string.

function firstUnique(str) {
  const map = new Map();

  for (let ch of str) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  for (let ch of str) {
    if (map.get(ch) === 1) return ch;
  }
  return null;
}


🧠 Pattern: Two-pass Map

3️⃣ Two Sum (CLASSIC)
📌 Problem

Find indices of two numbers that add to target.

function twoSum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let need = target - arr[i];
    if (map.has(need)) {
      return [map.get(need), i];
    }
    map.set(arr[i], i);
  }
}


🧠 Pattern: Complement Map
⏱ O(n)

4️⃣ Anagram Check
function isAnagram(a, b) {
  if (a.length !== b.length) return false;

  const map = new Map();

  for (let ch of a) map.set(ch, (map.get(ch) || 0) + 1);
  for (let ch of b) {
    if (!map.has(ch) || map.get(ch) === 0) return false;
    map.set(ch, map.get(ch) - 1);
  }
  return true;
}


🧠 Pattern: Frequency canceling

5️⃣ Longest Subarray with Sum = K
function longestSubarray(arr, k) {
  const map = new Map();
  let sum = 0;
  let max = 0;

  map.set(0, -1);

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (map.has(sum - k)) {
      max = Math.max(max, i - map.get(sum - k));
    }

    if (!map.has(sum)) map.set(sum, i);
  }
  return max;
}


🧠 Pattern: Prefix Sum + Map
⏱ O(n)

6️⃣ Count Subarrays with Sum = K
function countSubarrays(arr, k) {
  const map = new Map();
  map.set(0, 1);

  let sum = 0, count = 0;

  for (let x of arr) {
    sum += x;
    count += map.get(sum - k) || 0;
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}


🧠 Pattern: Prefix Frequency

7️⃣ Longest Consecutive Sequence
function longestConsecutive(nums) {
  const set = new Set(nums);
  let longest = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let curr = num;
      let streak = 1;

      while (set.has(curr + 1)) {
        curr++;
        streak++;
      }
      longest = Math.max(longest, streak);
    }
  }
  return longest;
}


🧠 Pattern: Hash-based expansion
(Uses Set, Map concept applies)

8️⃣ Group Anagrams
function groupAnagrams(strs) {
  const map = new Map();

  for (let s of strs) {
    let key = s.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(s);
  }
  return [...map.values()];
}


🧠 Pattern: Canonical Key

9️⃣ Majority Element
function majority(arr) {
  const map = new Map();

  for (let x of arr) {
    map.set(x, (map.get(x) || 0) + 1);
    if (map.get(x) > arr.length / 2) return x;
  }
}


🧠 Pattern: Frequency threshold

🔟 Longest Substring Without Repeating Characters
function longestUnique(str) {
  const map = new Map();
  let left = 0, max = 0;

  for (let right = 0; right < str.length; right++) {
    if (map.has(str[right])) {
      left = Math.max(map.get(str[right]) + 1, left);
    }
    map.set(str[right], right);
    max = Math.max(max, right - left + 1);
  }
  return max;
}


🧠 Pattern: Index Map + Sliding Window

🧠 MASTER MAP PATTERNS
Map →
  ├─ Frequency counting
  ├─ Prefix sum caching
  ├─ Complement lookup
  ├─ Index tracking
  ├─ Grouping

🎯 INTERVIEW GOLD LINE

Map converts brute-force O(n²) solutions into O(n).