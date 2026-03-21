Interview Insight

This problem teaches pair swapping pattern, which is used in:

Wave array

Zig-zag array

Rearranging elements

2

️⃣ Second Code → Pairwise Swap

Your second code:

let data1=[10 , 20 , 30 , 40 , 50]

for(let i=0; i<data1.length-1; i+=2)
{
 [data1[i], data1[i + 1]] = [data1[i + 1], data1[i]]
}

console.log(data1)

🔹 What it does

It swaps elements in pairs.

Example:

Original

[10,20,30,40,50]


Iteration 1

swap index 0 and 1
[20,10,30,40,50]


Iteration 2

swap index 2 and 3
[20,10,40,30,50]

✅ Final Output
[20,10,40,30,50]

📌 Logic Pattern
Swap adjacent pairs


Used in:

Pair rearrangement

Bit manipulation problems

Array manipulation



Step-by-Step Table
Iteration	i value	Swap Index	Before Swap	After Swap
1	0	0 ↔ 1	[10,20,30,40,50]	[20,10,30,40,50]
2	2	2 ↔ 3	[20,10,30,40,50]	[20,10,40,30,50]

Loop stops because next i = 4, and condition is:

i < data1.length - 1
4 < 4  ❌ false

Final Output
[20,10,40,30,50]

Visual Representation
Original
10 20 30 40 50

Swap pairs
↓
20 10 40 30 50


Pairs swapped:

(10 20) → (20 10)
(30 40) → (40 30)
50 stays same

Key Logic
i += 2


Means jump by two positions, so we process pairs.

Index movement:

i = 0
i = 2
i = 4 (stop)

Time Complexity
O(n)


Because loop runs about n/2 times.