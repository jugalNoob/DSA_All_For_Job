function majorityElement(data) {
    let candidate = null;
    let count = 0;

    // Step 1: Find candidate
    for (let i = 0; i < data.length; i++) {
        if (count === 0) {
            candidate = data[i]; // use data[i], not data
            count = 1;
        } else if (data[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }


        return candidate;
    // // Step 2: Verify candidate (optional if guaranteed majority exists)
    // count = 0;
    // for (let num of data) {
    //     if (num === candidate) count++;
    // }

    // return count > Math.floor(data.length / 2) ? candidate : null;
}

console.log(majorityElement([3,2,3]));      // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2
