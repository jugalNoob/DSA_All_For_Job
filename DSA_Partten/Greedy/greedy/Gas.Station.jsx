🔹 Gas Station Problem (Simple Meaning)

You have:

gas[i] → gas available at station i

cost[i] → gas needed to go from station i → i+1

Goal:

👉 Find the starting gas station index so that you can complete the full circle.

If not possible → return -1

🔹 Example
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]


Calculate:

Station 0 → 1 - 3 = -2
Station 1 → 2 - 4 = -2
Station 2 → 3 - 5 = -2
Station 3 → 4 - 1 = +3
Station 4 → 5 - 2 = +3


Answer:

Start at index = 3


From station 3 you can complete the circle.

🔹 Greedy Idea

Two rules:

Rule 1

If total gas < total cost

No solution
Return -1

Rule 2

If current tank becomes negative

start = next station
reset tank

🔹 Greedy Logic

We keep track of:

tank → current gas
total → overall gas balance
start → starting station

🔹 JavaScript Code (Simple)
function canCompleteCircuit(gas, cost){

    let total = 0
    let tank = 0 
    let start = 0
    for(let i=0;i<gas.length;i++){
        let diff = gas[i] - cost[i]

        total += diff
        tank += diff

        if(tank < 0){
            start = i + 1
            tank = 0
        }
    }

    return total >= 0 ? start : -1
}

🔹 Dry Run Example
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]


Step by step:

i=0 → tank = -2 → reset start =1
i=1 → tank = -2 → reset start =2
i=2 → tank = -2 → reset start =3
i=3 → tank = 3
i=4 → tank = 6


Result

start = 3

🔹 Time Complexity
O(n)


Only one loop.

Space complexity

O(1)

🔹 Why This Is Greedy

Because we always make best local decision:

If tank becomes negative → discard previous stations
Start from next station


We never recheck previous stations.

🔥 Interview Tip

Interviewers usually ask:

Why can we skip previous stations?


Answer:

If starting from station A fails at B,
then any station between A and B also fails.

So we jump to B+1.

✅ If you want, I can also show visual intuition + diagram for Gas Station problem which makes it 10x easier to understand (most people struggle with this greedy logic).