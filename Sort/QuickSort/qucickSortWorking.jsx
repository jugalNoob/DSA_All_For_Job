Gemini said
The Pivot is the most important player in QuickSort. Think of the pivot as a Judge or a Traffic Cop.

Its only job is to stand in the middle and tell every other number where to go.

1. The Job of the Pivot
The pivot asks every number one simple question:

"Are you smaller than me, or larger than me?"

If Smaller: Go to the left room.

If Larger: Go to the right room.

2. How it works in your code (Step-by-Step)
Let's look at your specific example: [9, 2, 1].

Step A: The Selection
Your code picks the last number as the pivot:
let pivot = data[data.length - 1]

In [9, 2, 1], the pivot is 1.

Step B: The Judgment (The Loop)
Now, the Pivot (1) judges the other numbers:

Pivot looks at 9: "Is 9 < 1?"

No. So 9 goes to the Right (Larger) pile.

Pivot looks at 2: "Is 2 < 1?"

No. So 2 goes to the Right (Larger) pile.

Step C: The Final Placement
Once everyone has been judged, the Pivot places itself exactly in the middle of the two groups.

Left Pile (Smaller): [] (Empty)

Pivot: 1

Right Pile (Larger): [9, 2]

The code combines them: [...left, pivot, ...right].

3. The "Secret" Power of the Pivot
Here is the most important thing to understand:

Once a pivot is processed, it is locked in its final, correct position forever.

In your example [9, 2, 1]:

After the first round, the array looks like this: 1, [9, 2].

The number 1 is now at index 0. This is its permanent home. It will never move again. The algorithm now ignores it and focuses entirely on sorting the remaining mess [9, 2].