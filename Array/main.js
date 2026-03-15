





// | i | data[i] | candation | count | Explanation                        |
// | - | ------- | --------- | ----- | ---------------------------------- |
// | 0 | 1       | null      | 0     | count=0 → candation = 1, count=1   |
// | 1 | 2       | 1         | 1     | 2 !== 1 → else → count-- → count=0 |
// | 2 | 3       | 1         | 0     | count=0 → candation = 3, count=1   |
// | 3 | 3       | 3         | 1     | 3 === 3 → count++ → count=2        |
// | 4 | 3       | 3         | 2     | 3 === 3 → count++ → count=3        |





// | Index | Calculation | Result |
// | ----- | ----------- | ------ |
// | 0     | 3           | 3      |
// | 1     | 3+1         | 4      |
// | 2     | 4+5         | 9      |
// | 3     | 9+2         | 11     |
// | 4     | 11+7        | 18     |




// Where Used

// Minimum cost calculations

// Stock buy price

// Dynamic programming problems




// ⚡ Time & Space Complexity

// Time: O(n)

// Space: O(n) (call stack)

// 📌 Output

// For:

// [1,2,3,4,5] , target = 9


// Valid subdatas:

// [2,3,4] = 9 → length 3

// [4,5] = 9 → length 2

// ✅ Answer = 3

// 🧠 What This Does
// now - click.time < 5 minutes


// Means:

// Keep only clicks from last 5 minutes.

// This is called:

// 🔥 Sliding Window Logic
// 🔥 Used in Rate Limiting
// 🔥 Used in Login Protection

// let newmap=new Map()

// let key='233'

// newmap.set(key , {name:'email' , expire:Date.now()})

// let value = newmap.get(key);
// console.log(value.name);    // "email"
// console.log(value.expire);  // timestamp





// function jitter(base, i, maxValue) {
//     // exponential growth
//     let jit = Math.min(base + Math.pow(2, i), maxValue);
//     let result = Math.floor(Math.random() * jit);
//     return result;
// }

// function Looping() {
//     const results = [];
//     for (let i = 0; i < 10; i++) {
//         results.push(jitter(5000, i, 10000));
//     }
//     return results;
// }

// console.log(Looping());




// 3️⃣ Step-by-Step Example

// Array: [9, 2, 1, 3, 5]

// minVal = 1

// Iteration 1 (i = 0)

// arr[0] = 9

// correctIndex = arr[0] - minVal = 9 - 1 = 8

// Problem: 8 is outside array bounds (arr.length = 5)

// ⚠️ This is a bug — cyclic sort assumes numbers fit in the array length.

// ✅ To fix: only use consecutive numbers with a known range, e.g., [1, 2, 3, 4, 5].

// let baseDelay = 2000  // 2 seconds

// function poll() {
//     console.log("Polling server at", new Date().toISOString())

//     // Add jitter: random between 0 and 500ms
//     let jitter = Math.floor(Math.random() * 500)
//     // console.log(jitter)
//     let nextDelay = baseDelay + jitter

//     setTimeout(poll, nextDelay)
// }

// poll()




// let count = 0

// function poll() {
//     console.log("Polling attempt:", count)
//     count++

//     // Poll again after 2 seconds
//     setTimeout(poll, 2000)
// }

// // Start polling
// poll()




// let count = 1

// setInterval(() => {
//     console.log(count * 1000)
//   console.log(count , 'hi Im Jugal')
// }, count++)
