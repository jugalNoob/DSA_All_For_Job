const data = [1, 2, 2, 3, 3, 3];

// Using Object
const freq = {};
for (let num of data) {
    freq[num] = (freq[num] || 0) + 1;
}
console.log(freq); 
// Output: { '1': 1, '2': 2, '3': 3 }

// Using Map
const freqMap = new Map();
for (let num of data) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
}
console.log(freqMap); 
// Output: Map(3) { 1 => 1, 2 => 2, 3 => 3 }
