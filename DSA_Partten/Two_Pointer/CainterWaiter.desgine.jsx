Here is a simple visualization diagram interviewers like for the Container With Most Water problem.

Array:

[1,8,6,2,5,4,8,3,7]


Index:

 0 1 2 3 4 5 6 7 8

1️⃣ Visual Height Diagram
8 |        |           |     
7 |        |           |     |
6 |        |     |     |     |
5 |        |     |     |     |
4 |        |     |     |     |
3 |        |     |     |     |     |
2 |        |     |  |  |     |     |
1 |  |     |     |  |  |  |  |  |  |
    --------------------------------
     1  8  6  2  5  4  8  3  7


Each vertical line is container wall height.

2️⃣ Best Container (Maximum Water)

Best walls:

index 1 → height 8
index 8 → height 7


Visualization:

        |                       |
        |                       |
        |                       |
        |                       |
        |                       |
        |                       |
        |                       |
        |_______________________|
         <------- width ------->


Width

8 - 1 = 7


Height

min(8 , 7) = 7


Area

7 × 7 = 49

3️⃣ Why Move Smaller Pointer

Example:

start = 1 (8)
end   = 8 (7)


Container height:

min(8,7) = 7


If we move bigger wall (8):

height still limited by 7


So area cannot increase.

But if we move smaller wall, we might find taller wall.

That is why algorithm works.

4️⃣ Final Two Pointer Flow
start →            ← end
[1,8,6,2,5,4,8,3,7]

move smaller pointer each step

5️⃣ Interview One-Line Answer

You can say:

“We start with two pointers at both ends.
Calculate area using min(height) × width.
Move the pointer with the smaller height because it limits water capacity.”

Time Complexity

O(n)


Space Complexity

O(1)
