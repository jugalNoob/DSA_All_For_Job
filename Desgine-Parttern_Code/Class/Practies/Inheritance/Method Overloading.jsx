3️⃣ Method Overloading (Not native in JS)

Meaning:

Overloading is when a class has multiple methods with the same name but different parameters.

JavaScript does NOT support method overloading natively (unlike Java or C++).

But you can achieve it using default parameters or checking arguments.

Example in JS:

class Calculator {
    add(a, b, c) {
        if(c !== undefined){
            return a + b + c;
        }
        return a + b;
    }
}

let calc = new Calculator();

console.log(calc.add(2, 3));       // 5
console.log(calc.add(2, 3, 4));    // 9


Same method name (add) works differently