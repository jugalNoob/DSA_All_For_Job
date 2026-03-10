| Operation                   | Complexity |
| --------------------------- | ---------- |
| Loops only                  | O(n²)      |
| Using `.slice()`            | O(n³)      |
| Without slice (incremental) | O(n²)      |



Would you like me to show how to count all subarrays without printing them — and prove mathematically it’s n(n+1)/2?

for (let i = 0; i < data.length; i++) {
  let sub = [];
  for (let j = i; j < data.length; j++) {
    sub.push(data[j]);
    console.log([...sub]);
  }
}
//////////////////////////////////////////---------------->>

let data = [10, 20, 30, 40, 50];

for (let i = 0; i < data.length; i++) {
  for (let j = i + 1; j < data.length; j++) {
    console.log(data.slice(i, j));
  }
}



🧠 Step-by-Step Understanding

Outer loop (i) runs from 0 → n-1

Inner loop (j) runs from i+1 → n-1

data.slice(i, j) takes O(j - i) time because .slice() creates a copy of part of the array.




🧮 Total Operations:

The number of pairs (i, j) is:


n(n−1)​/2



That’s O(n²) loops.

Each slice(i, j) takes O(j - i) time → average slice length ≈ O(n/2).

So total time =


O(n2)∗O(n)=O(n3)

✅ Final Time Complexity: O(n³)
(because nested loops + array copying)



/// ------------------------->>>Single Loop ------------->>

let data = [10, 20, 30, 40, 50];

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}



-- >Run 

🧠 In JavaScript terms

If:

let data = [10, 20, 30, 40, 50];

Then:

let n = data.length;  // n = 5

Apply the formula:


n(n−1)​/2

5(5-1)/2

5*4/2


💡 JS Calculation
let data = [10, 20, 30, 40, 50];
let n = data.length;

let totalPairs = (n * (n - 1)) / 2;

(data.length * (data.length - 1)) / 2

Count all subarrays
n(n+1)/2
(5×6)/2
15
console.log(totalPairs); // 10


(10,20), (10,30), (10,40), (10,50),
(20,30), (20,40), (20,50),
(30,40), (30,50),
(40,50)




| Loop Type          | Example               | Count | Complexity   |
| ------------------ | --------------------- | ----- | ------------ |
| Single loop        | `for(i=0; i<n; i++)`  | n     | **O(n)**     |
| Double nested loop | 2 loops (i,j)         | n²    | **O(n²)**    |
| Triple nested loop | 3 loops (i,j,k)       | n³    | **O(n³)**    |
| Logarithmic loop   | `for(i=1; i<n; i*=2)` | log₂n | **O(log n)** |
| Constant work      | single operation      | 1     | **O(1)**     |



🔹 Summary:
| Concept                | Formula  | Example (`n=5`) | Result |
| ---------------------- | -------- | --------------- | ------ |
| Count all unique pairs | n(n−1)/2 | (5×4)/2         | 10     |
| Count all subarrays    | n(n+1)/2 | (5×6)/2         | 15     |

