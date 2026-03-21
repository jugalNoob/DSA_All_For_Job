Array:  [2, 2, 1, 1, 2, 3, 2]

Step       Element    count    candidate    Explanation
0          -          0        null
1          2          1        2            new candidate
2          2          2        2            same → +1
3          1          1        2            different → -1
4          1          0        2            different → -1 → count=0
5          2          1        2            count was 0 → new candidate
6          3          0        2            different → -1
7          2          1        2            count was 0 → new candidate

Final candidate = 2  ← correct (appears 4 times > 7/2)
Final candidate = 2  ← correct (appears 4 times > 7/2)




[3, 1, 3, 3, 2]

Step    Element    count    candidate
1       3          1        3
2       1          0        3
3       3          1        3           ← count was 0, new candidate
4       3          2        3
5       2          1        3

→ candidate = 3 (appears 3 times > 5/2) → correct



Array:  [2, 2, 1, 1, 2, 3, 2]

Step       Element    count    candidate    Explanation
0          -          0        null
1          2          1        2            new candidate
2          2          2        2            same → +1
3          1          1        2            different → -1
4          1          0        2            different → -1 → count=0
5          2          1        2            count was 0 → new candidate
6          3          0        2            different → -1
7          2          1        2            count was 0 → new candidate

Final candidate = 2  ← correct (appears 4 times > 7/2)

