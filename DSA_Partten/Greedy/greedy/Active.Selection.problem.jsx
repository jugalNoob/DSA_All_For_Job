The Activity Selection Problem is one of the most classic Greedy Algorithm problems. It teaches the core greedy idea: always pick the activity that finishes earliest. 🧠

1️⃣ Problem Statement

You are given start times and finish times of activities.

Goal:

Select maximum number of activities
that do not overlap


Example:

Start  = [1, 3, 0, 5, 8, 5]
Finish = [2, 4, 6, 7, 9, 9]


Activities:

(1,2)
(3,4)
(0,6)
(5,7)
(8,9)
(5,9)

2️⃣ Greedy Strategy

Rule:

Always select the activity that finishes earliest


Steps:

1 Sort activities by finish time
2 Select first activity
3 Select next activity whose start >= previous finish

3️⃣ Example Step-by-Step

Activities sorted by finish time:

(1,2)
(3,4)
(0,6)
(5,7)
(5,9)
(8,9)

Step 1

Pick first activity:

(1,2)

Step 2

Next start ≥ 2

(3,4)

Step 3

Next start ≥ 4

(5,7)

Step 4

Next start ≥ 7

(8,9)

Final Selected Activities
(1,2)
(3,4)
(5,7)
(8,9)


Maximum:

4 activities

4️⃣ JavaScript Implementation
function activitySelection(start, finish){

 let activities = []

 for(let i=0;i<start.length;i++){
   activities.push({start:start[i], finish:finish[i]})
 }

 activities.sort((a,b)=>a.finish-b.finish)

 let result = []
 let lastFinish = -1

 for(let activity of activities){

   if(activity.start >= lastFinish){
     result.push(activity)
     lastFinish = activity.finish
   }

 }

 return result
}

let start = [1,3,0,5,8,5]
let finish = [2,4,6,7,9,9]

console.log(activitySelection(start,finish))

5️⃣ Output
[
 {start:1, finish:2},
 {start:3, finish:4},
 {start:5, finish:7},
 {start:8, finish:9}
]


Total:

4 activities

6️⃣ Why Greedy Works Here

Key idea:

Activity finishing earliest leaves maximum room
for remaining activities


This ensures maximum selection.

7️⃣ Time Complexity

Sorting:

O(n log n)


Selection loop:

O(n)


Total:

O(n log n)

8️⃣ Real World Examples

Activity selection is similar to:

Meeting room scheduling
CPU task scheduling
Event planning
Booking systems


Example:

Conference rooms


Choose meetings that finish earliest.

9️⃣ Visual Timeline
|----A----|
      |---B---|
            |------C------|
                |----D----|
                      |--E--|


Greedy picks:

A → B → D → E

🔟 Key Greedy Pattern
1 Sort by optimal parameter
2 Pick best candidate
3 Skip overlapping items
4 Continue