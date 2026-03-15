We will dry-run your code step by step for:

[0,1,0,2,1,0,1,3,2,1,2,1]


Your algorithm uses Two Pointers.

Initial variables:

left = 0
right = 11
leftmax = 0
rightmax = 0
water = 0


Rule:

Water at index =
min(leftmax , rightmax) - height[i]


We always move the side with smaller max.


Step-by-Step Execution
Step 1
left = 0
right = 11


Heights

height[left] = 0
height[right] = 1


Update max:

leftmax = max(0,0) = 0
rightmax = max(0,1) = 1


Compare

leftmax < rightmax
0 < 1 → true


Water

water += 0 - 0 = 0


Move

left++
left = 1

Step 2
left = 1
right = 11

height[left] = 1
height[right] = 1


Update

leftmax = max(0,1) = 1
rightmax = max(1,1) = 1


Condition

leftmax < rightmax
1 < 1 → false


Water

water += 1 - 1 = 0


Move

right--
right = 10

Step 3
left = 1
right = 10

height[right] = 2


Update

rightmax = max(1,2) = 2


Condition

1 < 2 → true


Water

water += 1 - 1 = 0


Move

left = 2

Step 4
height[left] = 0

leftmax = 1
rightmax = 2


Water

1 - 0 = 1

water = 1


Move

left = 3

Step 5
height[left] = 2


Update

leftmax = max(1,2) = 2


Condition

2 < 2 → false


Water

2 - 2 = 0


Move

right = 9

Step 6
height[right] = 1

rightmax = 2


Water

2 - 1 = 1

water = 2


Move

right = 8

Step 7
height[right] = 2


Water

2 - 2 = 0


Move

right = 7

Step 8
height[right] = 3


Update

rightmax = 3


Now

leftmax = 2
rightmax = 3


Move left side.

Continue same process…

Total water collected:

6

Visual Explanation

Bars:

0 1 0 2 1 0 1 3 2 1 2 1


Water stored:

    █
  █ █
█ █ █ █


Water units:

6

Why This Works

At every position:

water = min(leftmax , rightmax) - height


But instead of computing full arrays, we track max values from both sides.

Move rule:

Move side with smaller max


Because smaller wall limits the water height.

Complexity
Time  : O(n)
Space : O(1)


Optimal solution.

If you want, I can also show the 3 different solutions of Trapping Rain Water used in interviews:

1️⃣ Brute force – O(n²)
2️⃣ Prefix/Suffix array – O(n) space
3️⃣ Two pointers – O(1) space (best)