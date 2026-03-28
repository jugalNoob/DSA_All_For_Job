Perfect 🔥 — here’s your 🚀 FULL Sliding Window Cheat Sheet (1-page, interview ready)
Save this — this covers 90% of problems.

🧠 SLIDING WINDOW CHEAT SHEET
1️⃣ FIXED SIZE WINDOW (k constant)
👉 Use when:
Subarray of size k
Max / Min / Sum
💻 Template
let sum = 0;

// first window
for (let i = 0; i < k; i++) {
    sum += arr[i];
}

let result = sum;

for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i]; // slide
    result = Math.max(result, sum); // or Math.min
}

🧠 Key Idea
Remove left → Add right

🔥 Use Cases
Max sum subarray of size k
Average of subarrays
Fixed window analytics (logs, metrics)
2️⃣ VARIABLE WINDOW (NO HASHMAP)
🟢 A. MAX LENGTH (condition: ≤ target)
👉 Use when:
Longest subarray
Condition: sum ≤ target
💻 Template
let left = 0, sum = 0, max = 0;

for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum > target) {
        sum -= arr[left];
        left++;
    }

    max = Math.max(max, right - left + 1);
}

🔥 Use Cases
Longest subarray with sum ≤ K
🔴 B. MIN LENGTH (condition: ≥ target)
👉 Use when:
Smallest subarray
💻 Template
let left = 0, sum = 0, min = Infinity;

for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum >= target) {
        min = Math.min(min, right - left + 1);
        sum -= arr[left];
        left++;
    }
}

return min === Infinity ? 0 : min;

🔥 Use Cases
Minimum size subarray sum
3️⃣ SLIDING WINDOW + HASHMAP 🔥
🟢 A. NO DUPLICATES (SET / MAP)
👉 Longest substring without repeating
💻 Template
let map = new Map();
let left = 0, max = 0;

for (let right = 0; right < s.length; right++) {

    if (map.has(s[right])) {
        left = Math.max(left, map.get(s[right]) + 1);
    }

    map.set(s[right], right);

    max = Math.max(max, right - left + 1);
}

🧠 Key Idea
Jump left pointer (don’t move step by step)

🟡 B. AT MOST K DISTINCT
💻 Template
let map = new Map();
let left = 0, max = 0;

for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    while (map.size > k) {
        map.set(s[left], map.get(s[left]) - 1);
        if (map.get(s[left]) === 0) map.delete(s[left]);
        left++;
    }

    max = Math.max(max, right - left + 1);
}

🔥 Use Cases
Longest substring with K distinct chars
🔴 C. MIN WINDOW (HARDEST 🔥)

👉 Example: Minimum Window Substring

💻 Template
let need = new Map();
for (let c of t) need.set(c, (need.get(c) || 0) + 1);

let left = 0, count = 0, minLen = Infinity, start = 0;

for (let right = 0; right < s.length; right++) {

    if (need.has(s[right])) {
        need.set(s[right], need.get(s[right]) - 1);
        if (need.get(s[right]) >= 0) count++;
    }

    while (count === t.length) {

        if (right - left + 1 < minLen) {
            minLen = right - left + 1;
            start = left;
        }

        if (need.has(s[left])) {
            need.set(s[left], need.get(s[left]) + 1);
            if (need.get(s[left]) > 0) count--;
        }

        left++;
    }
}

🧠 MASTER DECISION TREE 🔥
1. Fixed size k?
   → YES → Fixed window

2. Variable size?
   → Need MAX length?
       → condition ≤ → shrink when invalid

   → Need MIN length?
       → condition ≥ → shrink when valid

3. Strings / duplicates / frequency?
   → Use HashMap

4. Need exact match / pattern?
   → HashMap + count logic

⚡ GOLDEN RULES (REMEMBER THIS)
Expand → right++

Shrink → left++

Condition decides:
    while (invalid) OR while (valid)

🔥 INTERVIEW ONE-LINER

👉 “Sliding window reduces nested loops by maintaining a dynamic range and updating state incrementally.”

🚀 BONUS (VERY IMPORTANT EDGE CASES)
Negative numbers ❌ → sliding window may break
Use prefix sum + hashmap instead

If you want next level 🔥
I can give you:

15 MUST-DO interview problems (Amazon/Google)
Hard variations with tricks
Real-world use (rate limiter, Kafka stream processing)