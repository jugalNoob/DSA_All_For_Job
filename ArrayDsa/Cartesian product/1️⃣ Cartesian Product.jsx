Excellent question 👌🔥
This is a very common interview confusion area.

Let’s clearly separate:

Cartesian Product
Permutations
Combinations

With:

Definition

Formula

Example

Code

Complexity

When to use

1️⃣ Cartesian Product
📌 Definition

All possible ordered pairs between two (or more) different sets.

If:

A = [1,2]
B = ["a","b"]


Then:

A × B =
[ [1,"a"], [1,"b"], [2,"a"], [2,"b"] ]

🔢 Formula

If:

|A| = n
|B| = m


Total = n × m

✅ Code (Two Arrays)
function cartesianProduct(arr1, arr2) {
    const result = [];

    for (let a of arr1) {
        for (let b of arr2) {
            result.push([a, b]);
        }
    }

    return result;
}

console.log(cartesianProduct([1,2], ["a","b"]));

⏱ Complexity

Time: O(n × m)
Space: O(n × m)

🎯 When Used?

SQL joins

Product variants

Multi-parameter testing

Feature combination