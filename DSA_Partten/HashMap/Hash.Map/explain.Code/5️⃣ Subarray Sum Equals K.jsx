5️⃣ Subarray Sum Equals K

Problem: Find number of continuous subarrays with sum = k.

Example:

arr = [1,1,1], k=2 → 2 subarrays: [1,1] at positions [0,1] and [1,2]


Solution using prefix sum + HashMap:

function subarraySumK(arr, k) {
    const map = {0:1};
    let sum = 0, count = 0;
    for (let num of arr) {
        sum += num;
        if (map[sum - k]) count += map[sum - k];
        map[sum] = (map[sum] || 0) + 1;
    }
    return count;
}
console.log(subarraySumK([1,1,1],2)); // 2
