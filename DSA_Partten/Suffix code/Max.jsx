Good 👍 you already understood prefix max. Now let’s build the suffix max (suffix / suffix maximum array) in the same clean way.

🔥 What is Suffix Max?

👉 For every index i, we store:

maximum from i → end

🧠 Example

Input:

[3, 1, 5]


Suffix max output:

[5, 5, 5]


Because:

from index 0 → max(3,1,5) = 5
from index 1 → max(1,5) = 5
from index 2 → max(5) = 5
⚙️ Code: Suffix Max
function suffixMax(arr){

    let n = arr.length;
    let suffix = [];

    suffix[n - 1] = arr[n - 1];

    for(let i = n - 2; i >= 0; i--){
        suffix[i] = Math.max(suffix[i + 1], arr[i]);
    }

    return suffix;
}

console.log(suffixMax([3, 1, 5]));

📊 Step-by-step Table

Input:

[3, 1, 5]

Step 1 (last element)
suffix[2] = 5

Step 2 (i = 1)
max(suffix[2], arr[1])
= max(5, 1)
= 5

Step 3 (i = 0)
max(suffix[1], arr[0])
= max(5, 3)
= 5

🎯 Final Output
[5, 5, 5]

🆚 Prefix vs Suffix
Type	Direction	Formula
Prefix Max	left → right	max(prev, current)
Suffix Max	right → left	max(next, current)
🧠 Visual Trick
Prefix:  ← building from left
Suffix:  → building from right

🚀 Why this is important (INTERVIEW 🔥)

Used in:

Rain water trapping problem
Stock span variations
Range queries
DP optimizations
⚡ Bonus: Prefix + Suffix together

Very important interview pattern:

👉 "Maximum water trapped"

Uses:

leftMax[]
rightMax[]


function suffexmax(data){


    let n=data.length

console.log(n)

    let suffex=[]

    suffex[n-1]=data[n-1]



    for(let i=n-2; i>=0; i--){

       suffex[i]=Math.max(suffex[i+1] ,data[i])
    }

    return suffex
}

console.log(suffexmax([3, 1, 5]));


// First Row class Line 

  let n=data.length

console.log(n)

    let suffex=[]

    suffex[n-1]=data[n-1]


🔥 Line you asked
suffex[n-1] = data[n-1]

🧠 Meaning (Simple)

👉 “Put the last element of data into the last position of suffix array.”

📦 Step-by-step

Assume:

data = [3, 1, 5]
n = 3


So:

n - 1 = 2

This line becomes:
suffix[2] = data[2]


👉 Meaning:

suffix[2] = 5



///  second row class Line start  ------------------->> 




🧠 What this means

👉 We are building a suffix maximum array

For every index i:

suffix[i] = maximum element from i → end

⚙️ Why start from n - 2?

Because:

suffix[n - 1] = data[n - 1]


👉 Last element is already set (base case)

So we start from:

second last index → n - 2

🧠 Step-by-step idea

We go right → left

At each index:

compare:
    current element
    best answer from right side

📦 Example
data = [3, 1, 5]
n = 3

Step 1 (base case)
suffix[2] = 5

suffix = [_, _, 5]

Step 2 (i = 1)
suffix[1] = Math.max(suffix[2], data[1])
           = Math.max(5, 1)
           = 5

suffix = [_, 5, 5]

Step 3 (i = 0)
suffix[0] = Math.max(suffix[1], data[0])
           = Math.max(5, 3)
           = 5

suffix = [5, 5, 5]

🎯 Final Output
[5, 5, 5]

🧠 Key Intuition

At each index:

👉 “Should I take myself OR should I take the best from the right side?”

Math.max(current, right_best)

🌳 Visual Thinking
data:    [3, 1, 5]

suffix:  [5, 5, 5]
           ↑  ↑  ↑
        best from i → end

⚡ One-line explanation (INTERVIEW)

👉 “We build suffix array from right to left, where each position stores the maximum value from that index to the end.”

🔥 Why this is important

Used in:

Trapping rain water
Stock span variations
Range maximum queries
DP optimizations