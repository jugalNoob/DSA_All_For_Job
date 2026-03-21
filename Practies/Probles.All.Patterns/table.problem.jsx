| #  | Topic                    | Problem                                  | Technique / Type           | Time Complexity  | Example Input / Output                        |
| -- | ------------------------ | ---------------------------------------- | -------------------------- | ---------------- | --------------------------------------------- |
| 1  | Array                    | Maximum subarray sum with size ≥ k       | Sliding window + DP        | O(n)             | `[1,2,3,−2,5], k=2 → 9`                       |
| 2  | Array                    | Maximum product subarray                 | DP                         | O(n)             | `[2,3,−2,4] → 6`                              |
| 3  | Array                    | Subarray sum equals k (with negatives)   | Prefix sum + Hash Map      | O(n)             | `[1,2,3,−2,5], k=3 → 2`                       |
| 4  | Array                    | Next permutation                         | In-place                   | O(n)             | `[1,2,3] → [1,3,2]`                           |
| 5  | Array                    | Sliding window maximum                   | Monotonic deque            | O(n)             | `[1,3,−1,−3,5,3,6,7], k=3 → [3,3,5,5,6,7]`    |
| 6  | Array                    | Longest subarray with sum divisible by k | Hash Map                   | O(n)             | `[2,7,6,1,4,5], k=3 → 4`                      |
| 7  | Array                    | Median of two sorted arrays              | Binary search              | O(log(min(n,m))) | `[1,3],[2] → 2`                               |
| 8  | Array                    | Count of subarrays with XOR = K          | Trie / Prefix XOR          | O(n)             | `[4,2,2,6,4], K=6 → 4`                        |
| 9  | Array                    | Maximum sum rectangle in 2D matrix       | Kadane + 2D prefix         | O(n²*m)          | `matrix=[[1,2],[−3,4]] → 4`                   |
| 10 | String                   | Longest palindromic substring            | Expand around center / DP  | O(n²)            | `"babad" → "bab"`                             |
| 11 | String                   | Palindrome pairs                         | Trie / Hash Map            | O(n*k²)          | `["bat","tab","cat"] → [[0,1],[1,0]]`         |
| 12 | String                   | Minimum window substring                 | Sliding window             | O(n)             | `"ADOBECODEBANC", "ABC" → "BANC"`             |
| 13 | String                   | Word search II                           | Trie + Backtracking        | O(n*m*4^k)       | `board + words → found words`                 |
| 14 | String                   | Decode string (nested)                   | Stack                      | O(n)             | `"3[a2[c]]" → "accaccacc"`                    |
| 15 | Linked List              | Merge k sorted lists                     | Min Heap                   | O(N log k)       | `[[1,4,5],[1,3,4],[2,6]] → [1,1,2,3,4,4,5,6]` |
| 16 | Linked List              | Copy list with random pointer            | Hash Map / Interweaving    | O(n)             | `[Node1→Node2, random...]` → deep copy        |
| 17 | Linked List              | Reverse nodes in k-group                 | Iterative/Recursive        | O(n)             | `[1→2→3→4→5], k=2 → [2→1→4→3→5]`              |
| 18 | Linked List              | LRU Cache using DLL + HashMap            | Doubly Linked List + Map   | O(1) per op      | `LRU get/set`                                 |
| 19 | Stack                    | Largest rectangle in histogram           | Monotonic stack            | O(n)             | `[2,1,5,6,2,3] → 10`                          |
| 20 | Stack                    | Trapping Rain Water                      | Two-pointer / Stack        | O(n)             | `[0,1,0,2,1,0,1,3,2,1,2,1] → 6`               |
| 21 | Heap                     | Sliding window median                    | Min-Heap + Max-Heap        | O(n log k)       | `[1,3,−1,−3,5,3,6,7], k=3 → [1,−1,−1,3,5,6]`  |
| 22 | Heap                     | Top K frequent elements                  | Heap / Bucket Sort         | O(n log k)       | `[1,1,1,2,2,3], k=2 → [1,2]`                  |
| 23 | Hashing                  | Subarray sum divisible by k              | Prefix sum + Hash Map      | O(n)             | `[2,7,6,1,4,5], k=3 → 4`                      |
| 24 | Bit Manipulation         | Single number II (all thrice)            | Bitwise counting           | O(n)             | `[0,1,0,1,0,1,99] → 99`                       |
| 25 | Bit Manipulation         | Subsets / power set using bitmask        | Bitmasking                 | O(n*2^n)         | `[1,2,3] → all subsets`                       |
| 26 | Recursion / Backtracking | N-Queens II                              | Backtracking               | O(n!)            | `n=4 → 2 solutions`                           |
| 27 | Recursion / Backtracking | Word Search II                           | Trie + DFS                 | O(n*m*4^k)       | board + words → found words                   |
| 28 | Recursion / Backtracking | Sudoku Solver                            | Backtracking               | O(9^(n²))        | Solve 9x9 board                               |
| 29 | DP                       | Longest Increasing Subsequence           | DP + Binary Search         | O(n log n)       | `[10,9,2,5,3,7,101,18] → 4`                   |
| 30 | DP                       | Edit distance                            | DP                         | O(n*m)           | `"kitten","sitting" → 3`                      |
| 31 | DP                       | Maximum sum rectangle in 2D              | Kadane + DP                | O(n²*m)          | matrix example                                |
| 32 | DP                       | Stock buy-sell with cooldown             | DP                         | O(n)             | `[1,2,3,0,2] → 3`                             |
| 33 | DP                       | Palindromic subsequence                  | DP                         | O(n²)            | `"bbbab" → 4`                                 |
| 34 | Graph                    | Dijkstra’s shortest path                 | Min Heap / Graph           | O(E log V)       | Weighted graph shortest path                  |
| 35 | Graph                    | Bellman-Ford shortest path               | DP                         | O(V*E)           | Weighted graph with negative edges            |
| 36 | Graph                    | Floyd-Warshall all pairs                 | DP                         | O(V³)            | Distance matrix                               |
| 37 | Graph                    | Minimum spanning tree (Prim/Kruskal)     | Greedy + Heap / Union-Find | O(E log V)       | MST of weighted graph                         |
| 38 | Graph                    | Topological sort with cycle detection    | DFS / Kahn’s               | O(V+E)           | DAG ordering / detect cycles                  |
| 39 | Graph                    | Strongly connected components            | Kosaraju / Tarjan          | O(V+E)           | SCC in directed graph                         |
| 40 | Graph                    | Number of islands                        | BFS/DFS                    | O(n*m)           | `grid=[[1,1,0],[0,1,0],[1,0,1]] → 3`          |
| 41 | Graph                    | Network flow (max flow)                  | Edmonds-Karp               | O(V*E²)          | Flow from source to sink                      |
| 42 | Tree / BST               | Lowest common ancestor                   | DFS / BST property         | O(n)             | `[BST], nodes 4 & 5 → 3`                      |
| 43 | Tree / BST               | Serialize / Deserialize tree             | DFS / BFS                  | O(n)             | `[1,2,3,null,4] → string`                     |
| 44 | Tree / BST               | Flatten binary tree to linked list       | DFS                        | O(n)             | `[1,2,5,3,4,null,6] → 1→2→3→4→5→6`            |
| 45 | Tree / BST               | Kth smallest / largest element           | DFS / BST property         | O(n)             | BST + k=3 → value                             |
| 46 | Tree / Segment tree      | Range sum query                          | Segment tree               | O(log n)         | Update/query range                            |
| 47 | Matrix                   | Rotate 90° / in place                    | Layer-wise swap            | O(n²)            | `[[1,2],[3,4]] → [[3,1],[4,2]]`               |
| 48 | Matrix                   | Max sum submatrix                        | Kadane + 2D prefix         | O(n²*m)          | Matrix example                                |
| 49 | Pattern / Intervals      | Merge intervals                          | Sort + merge               | O(n log n)       | `[[1,3],[2,6]] → [[1,6]]`                     |
| 50 | Pattern / Union-Find     | Detect cycles / connected components     | Union-Find                 | O(α(n))          | Graph example                                 |
