🔹 Sliding Window Problems (5)

Longest Substring Without Repeating Characters

Minimum Window Substring

Longest Subarray With Sum ≤ K

Smallest Subarray With Sum ≥ Target

Maximum Sum Subarray of Size K



| #  | Problem                                        | Type               | Pattern / Technique          | Example Input                          | Example Output        | Quick Approach                                                   |
| -- | ---------------------------------------------- | ------------------ | ---------------------------- | -------------------------------------- | --------------------- | ---------------------------------------------------------------- |
| 1  | Two Sum                                        | Array              | Hash Map / Two Pointer       | [2,7,11,15], 9                         | [0,1]                 | Use hash map to store complements or two-pointer on sorted array |
| 2  | 3Sum                                           | Array              | Two Pointer                  | [-1,0,1,2,-1,-4]                       | [[-1,-1,2],[-1,0,1]]  | Sort + fix first element + two-pointer for remaining             |
| 3  | Container With Most Water                      | Array              | Two Pointer                  | [1,8,6,2,5,4,8,3,7]                    | 49                    | Start pointers at ends, move smaller height inward               |
| 4  | Move Zeroes                                    | Array              | Two Pointer                  | [0,1,0,3,12]                           | [1,3,12,0,0]          | Maintain last non-zero index, swap zeros forward                 |
| 5  | Remove Duplicates (Sorted Array)               | Array              | Two Pointer                  | [1,1,2]                                | [1,2]                 | Keep slow pointer for last unique, overwrite duplicates          |
| 6  | Majority Element                               | Array              | Boyer-Moore Voting           | [3,2,3]                                | 3                     | Count occurrence, reset when count=0                             |
| 7  | Dutch National Flag                            | Array              | Two Pointer                  | [2,0,2,1,1,0]                          | [0,0,1,1,2,2]         | Maintain low, mid, high pointers                                 |
| 8  | Maximum Subarray                               | Array              | Kadane's Algorithm           | [-2,1,-3,4,-1,2,1,-5,4]                | 6                     | Keep running sum, reset if negative, track max                   |
| 9  | Longest Substring Without Repeating Characters | String             | Sliding Window + Set         | "abcabcbb"                             | 3                     | Expand window, remove duplicates from set                        |
| 10 | Minimum Window Substring                       | String             | Sliding Window               | S="ADOBECODEBANC", T="ABC"             | "BANC"                | Expand window until all chars found, shrink left                 |
| 11 | Longest Subarray With Sum ≤ K                  | Array              | Sliding Window               | [1,2,3,4,5], 9                         | 3                     | Maintain sum, shrink left if > K, track max length               |
| 12 | Smallest Subarray With Sum ≥ Target            | Array              | Sliding Window               | [2,3,1,2,4,3], 7                       | 2                     | Maintain sum, shrink left when sum ≥ target                      |
| 13 | Maximum Sum Subarray of Size K                 | Array              | Sliding Window               | [1,4,2,10,23,3,1,0,20], 4              | 39                    | Fixed window sum, slide by adding right, removing left           |
| 14 | Activity Selection                             | Greedy             | Sort + Select                | start=[1,3,0,5,8,5], end=[2,4,6,7,9,9] | 4                     | Sort by end time, pick next compatible activity                  |
| 15 | Coin Change (Greedy)                           | Greedy             | Sort Descending              | [1,2,5], 11                            | 3                     | Pick largest coin first, reduce target                           |
| 16 | Gas Station Problem                            | Greedy             | Sum / Prefix                 | gas=[1,2,3,4,5], cost=[3,4,5,1,2]      | 3                     | Find start where total gas >= total cost                         |
| 17 | Reverse Linked List                            | Linked List        | Iterative / Recursion        | 1->2->3->4->5                          | 5->4->3->2->1         | Reverse pointers while traversing                                |
| 18 | Detect Cycle (Floyd's)                         | Linked List        | Fast & Slow Pointer          | 1->2->3->4->2                          | true                  | Move slow by 1, fast by 2, check meeting point                   |
| 19 | Remove Nth Node From End                       | Linked List        | Two Pointer                  | 1->2->3->4->5, n=2                     | 1->2->3->5            | Move fast n ahead, then move slow until end                      |
| 20 | Valid Parentheses                              | Stack              | Stack                        | "({[]})"                               | true                  | Push opening, pop when closing, check match                      |
| 21 | Next Greater Element                           | Stack              | Stack                        | [4,5,2,25]                             | [5,25,25,-1]          | Use stack to keep next greater elements                          |
| 22 | Implement LRU Cache / Hit Counter              | Design / Queue     | HashMap + Doubly Linked List | set(1,1), set(2,2), get(1)             | 1                     | Store order, remove least recently used                          |
| 23 | Binary Tree Level Order Traversal              | Tree               | BFS / Queue                  | [3,9,20,null,null,15,7]                | [[3],[9,20],[15,7]]   | Use queue, track levels                                          |
| 24 | Lowest Common Ancestor                         | Tree               | DFS                          | root=3, p=5, q=1                       | 3                     | Recurse left/right, return first node where paths meet           |
| 25 | Number of Islands                              | Graph / Grid       | DFS / BFS                    | [[1,1,0],[0,1,0],[1,0,1]]              | 3                     | Count components using DFS/BFS                                   |
| 26 | Clone Graph                                    | Graph              | DFS / BFS                    | adjacency list                         | cloned adjacency list | DFS/BFS copy nodes, track visited                                |
| 27 | Maximum Depth of Binary Tree                   | Tree               | DFS                          | [3,9,20,null,null,15,7]                | 3                     | Recurse left/right, return max +1                                |
| 28 | Climbing Stairs                                | DP                 | Recursion + Memoization      | n=5                                    | 8                     | f(n)=f(n-1)+f(n-2)                                               |
| 29 | Coin Change (DP version)                       | DP                 | Bottom-Up                    | coins=[1,2,5], amount=11               | 3                     | dp[i]=min(dp[i], dp[i-coin]+1)                                   |
| 30 | Longest Increasing Subsequence                 | DP / Binary Search | DP / Patience Sorting        | [10,9,2,5,3,7,101,18]                  | 4                     | Maintain dp[i]=length of LIS ending at i                         |
