✅ Correct Concept: Number of Subarrays

👉 Formula depends on length of array, not array itself

📌 Formula:


n(n+1)
2	​

✅ Correct Code
let arr = [3, 1, 4, 2, 5]

let n = arr.length

console.log(n * (n + 1) / 2)



✔ Output:

15

🧠 Why this formula works

For array:

[3, 1, 4, 2, 5]


Subarrays:

Start at index 0 → 5 choices

Start at index 1 → 4 choices

Start at index 2 → 3 choices

Start at index 3 → 2 choices

Start at index 4 → 1 choice

Total:

5 + 4 + 3 + 2 + 1 = 15



🔥 If you want to PRINT all subarrays
let arr = [3, 1, 4]

for (let i = 0; i < arr.length; i++) {
    let temp = []
    for (let j = i; j < arr.length; j++) {
        temp.push(arr[j])
        console.log(temp)
    }
}


✔ Output:

[3]
[3,1]
[3,1,4]
[1]
[1,4]
[4]

⚡ Interview Insight


| Task             | Approach          |
| ---------------- | ----------------- |
| Count subarrays  | Formula O(1)      |
| Print subarrays  | Nested loop O(n²) |
| Sum of subarrays | Prefix sum        |




🚀 Pro Tip

👉 If interviewer asks:

“How many subarrays?” → use formula

“Find something in subarrays?” → use:

Sliding window

Prefix sum

Hash map

If you want next level 🔥
I can show:
👉 How to find SUM of all subarrays in O(n) (very important trick)
👉 Asked in top interviews

