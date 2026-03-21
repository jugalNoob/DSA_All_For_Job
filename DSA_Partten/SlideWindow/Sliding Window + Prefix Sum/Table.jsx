⚡ FINAL PATTERN SUMMARY

| Problem Type            | Pattern              |
| ----------------------- | -------------------- |
| sum ≤ K (positive)      | Sliding Window       |
| sum ≥ K (with negative) | Prefix + Deque       |
| sum = K                 | Prefix Sum           |
| exactly K distinct      | Sliding Window trick |
| divisible by K          | Prefix Sum           |


🧠 MASTER DECISION TREE 🔥
sum = K → Prefix Sum
sum ≤ K → Sliding (if positive)
sum ≥ K → Prefix + Deque
distinct count → Sliding Window

🎯 INTERVIEW GOLD LINE

Some problems require combining sliding window and 
prefix sum ideas, especially when constraints like 
egative numbers or exact counts are involved. In such 
cases, we adapt the approach using techniques like 
monotonic deque or mathematical transformations.