📦 BINARY SEARCH – REAL INTERVIEW QUESTIONS
🟢 BASIC LEVEL (Must-know)
1️⃣ Find an element in a sorted array

Question:
Given a sorted array, find a target element.

Key idea:
Classic binary search.

Asked in: Infosys, TCS, Wipro

2️⃣ Find first occurrence of an element
Input: [1,2,2,2,3], target = 2
Output: index = 1


Trick:

When found → move left

end = mid - 1

3️⃣ Find last occurrence of an element
Input: [1,2,2,2,3], target = 2
Output: index = 3


Trick:

When found → move right

start = mid + 1

4️⃣ Count occurrences of a number
count = lastIndex - firstIndex + 1


Asked in: Amazon, Flipkart

🟡 MEDIUM LEVEL (Very Common)
5️⃣ Find the floor of a number

Floor = greatest number ≤ target

Input: [1,2,4,6,10], target = 5
Output: 4


Binary rule:

When arr[mid] < target → store answer, move right

6️⃣ Find the ceil of a number

Ceil = smallest number ≥ target

Input: [1,2,4,6,10], target = 5
Output: 6

7️⃣ Search in a rotated sorted array
Input: [4,5,6,7,0,1,2], target = 0
Output: index = 4


Key idea:

One half is always sorted

Decide which half to move

Asked in: Google, Amazon

8️⃣ Find minimum in rotated sorted array
Input: [4,5,6,7,0,1,2]
Output: 0


Logic:
Compare mid with end

9️⃣ Peak element
Input: [1,2,3,1]
Output: index 2 (value 3)


Rule:

Compare mid with mid+1

🔵 ADVANCED LEVEL (High-Paying Companies)
🔟 Find square root of a number (without Math.sqrt)
Input: 16
Output: 4


Binary search on range [1, n].

1️⃣1️⃣ Find position in infinite sorted array

You don’t know array size.

Idea:

Expand range exponentially

Then apply binary search

1️⃣2️⃣ Allocate minimum number of pages (Books problem)
Books = [10,20,30,40]
Students = 2
Output = 60


Pattern:
👉 Binary search on answer, not index.

1️⃣3️⃣ Aggressive cows problem

Maximize minimum distance.

Pattern:
Binary search on distance.

1️⃣4️⃣ Koko Eating Bananas 🍌
piles = [3,6,7,11]
h = 8
Output = 4


Binary search on speed.

🔥 VERY IMPORTANT INTERVIEW PATTERN
❓ Binary Search on ANSWER

Not searching index — searching minimum / maximum possible value

Used in:

Minimum capacity

Maximum distance

Minimum time

Minimum speed

Companies LOVE this.


🧠 Common Interview Traps

| Mistake                 | Why rejected                   |
| ----------------------- | ------------------------------ |
| Using `start < end`     | Misses last element            |
| Overflow in mid         | Use `(start + end) / 2` safely |
| Not handling duplicates | Wrong answer                   |
| Not explaining logic    | Interview fail                 |


