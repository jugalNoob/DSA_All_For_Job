🧠 Bonus (Hidden Behavior)
class Test {
  #x = 10;
}

const t = new Test();

console.log(Object.keys(t)); // []


👉 #x is not even visible in object keys!

✅ Final One-Line
_balance → fake private (convention)
#balance → real private (enforced)