| Feature      | Description                                                   |
| ------------ | ------------------------------------------------------------- |
| 🧠 Concept   | Reuse previous result instead of recalculating                |
| ⚙️ Formula   | `currentSum = currentSum - old + new`                         |
| ⏱️ Time      | O(n) instead of O(n × k)                                      |
| 📦 Use Cases | Sliding data, analytics, finance, streaming, interviews       |
| 💡 Key Idea  | Efficiently process *fixed-size windows* in arrays or streams |


🧩 2️⃣ Where do we use this code?

This pattern is used in many real-world and interview problems involving continuous data or “windows” of data.

🧠 Example Use Cases:
🧮 a) Analytics / Statistics

Find:

Average temperature of the last 7 days (rolling average)

Maximum sales in any 3-day period

CPU usage spikes in any 5-second window

// e.g. moving average
const avgLoad = maxSumSubarray(serverLoads, 5);

🧾 b) Financial / Stock data

Find:

Maximum stock price gain in any 3-day window

Best profit opportunity over a fixed period

🎮 c) Game or Streaming apps

Track:

Max score in last N rounds

Smooth moving average of player ping or FPS

💻 d) Interview / DSA

This pattern is one of the core DSA techniques:

Maximum subarray sum of fixed size

Longest substring / subarray under certain conditions

Problems like:

"Max consecutive 1s"

"Minimum window substring"

"Smallest subarray with sum ≥ target"


| Method                     | Time Complexity | Example                       |
| -------------------------- | --------------- | ----
------------------------- |
| Normal sum for each window | O(n × k)        | 1,000,000 × 10 = slow         |
| Sliding window             | O(n)            | just 1,000,000 steps = fast ✅ |

currentSum = currentSum - arr[i - windowSize] + arr[i];




function maxSumSubarray(arr, windowSize) {
    if (arr.length < windowSize) {
        return null;
    }
    let maxSum = 0;
    let currentSum = 0;
    // Calculate sum of first window
    for (let i = 0; i < windowSize; i++) {
        maxSum += arr[i];
    }
    currentSum = maxSum;
    // Slide the window and update the sums
    for (let i = windowSize; i < arr.length; i++) {
        // console.log(arr.length)
    
        currentSum = currentSum - arr[i - windowSize] + arr[i];

    //first conseol.log(7 - 4 + 7)

        //step 7 -4+7
        //step 10 -2+8
        //step 16 -1+1
        //step 16
        // console.log(currentSum = currentSum - arr[i - windowSize] + arr[i])

        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
// Example usage
const arr = [4, 2, 1, 7, 8, 1, 2,];
const windowSize = 3;
console.log(maxSumSubarray(arr, windowSize)); // Output: 16 (sum of subarray [7, 8, 1])
console.log(10 - 2 + 8 )

console.log(7 - 4 + 7)

c 
| Window  | Calculation  | currentSum | maxSum |
| ------- | ------------ | ---------- | ------ |
| [2,1,7] | `7 - 4 + 7`  | 10         | 10     |
| [1,7,8] | `10 - 2 + 8` | 16         | 16     |
| [7,8,1] | `16 - 1 + 1` | 16         | 16     |
| [8,1,2] | `16 - 7 + 2` | 11         | 16     |


Detailed iterations:
i=3 (new element: arr[3]=7):
Leaving: arr[3-3]=arr[0]=4
currentSum = 7 - 4 + 7 = 10
Window now: [2, 1, 7] (sum=10)
maxSum = Math.max(7, 10) = 10


i=4 (new element: arr[4]=8):
Leaving: arr[4-3]=arr[1]=2
currentSum = 10 - 2 + 8 = 16
Window now: [1, 7, 8] (sum=16)
maxSum = Math.max(10, 16) = 16
i=5 (new element: arr[5]=1):
Leaving: arr[5-3]=arr[2]=1
currentSum = 16 - 1 + 1 = 16
Window now: [7, 8, 1] (sum=16)
maxSum = Math.max(16, 16) = 16
i=6 (new element: arr[6]=2):
Leaving: arr[6-3]=arr[3]=7
currentSum = 16 - 7 + 2 = 11
Window now: [8, 1, 2] (sum=11)
maxSum = Math.max(16, 11) = 16




Great 🙌
You’ve got the sliding window pattern locked in — this is a core technique used for:

✅ Subarray sums (like max sum of k elements)

✅ Longest substring problems (in strings)

✅ Finding averages of windows

✅ Efficient stream processing


:::: Patterns -------------------------------------<><>
1:sliding windowa
function maxSumSubarray(arr, windowSize) {
    if (arr.length < windowSize) {
        return null;
    }
    let maxSum = 0;
    let currentSum = 0;
    // Calculate sum of first window
    for (let i = 0; i < windowSize; i++) {
        maxSum += arr[i];
    }
    currentSum = maxSum;
    // Slide the window and update the sums
    for (let i = windowSize; i < arr.length; i++) {
        currentSum = currentSum - arr[i - windowSize] + arr[i];
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
// Example usage
const arr = [4, 2, 1, 7, 8, 1, 2,];
const windowSize = 3;
console.log(maxSumSubarray(arr, windowSize)); // Output: 16 (sum of subarray [7, 8, 1])




Step 2: First loop

If we assume you fix the case (windowSize → windowsize):

for (let i = 0; i < windowsize; i++) {
    maxsum += data[i];
}



Ah, I see — you want to step through the sliding window 
formula line by line. Let’s carefully go iteration by 
iteration using your example:

const arr = [4, 2, 1, 7, 8, 1, 2];
const windowSize = 3;

Step 0: First window sum
currentSum = arr[0] + arr[1] + arr[2] = 4 + 2 + 1 = 7
maxSum = currentSum = 7


Step 1: Understanding arr[i - windowSize]

i - windowSize = 3 - 3 = 0

So arr[i - windowSize] = arr[0] = 4 ✅

This is the element leaving the window (the first element of the previous window).

Even though i = 3, we are not taking arr[3] as part
 of the old window — we are sliding the window forward.

Step 1: i = 3

Formula:

currentSum = currentSum - arr[i - windowSize] + arr[i]


Substitute values:

i = 3

windowSize = 3

currentSum = 7

arr[i - windowSize] = arr[3 - 3] = arr[0] = 4

// 7-4+7
arr[i] = arr[3] = 7

Calculation:

currentSum = 7 - 4 + 7
currentSum = 10


Update maxSum:

maxSum = Math.max(7, 10) = 10


New window: [2, 1, 7], sum = 10 ✅

Step 2: i = 4

Substitute values:

i = 4

currentSum = 10 (from previous step)

arr[i - windowSize] = arr[4 - 3] = arr[1] = 2

arr[i] = arr[4] = 8

Calculation:

currentSum = 10 - 2 + 8
currentSum = 16


Update maxSum:

maxSum = Math.max(10, 16) = 16


New window: [1, 7, 8], sum = 16 ✅

Step 3: i = 5

Substitute values:

i = 5

currentSum = 16

arr[i - windowSize] = arr[5 - 3] = arr[2] = 1

arr[i] = arr[5] = 1

Calculation:

currentSum = 16 - 1 + 1
currentSum = 16


Update maxSum:

maxSum = Math.max(16, 16) = 16


New window: [7, 8, 1], sum = 16 ✅

Step 4: i = 6

Substitute values:

i = 6

currentSum = 16

arr[i - windowSize] = arr[6 - 3] = arr[3] = 7

arr[i] = arr[6] = 2

Calculation:

currentSum = 16 - 7 + 2
currentSum = 11


Update maxSum:

maxSum = Math.max(16, 11) = 16


New window: [8, 1, 2], sum = 11 ✅

✅ Final Result

maxSum = 16

Maximum sum subarray = [1, 7, 8] or [7, 8, 1]


i=0 → maxsum=0+4=4

i=1 → maxsum=4+2=6

i=2 → maxsum=6+1=7

After loop:

maxsum = 7

current = 7

This correctly computes the sum of the first window [4,2,1].






// arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0]
// windowSize = 3

// 1️⃣ First window [4,2,1] → sum = 7 → maxSum = 7
// 2️⃣ Slide → [2,1,7] → sum = 7 - 4 + 7 = 10 → maxSum = 10
// 3️⃣ Slide → [1,7,8] → sum = 10 - 2 + 8 = 16 → maxSum = 16
// 4️⃣ Slide → [7,8,1] → sum = 16 - 1 + 1 = 16 → maxSum = 16
// ...
const arr = [4, 2, 1, 7];

for (let start = 0; start < arr.length; start++) {

    for (let end = start; end < arr.length; end++) {

        // Build subarray manually
        let subarray = '';
        for (let k = start; k <= end; k++) {
            subarray += arr[k] + ' ';
        }

        console.log(`Subarray from index ${start} to ${end}: [ ${subarray}]`);
    }
}


