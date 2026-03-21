✅ Correct Kadane’s Algorithm:

function kadane(data) {
    let maxSoFar = data[0];
    let maxEndingHere = data[0];

    for (let i = 1; i < data.length; i++) {
        // Either start new subarray at current element or extend the existing one
        maxEndingHere = Math.max(data[i], maxEndingHere + data[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

// Examples
console.log(kadane([10, 20, 30]));      // 60
console.log(kadane([-2, -3, 4, -1, -2, 1, 5, -3])); // 7

