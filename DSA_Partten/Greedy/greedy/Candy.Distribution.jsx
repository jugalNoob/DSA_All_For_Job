The Candy Distribution Problem is a very famous Greedy Algorithm problem asked in coding interviews. 🍬

1️⃣ Problem Statement

You have N children standing in a line.

Each child has a rating.

Rules:

1️⃣ Every child must get at least 1 candy
2️⃣ If a child has higher rating than neighbors, they must get more candies

Goal:

Give minimum total candies

2️⃣ Example

Ratings:

[1, 0, 2]


Children:

Child0  Child1  Child2
  1       0       2

Step-by-step solution

Initial candies:

[1,1,1]


Check rule:

rating[0] > rating[1]
1 > 0


Child0 must have more candy.

Now:

[2,1,1]


Next:

rating[2] > rating[1]
2 > 0


Child2 must have more.

Final candies:

[2,1,2]


Total candies:

5

3️⃣ Another Example

Ratings:

[1,2,2]


Solution:

[1,2,1]


Total:

4

4️⃣ Greedy Idea

We must check both directions.

Left → Right
Right → Left


Because neighbors can affect both sides.

5️⃣ Algorithm Steps
1 Create candy array with 1 candy each
2 Traverse left → right
3 Traverse right → left
4 Sum candies

6️⃣ JavaScript Implementation
function candy(ratings){

 let n = ratings.length
 let candies = new Array(n).fill(1)

 // left → right
 for(let i=1;i<n;i++){
   if(ratings[i] > ratings[i-1]){
     candies[i] = candies[i-1] + 1
   }
 }

 // right → left
 for(let i=n-2;i>=0;i--){
   if(ratings[i] > ratings[i+1]){
     candies[i] = Math.max(candies[i], candies[i+1] + 1)
   }
 }

 let total = candies.reduce((sum,c)=>sum+c,0)

 return total
}

console.log(candy([1,0,2]))


Output:

5

7️⃣ Visual Example

Ratings:

1  3  4  5  2


Left pass:

1  2  3  4  1


Right pass:

1  2  3  4  1


Total candies:

11

8️⃣ Why Greedy Works

Greedy rule:

If rating increases → increase candy


But must check both directions to satisfy neighbors.

9️⃣ Time Complexity
O(n)


Space:

O(n)

🔟 Real Life Example

Imagine:

Teacher giving rewards to students


Rule:

Better performance → more reward


But everyone gets at least one.

1️⃣1️⃣ Interview Difficulty

This problem appears in:

Google
Amazon
Facebook
Microsoft


Difficulty:

Medium


✅ Since you're practicing Greedy algorithms, the next very important interview problems are:

1 Fractional Knapsack
2 Jump Game
3 Gas Station Problem
4 Minimum Platforms
5 Job Scheduling with Deadlines