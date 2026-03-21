The Boats to Save People problem is another very famous Greedy + 
Two Pointer interview problem. 🚤

1️⃣ Problem Statement

You are given:

people[] → weight of each person
limit → maximum weight a boat can carry


Rules:

1 boat can carry at most 2 people
Total weight ≤ limit


Goal:

Minimum number of boats needed

2️⃣ Example
people = [3,2,2,1]
limit = 3


Possible boats:

(1,2)
(2)
(3)


Answer:

3 boats

3️⃣ Greedy Idea

Best strategy:

Put the heaviest person with the lightest person


Why?

This maximizes boat usage.

4️⃣ Algorithm Steps
1 Sort people weights
2 Use two pointers
3 Lightest person → left
4 Heaviest person → right



5️⃣ JavaScript Code
function GreedyBoats(people, limit) {
    people.sort((a, b) => a - b); // Sort ascending
    let boat = 0;
    let start = 0;
    let end = people.length - 1;

    while (start <= end) {
        if (people[start] + people[end] <= limit) {
            start++; // Pair lightest and heaviest
        }
        end--; // Always take the heaviest
        boat++; // One boat used
    }

    return boat;
}

people = [3, 2, 2, 1];
limit = 3;

console.log(GreedyBoats(people, limit)); // Output: 3

| Step | Start Index | End Index | People on Boat | Action                                  | Boats Count |
| ---- | ----------- | --------- | -------------- | --------------------------------------- | ----------- |
| 1    | 0           | 3         | 1 + 3          | Exceeds limit? No → 1+3>3 → only 3 goes | 1           |
| 2    | 0           | 2         | 1 + 2          | 1 + 2 = 3 ≤ 3 → pair them               | 2           |
| 3    | 1           | 1         | 2              | Only 2 left → take alone                | 3           |



Sorted people: [1, 2, 2, 3]

Explanation:

Always try to pair the lightest (start) with the heaviest (end).

If they fit together (≤ limit), move both pointers (start++, end--).

Otherwise, take the heaviest alone (end--).

Increment the boat count each time.




6️⃣ Example Walkthrough

Input:

people = [3,2,2,1]
limit = 3


Step 1 → Sort

[1,2,2,3]


Pointers:

left = 0
right = 3

Boat 1
1 + 3 = 4 > 3


Can't share.

Boat for 3

boats = 1
right = 2

Boat 2
1 + 2 = 3


Share boat.

boats = 2
left = 1
right = 1

Boat 3
2 alone

boats = 3


Final:

3 boats

7️⃣ Visual
Weights → 1   2   2   3
Limit   → 3


Boats:

Boat1 → (3)
Boat2 → (1,2)
Boat3 → (2)

8️⃣ Why Greedy Works

Key idea:

Pair the heaviest with the lightest


If they can't fit, the heaviest must go alone.

9️⃣ Time Complexity

Sorting:

O(n log n)


Two pointer scan:

O(n)


Total:

O(n log n)

🔟 Space Complexity
O(1)


(in-place sorting)

1️⃣1️⃣ Real Life Example

Think of:

Rescue boats during flood


Boat limit:

Max 200 kg


Goal:

Save maximum people with minimum boats

1️⃣2️⃣ Pattern You Learn

This problem teaches:

Greedy + Sorting + Two Pointers


This pattern appears very often in interviews.