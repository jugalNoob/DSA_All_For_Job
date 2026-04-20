2. Open/Closed Principle (OCP)
"Open for extension, closed for modification"
→ You should be able to add new behavior without changing existing code
JavaScript// ❌ Bad
class Shape {
    constructor(type) {
        this.type = type;
    }
    
    calculateArea() {
        if (this.type === 'circle') return Math.PI * r * r;
        if (this.type === 'rectangle') return width * height;
        // Every new shape requires modifying this class → Violation
    }
}

// ✅ Good - Using Inheritance + Polymorphism
class Shape {
    calculateArea() {
        throw new Error("Method must be implemented");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    
    calculateArea() {
        return this.width * this.height;
    }
}

// Now you can add Triangle, Square etc. without modifying existing code