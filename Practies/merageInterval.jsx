Merge Intervals is a very famous array + sorting interview problem. Let’s understand it clearly.

1️⃣ Problem

Input intervals:

[[1,3], [2,6], [8,10], [15,18]]


Some intervals overlap.

Output after merging:

[[1,6], [8,10], [15,18]]


Because:

[1,3] overlaps with [2,6]


So merge:

[1,6]

2️⃣ Visualization

Before merge

1---3
   2------6
            8---10
                  15----18


After merge

1--------6
            8---10
                  15----18

3️⃣ Step-by-Step Idea

1️⃣ Sort intervals by start value

[1,3] [2,6] [8,10] [15,18]


2️⃣ Compare with previous interval

Rule:

if current.start <= previous.end


Then merge.

4️⃣ JavaScript Code
function mergeIntervals(intervals){

    intervals.sort((a,b)=>a[0]-b[0])

    let result=[intervals[0]]

    for(let i=1;i<intervals.length;i++){

        let last=result[result.length-1]
        let current=intervals[i]

        if(current[0] <= last[1]){
            last[1]=Math.max(last[1],current[1])
        }else{
            result.push(current)
        }
    }

    return result
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))


Output

[[1,6],[8,10],[15,18]]

5️⃣ Table Execution
Current	Last Interval	Overlap	Result
[1,3]	—	—	[[1,3]]
[2,6]	[1,3]	Yes	[[1,6]]
[8,10]	[1,6]	No	[[1,6],[8,10]]
[15,18]	[8,10]	No	[[1,6],[8,10],[15,18]]
6️⃣ Time Complexity

Sorting

O(n log n)


Loop

O(n)


Total

O(n log n)

7️⃣ Space Complexity
O(n)


For result array.

8️⃣ Real System Design Use Case

Merge intervals used in:

Calendar booking systems

Meeting scheduling

CPU scheduling

Database time ranges

Log aggregation

Example:

Meeting 1: 10-11
Meeting 2: 10:30-12


Merged:

10-12

9️⃣ Interview Trick Question

Input

[[1,4],[4,5]]


Output

[[1,5]]


Because 4 overlaps with 4.

Condition must be:

current.start <= previous.end
