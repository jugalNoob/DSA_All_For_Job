// Example usage
const arr = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(arr, target)); // Output: [2, 7]


3:::
// Function to find all subarrays of an array
function findAllSubarrays(arr) {
    const subarrays = [];
    const n = arr.length;

    for (let start = 0; start < n; start++) {
        for (let end = start; end < n; end++) {
            const subarray = arr.slice(start, end + 1);
            subarrays.push(subarray);
        }
    }
    return subarrays;
}
// Example usage
const arr = [1, 2, 3];
console.log(findAllSubarrays(arr)); 
// Output: [[1], [1, 2], [1, 2, 3], [2], [2, 3], [3]]

// Function to find the maximum sum of a subarray
function maxSumSubarray(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
// Example usage
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSumSubarray(nums)); // Output: 6 (sum of subarray [4, -1, 2, 1])


