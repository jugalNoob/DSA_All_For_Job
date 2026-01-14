✅ Linear Data Structures
In these structures, elements are arranged in a sequential manner (one after another).


| Data Structure  | Description                            | Real-World Example                         |
| --------------- | -------------------------------------- | ------------------------------------------ |
| **Array**       | Fixed-size collection of similar items | List of scores: `[10, 20, 30, 40]`         |
| **Linked List** | Elements (nodes) linked via pointers   | Music playlist (each song points to next)  |
| **Stack**       | Last-In-First-Out (LIFO)               | Undo feature (last action is undone first) |
| **Queue**       | First-In-First-Out (FIFO)              | Printer queue (first doc printed first)    |
| **Deque**       | Double-ended queue                     | Browser history (can go forward/backward)  |



| Data Structure     | Description                                                             | Real-World Examples                                                        | Common Use Cases                                                           |
| ------------------ | ----------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Array**          | Fixed-size collection of elements stored at contiguous memory locations | - Student marks list<br>- RGB color values<br>- Days of the week           | - Index-based access<br>- Lookups<br>- Static data storage                 |
| **Linked List**    | Elements connected by pointers (dynamic size)                           | - Music or video playlist<br>- Train bogies<br>- Chain of commands         | - Insertion/deletion at any position<br>- Dynamic memory allocation        |
| **Stack**          | Last-In-First-Out (LIFO)                                                | - Undo/Redo in editors<br>- Call stack in recursion<br>- Balancing symbols | - Reversing data<br>- Expression evaluation<br>- Backtracking (e.g., maze) |
| **Queue**          | First-In-First-Out (FIFO)                                               | - Ticket counter line<br>- Task scheduling<br>- CPU job queue              | - Buffering (e.g., I/O, stream data)<br>- Thread/Process management        |
| **Deque**          | Double-ended queue (insert/delete both ends)                            | - Browser history<br>- Palindrome checking<br>- Sliding window algorithm   | - Caching systems (LRU Cache)<br>- Scheduling problems                     |
| **Circular Queue** | Last position is connected to the first                                 | - Traffic light rotation<br>- Round-robin scheduling                       | - Memory-efficient queue<br>- Circular buffer implementations              |
| **Dynamic Array**  | Grows/shrinks as needed (like `ArrayList`, `Vector`)                    | - JavaScript arrays<br>- Python lists<br>- Shopping cart list              | - Flexible data storage<br>- Reallocation and dynamic resizing             |
| **Priority Queue** | Elements served based on priority                                       | - Hospital emergency rooms<br>- CPU task priority                          | - Task management<br>- Dijkstra’s algorithm<br>- Huffman coding            |


| Data Structure     | Description                                                             | Real-World Examples                                                        | Common Use Cases                                                           |
| ------------------ | ----------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Array**          | Fixed-size collection of elements stored at contiguous memory locations | - Student marks list<br>- RGB color values<br>- Days of the week           | - Index-based access<br>- Lookups<br>- Static data storage                 |
| **Linked List**    | Elements connected by pointers (dynamic size)                           | - Music or video playlist<br>- Train bogies<br>- Chain of commands         | - Insertion/deletion at any position<br>- Dynamic memory allocation        |
| **Stack**          | Last-In-First-Out (LIFO)                                                | - Undo/Redo in editors<br>- Call stack in recursion<br>- Balancing symbols | - Reversing data<br>- Expression evaluation<br>- Backtracking (e.g., maze) |
| **Queue**          | First-In-First-Out (FIFO)                                               | - Ticket counter line<br>- Task scheduling<br>- CPU job queue              | - Buffering (e.g., I/O, stream data)<br>- Thread/Process management        |
| **Deque**          | Double-ended queue (insert/delete both ends)                            | - Browser history<br>- Palindrome checking<br>- Sliding window algorithm   | - Caching systems (LRU Cache)<br>- Scheduling problems                     |
| **Circular Queue** | Last position is connected to the first                                 | - Traffic light rotation<br>- Round-robin scheduling                       | - Memory-efficient queue<br>- Circular buffer implementations              |
| **Dynamic Array**  | Grows/shrinks as needed (like `ArrayList`, `Vector`)                    | - JavaScript arrays<br>- Python lists<br>- Shopping cart list              | - Flexible data storage<br>- Reallocation and dynamic resizing             |
| **Priority Queue** | Elements served based on priority                                       | - Hospital emergency rooms<br>- CPU task priority                          | - Task management<br>- Dijkstra’s algorithm<br>- Huffman coding            |




✅ Non-Linear Data Structures — Full Table


| Data Structure                         | Description                                                             | Real-World Examples                                                        | Common Use Cases                                                            |
| -------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Tree**                               | Hierarchical structure with a root and children nodes                   | - File system<br>- Family tree<br>- XML/HTML document structure            | - Hierarchical storage<br>- Database indexing (B-trees)<br>- Routing tables |
| **Binary Tree**                        | Each node has at most two children                                      | - Decision trees<br>- Expression trees<br>- Game AI trees                  | - Tree traversal algorithms<br>- Expression parsing                         |
| **Binary Search Tree (BST)**           | A binary tree with ordered nodes                                        | - Dictionary implementation<br>- Sorted phonebook                          | - Efficient search, insert, delete operations                               |
| **Heap** (Min/Max)                     | Complete binary tree where parent is smaller/greater than children      | - Priority queue<br>- CPU task scheduler<br>- Leaderboard rankings         | - Heap sort<br>- Priority scheduling<br>- Median finding                    |
| **Trie**                               | Tree-like structure for storing strings (prefix tree)                   | - Auto-complete<br>- Spell checker<br>- IP routing                         | - Fast prefix search<br>- Word dictionary<br>- T9 predictive text           |
| **Graph**                              | Set of nodes (vertices) connected by edges (can be directed/undirected) | - Social network<br>- Maps and navigation<br>- Internet (web links)        | - Pathfinding (Dijkstra, A\*)<br>- Networking<br>- Dependency resolution    |
| **Directed Graph (Digraph)**           | Graph with one-way edges                                                | - Task scheduling<br>- Twitter (followers)<br>- Prerequisite relationships | - Topological sorting<br>- Flow networks                                    |
| **Undirected Graph**                   | Graph with bi-directional edges                                         | - Facebook (mutual friends)<br>- Road maps                                 | - Connected components<br>- Social graph modeling                           |
| **Adjacency Matrix/List**              | Storage models for graphs                                               | - Matrix: For dense graphs<br>- List: For sparse graphs                    | - Used in graph traversal algorithms (BFS, DFS)                             |
| **N-ary Tree**                         | A tree where nodes can have more than two children                      | - DOM tree<br>- Chess game state tree                                      | - Parsing general hierarchies<br>- Game moves tree                          |
| **Segment Tree**                       | Binary tree for storing intervals or segments                           | - Range queries (sum/min/max)<br>- Histogram-based algorithms              | - Range sum/min/max query<br>- Dynamic programming                          |
| **Fenwick Tree** (Binary Indexed Tree) | Optimized tree for cumulative frequency tables                          | - Counting inversions<br>- Frequency tables<br>- Live leaderboard updates  | - Efficient prefix sum updates                                              |
