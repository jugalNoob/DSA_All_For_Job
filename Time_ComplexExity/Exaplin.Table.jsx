
Perfect 🔥
Let’s clearly explain all time complexity patterns from the image and organize them into a clean, interview-ready table with explanation.

📊 Time Complexity Patterns (Fully Explained)

| #  | Pattern            | Code Structure         | Time Complexity | Why?               |
| -- | ------------------ | ---------------------- | --------------- | ------------------ |
| 1  | Single Loop        | `for(i=0; i<n; i++)`   | **O(n)**        | Runs n times       |
| 2  | Nested Loop (Full) | `for(i<n) for(j<n)`    | **O(n²)**       | n × n              |
| 3  | Triangular Loop    | `for(i<n) for(j<i)`    | **O(n²)**       | 1+2+3+...+n ≈ n²/2 |
| 4  | Doubling Loop      | `for(i=1; i<n; i*=2)`  | **O(log n)**    | Doubles each time  |
| 5  | Halving Loop       | `for(i=n; i>0; i/=2)`  | **O(log n)**    | Halves each time   |
| 6  | Half Range Loop    | `for(i=0; i<n/2; i++)` | **O(n)**        | Constants ignored  |
| 7  | Two Separate Loops | `for(i<n) {}` twice    | **O(n)**        | n + n = 2n → O(n)  |
| 8  | While Halving      | `while(n>0) n/=2`      | **O(log n)**    | Reduces by half    |
| 9  | Linear Recursion   | `T(n)=T(n-1)+O(1)`     | **O(n)**        | Called n times     |
| 10 | Divide & Conquer   | `T(n)=2T(n/2)+O(n)`    | **O(n log n)**  | Like Merge Sort    |
| 11 | Fibonacci Type     | `T(n)=T(n-1)+T(n-2)`   | **O(2ⁿ)**       | Exponential growth |



| Pattern You See                     | Immediately Think |
| ----------------------------------- | ----------------- |
| Single loop                         | O(n)              |
| Nested full loops                   | O(n²)             |
| Loop multiplying/dividing by 2      | O(log n)          |
| Divide into 2 subproblems           | O(n log n)        |
| Two recursive calls decreasing by 1 | O(2ⁿ)             |



🎯 Important Interview Rule

Always:

Drop constants

Drop lower order terms

Keep dominant term

Example:

O(n² + n + 10) → O(n²)

🚀 Advanced Tip

If interviewer gives tricky loop like:

for (i=0; i<n; i++)
   for (j=0; j<i*i; j++)


Total work:

1² + 2² + 3² + ... + n²
≈ n³


So O(n³)

🔥 Final Mental Model


| Growth       | Type       |
| ------------ | ---------- |
| Constant     | O(1)       |
| Linear       | O(n)       |
| Logarithmic  | O(log n)   |
| Quadratic    | O(n²)      |
| Linearithmic | O(n log n) |
| Exponential  | O(2ⁿ)      |
| Factorial    | O(n!)      |



