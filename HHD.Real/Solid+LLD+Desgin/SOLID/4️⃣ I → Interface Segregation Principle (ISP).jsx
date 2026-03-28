4️⃣ I → Interface Segregation Principle (ISP)

👉 “Don’t force class to implement unused methods”

❌ Bad
class Machine {
  print() {}
  scan() {}
}


👉 Small printer forced to implement scan ❌

✅ Good
class Printer {
  print() {}
}

class Scanner {
  scan() {}
}

💡 Simple meaning:

👉 “Extra cheeze force mat karo”