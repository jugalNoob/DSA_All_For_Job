Great! Let's bring XOR (Exclusive OR) into the mix.

In the order of operations, XOR (^) sits right in the middle—after AND but before OR.

👑 The Updated Hierarchy
NOT (~)

AND (&)

XOR (^)

OR (|)

🔍 How XOR works
XOR is like a "difference finder." It returns 1 only if the bits are different. If they are the same (both 0 or both 1), it returns 0.

Using your numbers again:

ns = 7 (111)

n = 2 (010)

Plaintext
  1 1 1  (7)
^ 0 1 0  (2)
---------
  1 0 1  => Result: 5



  🧪 Seeing the Precedence in Action
If we run a line of code with all three, watch how the engine picks them apart:

JavaScript
// Expression: 7 | 2 ^ 2 & 1
AND first: It calculates 2 & 1. (Binary 010 & 001 is 0)

XOR next: It takes that result and XORs it with the next value: 2 ^ 0. (Result is 2)

OR last: Finally, it does 7 | 2. (Binary 111 | 010 is 111)

Final Result: 7