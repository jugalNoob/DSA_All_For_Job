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
