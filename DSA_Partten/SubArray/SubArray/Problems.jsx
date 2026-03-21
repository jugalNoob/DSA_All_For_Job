Problem name,What it asks for,Uses prefix sum / prefix max?
Maximum Subarray Sum (Kadane),Largest sum of any contiguous subarray,Sometimes (optimized way)
Subarray Sum Equals K,Count subarrays whose sum = k,Yes — prefix sum + hashmap
Longest Subarray with Sum ≤ target,Longest continuous part ≤ some value,Yes — prefix sum + two pointers
Trapping Rain Water,How much water can be trapped,Yes — prefix max left & right
Product of subarray (max/min),Largest/min product of continuous elements,—
Sliding Window Maximum,Max element in every window of size k,Deque (but prefix max intuition helps)