| Feature        | Prefix        | Suffix         |
| -------------- | ------------- | -------------- |
| Direction      | Left → Right  | Right → Left   |
| Common Use     | Autocomplete  | File extension |
| Implementation | Start index 0 | Start from end |
| Complexity     | O(min(m,n))   | O(min(m,n))    |


6️⃣ Advanced Interview Twist

If interviewer asks:

"Find longest common substring (not prefix/suffix)"

That’s different problem:

Use DP

Time: O(m × n)

Very common trap.

🎯 Final Takeaway

You already mastered prefix.
Suffix is just:

"Same logic, reverse direction."