1. The "Contiguous" Family (Must be connected)
When you take a slice out of a data structure without breaking it apart or skipping elements, it gets a "Sub" prefix:


Data Structure,"The ""Slice"" Name",Example / Description
String,Substring,"""cat"" is a substring of ""scatter"""
1D Array,Subarray,"[2, 3] is a subarray of [1, 2, 3, 4]"
2D Array,Submatrix / Subgrid,A 2x2 square inside a 4x4 Sudoku board
Tree,Subtree,A parent node and all of its children/descendants
Graph,Subgraph,A smaller set of vertices and edges from a larger network





Yes 👍 your table is correct. In DSA every data structure has a different “slice” name (a smaller part of the structure). I’ll explain each one clearly with examples.

1️⃣ String → Substring

A substring is a continuous part of a string.

Example string

"scatter"


Possible substrings

"sca"
"cat"
"att"
"ter"


Valid example

"cat" ✔


Invalid

"ctr" ❌ (not continuous)


Example code

let str = "scatter"
console.log(str.substring(1,4)) // cat


Common interview problems

Longest substring without repeating characters

Minimum window substring

Palindromic substring

2️⃣ 1D Array → Subarray

A subarray is a continuous part of an array.

Example

[1,2,3,4]


Subarrays

[1]
[2]
[1,2]
[2,3]
[3,4]
[1,2,3]


Invalid

[1,3] ❌


Example code

let arr=[1,2,3,4]
console.log(arr.slice(1,3)) // [2,3]


Common problems

Maximum subarray sum

Longest subarray with sum K

Sliding window problems

3️⃣ 2D Array → Submatrix / Subgrid

A submatrix is a continuous block inside a matrix.

Example matrix

1 2 3
4 5 6
7 8 9


Possible submatrix

5 6
8 9


Size = 2×2

Common problems

Maximum sum submatrix

Largest square of 1s

Prefix sum matrix

4️⃣ Tree → Subtree

A subtree is a node and all its children.

Example tree

      10
     /  \
    5   20
   / \
  3   7


Subtree example

    5
   / \
  3   7


This whole section is a subtree of node 5.

Common problems

Check if tree is subtree

Sum of subtree

Largest BST subtree

5️⃣ Graph → Subgraph

A subgraph is a smaller graph taken from a bigger graph.

Example graph

A --- B
|     |
C --- D


Subgraph

A --- B
|
C


Nodes: A,B,C
Edges: (A-B),(A-C)

Common problems

Connected components

Network clustering

Community detection

6️⃣ Easy Memory Trick (Very Important)
String → Substring
Array → Subarray
Matrix → Submatrix
Tree → Subtree
Graph → Subgraph


Everything means:

A smaller continuous or connected part of the main structure

7️⃣ Interview Trick (Very Useful)

If interviewer says:

longest substring


➡ String problem

If interviewer says

longest subarray


➡ Array problem

If interviewer says

largest square / grid


➡ Matrix problem

If interviewer says

subtree


➡ Tree problem

✅ Golden rule

1D → Subarray
2D → Submatrix
String → Substring
Tree → Subtree
Graph → Subgraph


If you want, I can also show 10 important DSA patterns using these (used in FAANG interviews). This will make DSA much easier to recognize.