function pickelemnt(data) {

    let start = 0
    let end = data.length - 1

    while (start < end) {

        let mid = Math.floor((start + end) / 2)

        if (data[mid] < data[mid + 1]) {
            start = mid + 1
        } else {
            end = mid
        }
    }

    return data[start]
}

console.log(pickelemnt([1, 3, 20, 4, 1, 0]))



✅ Output
20

🧠 How this works (VERY IMPORTANT)

👉 You are not finding max directly
👉 You are finding a peak element

🔍 Dry Run
Array:
[1, 3, 20, 4, 1, 0]

Step 1
start = 0, end = 5
mid = 2 → value = 20


Check:

data[2] < data[3] → 20 < 4 ❌


👉 Move left:

end = mid = 2

Step 2
start = 0, end = 2
mid = 1 → value = 3


Check:

3 < 20 ✅


👉 Move right:

start = mid + 1 = 2

Step 3
start = 2, end = 2 → STOP


👉 Return:

data[2] = 20

🔥 Intuition (Golden)

👉 If right neighbor is bigger → peak is on right
👉 If left side bigger → peak is on left

⚡ Time Complexity
O(log n) ✅ (binary search)

🧠 Interview Explanation

👉 Say this:

“I use binary search. If mid is smaller than next element, peak lies on right; otherwise on left. This reduces search space to O(log n).”


🔹 Key Idea

We want a peak element:

An element arr[i] is a peak if arr[i] >= arr[i-1] and arr[i] >= arr[i+1].

The array doesn’t need to be fully sorted.
There can be multiple peaks.
This method always finds one peak.
🔹 Step-by-Step Walkthrough
Input:
arr = [1, 3, 20, 4, 1, 0]
left = 0, right = 5

Iteration 1
mid = Math.floor((0 + 5)/2) = 2
arr[mid] = 20
arr[mid+1] = 4


Check condition:

if(arr[mid] < arr[mid+1]) // 20 < 4 → false

So right = mid = 2
New range: left = 0, right = 2
Iteration 2
mid = Math.floor((0 + 2)/2) = 1
arr[mid] = 3
arr[mid+1] = 20


Check condition:

if(arr[mid] < arr[mid+1]) // 3 < 20 → true

So left = mid + 1 = 2
New range: left = 2, right = 2
Loop Ends
Condition: while(left < right) → left = right = 2 → exit loop
Return
return arr[left] // arr[2] = 20


✅ Output: 20 (which is a peak)

🔹 How It Works Conceptually
Compare arr[mid] with arr[mid+1].
If arr[mid] < arr[mid+1] → there must be a peak on the right.
Why? Because either the array rises to a peak or eventually decreases.
If arr[mid] >= arr[mid+1] → there must be a peak on the left, including mid.
Shrink the range (left or right) until left == right → peak found.
⚡ Complexity
Time: O(log n) → binary search
Space: O(1) → in-place, no extra memory
🧠 Important Notes
This algorithm works even if array is unsorted.
It always finds some peak, not necessarily the first or last.
Very FAANG-friendly — short, elegant, and efficient.


✅ Output: 20

Works even if multiple peaks exist, returns any one peak.
Time complexity: O(log n)
Binary Search with explicit neighbors – your second code:
let data = [10, 2, 30, 40, 50, 60, 70, 80]

let start = 0
let end = data.length - 1
let peak = undefined

while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    let left = mid - 1 >= 0 ? data[mid - 1] : -Infinity
    let right = mid + 1 < data.length ? data[mid + 1] : -Infinity

    if (data[mid] >= left && data[mid] >= right) {
        peak = data[mid]
        break
    } else if (data[mid] < right) {
        start = mid + 1
    } else {
        end = mid - 1
    }
}

console.log("Peak element:", peak) // 80


✅ Output: 80

Works for arrays that are strictly increasing at the end.
Finds any peak, not necessarily the first local maximum.