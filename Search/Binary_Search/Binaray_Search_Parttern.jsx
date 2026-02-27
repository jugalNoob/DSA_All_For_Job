🔥 TOP 10 BINARY SEARCH PATTERNS (Interview Gold)
1️⃣ Classic Binary Search (Index-based)
🔍 When to use

Array is sorted

Need to find exact element

🧠 Rule
if (target === arr[mid]) found
else if (target > arr[mid]) move right
else move left

⏱ Time

O(log n)

2️⃣ First Occurrence (Left Boundary)
🔍 When to use

Array has duplicates

Need first index

🧠 Rule

When found → still go left

end = mid - 1

3️⃣ Last Occurrence (Right Boundary)
🔍 When to use

Array has duplicates

Need last index

🧠 Rule

When found → still go right

start = mid + 1

4️⃣ Count Frequency Pattern

🔍 When to use

Count how many times a number appears

🧠 Formula
count = lastIndex - firstIndex + 1

5️⃣ Lower Bound Pattern
🔍 Meaning

First index where:

arr[i] >= target

🧠 Used in

Insert position

Ceiling

Range queries

6️⃣ Upper Bound Pattern
🔍 Meaning

First index where:

arr[i] > target

🧠 Used in

Count duplicates

Range problems

7️⃣ Binary Search on Rotated Array
🔍 When to use

Sorted array rotated at pivot

🧠 Key Insight

One half is always sorted

Decide which half to discard

8️⃣ Peak Element Pattern
🔍 When to use

Element greater than neighbors

🧠 Rule
if (arr[mid] < arr[mid+1])
    move right
else
    move left

9️⃣ Binary Search on Answer (MOST IMPORTANT 🔥)
🔍 When to use

Find minimum / maximum possible value

Problems say:

“minimum time”

“maximum distance”

“smallest capacity”

🧠 Rule
if (isPossible(mid))
    answer = mid, move left
else
    move right

🧪 Examples

Book allocation

Koko bananas

Shipping packages

🔟 Infinite / Unknown Size Array Pattern
🔍 When to use

Array size unknown

🧠 Rule

Expand range exponentially

Apply binary search

start = 0
end = 1
while (arr[end] < target)
    end *= 2

🧠 MASTER DECISION TABLE


| Question Says     | Pattern          |
| ----------------- | ---------------- |
| Find element      | Classic          |
| First / Last      | Boundary         |
| Count             | Boundaries       |
| Rotated           | Sorted-half      |
| Peak              | Neighbor compare |
| Minimum / Maximum | Answer-based     |
| Insert position   | Lower bound      |
| Infinite array    | Range expand     |


🎯 Interview Tip (IMPORTANT)

If interviewer asks:

“Can this be optimized?”

👉 Immediately think:

“Can I apply binary search?”