2️⃣ Frequency Count

Problem: Count the frequency of each element.

Example:

arr = [1,2,2,3,3,3]
Output: {1:1, 2:2, 3:3}


Solution:

function frequencyCount(arr) {
    const freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
}
console.log(frequencyCount([1,2,2,3,3,3]));
// { '1': 1, '2': 2, '3': 3 }