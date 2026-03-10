
| Pattern                      | Example Problem                     | Probability Math                    |
| ---------------------------- | ----------------------------------- | ----------------------------------- |
| Random array selection       | Probability picked element > 5      | `count/total`                       |
| Hash collisions              | Probability collision in hash table | `1 - P(no collision)`               |
| Randomized algorithms        | QuickSort expected comparisons      | `sum(Pairs) * probability compared` |
| “At least one” problem       | At least one duplicate in array     | `1 - P(all unique)`                 |
| Sampling without replacement | Pick k elements unique              | `nCr` combinatorics                 |



✅ What This File Covers

1:: Basic probability (arrays, dice, coin)

2:: Complement rule (1 - P) for “at least one”

3:: Expected value computation

4:: Binomial probability (nCr * p^k * (1-p)^(n-k))

5:: Randomized algorithms example (QuickSort comparisons)

6:: Hash collision probability

7:: Probability using loops and combinatorics




✅ Key Takeaways in Code

Count favorable outcomes → .filter(), factorial(), combinations

Count total outcomes → Math.pow() for multiple picks

Divide favorable by total → probability

Use complement rule for “at least one”

Expected value → sum(value * probability)

Randomized algorithm math translates directly to code