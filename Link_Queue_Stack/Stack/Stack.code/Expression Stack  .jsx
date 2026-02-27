1️⃣ What is an Expression Stack?

An Expression Stack is a stack used to evaluate or process mathematical expressions.

There are two main applications:

Infix to Postfix / Prefix Conversion

Postfix / Prefix Expression Evaluation

Example:

Infix: 3 + 4 * 2 / (1 - 5)

Postfix: 3 4 2 * 1 5 - / +

Evaluation can be done using a stack.

Key Idea:

Operands are pushed onto a stack.

Operators pop operands, perform computation, then push the result back.

2️⃣ Postfix Expression Evaluation Using Stack (JavaScript)
function evaluatePostfix(expr) {
  const stack = [];

  for (let i = 0; i < expr.length; i++) {
    const token = expr[i];

    if (!isNaN(token)) {
      // Operand → push onto stack
      stack.push(Number(token));
    } else {
      // Operator → pop two operands
      const b = stack.pop();
      const a = stack.pop();
      let result;

      switch (token) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = a / b; break;
        default: throw new Error("Invalid operator");
      }

      // Push result back
      stack.push(result);
    }
  }

  return stack.pop();
}

// Example usage
const postfixExpr = ['2', '3', '1', '*', '+', '9', '-']; // corresponds to 2 + 3 * 1 - 9
console.log("Result:", evaluatePostfix(postfixExpr)); // Result: -4

3️⃣ Infix to Postfix Conversion Using Stack
function infixToPostfix(expr) {
  const stack = [];
  const output = [];
  const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };

  for (let token of expr) {
    if (!isNaN(token)) {
      output.push(token); // Operand
    } else if (token === '(') {
      stack.push(token);
    } else if (token === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        output.push(stack.pop());
      }
      stack.pop(); // Remove '('
    } else {
      // Operator
      while (stack.length && precedence[stack[stack.length - 1]] >= precedence[token]) {
        output.push(stack.pop());
      }
      stack.push(token);
    }
  }

  while (stack.length) {
    output.push(stack.pop());
  }

  return output;
}

// Example
const infixExpr = ['(', '2', '+', '3', '*', '1', ')', '-', '9'];
console.log("Postfix:", infixToPostfix(infixExpr)); // Postfix: 2 3 1 * + 9 -

✅ Key Points

Expression Stack is essential for evaluating arithmetic expressions.

Operands are pushed onto the stack.

Operators pop operands, compute, then push the result.

Supports Infix → Postfix → Evaluation efficiently.

Time Complexity: O(n) for evaluation or conversion.