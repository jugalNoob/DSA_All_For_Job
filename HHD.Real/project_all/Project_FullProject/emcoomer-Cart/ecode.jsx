✅ Clean Implementation (Interview Level)
🧱 Singleton Cart
class CartSingleton {
    static instance = null;

    constructor() {
        if (CartSingleton.instance) {
            return CartSingleton.instance;
        }

        this.items = [];
        CartSingleton.instance = this;
    }

    addItem(item, price) {
        this.items.push({ item, price });
    }

    getTotal() {
        return this.items.reduce((sum, i) => sum + i.price, 0);
    }
}

🧠 Strategy (Discount सिस्टम)
class NoDiscount {
    apply(total) {
        return total;
    }
}

class PercentageDiscount {
    constructor(percent) {
        this.percent = percent;
    }

    apply(total) {
        return total - (total * this.percent / 100);
    }
}

class FixedDiscount {
    constructor(amount) {
        this.amount = amount;
    }

    apply(total) {
        return total - this.amount;
    }
}

⚙️ Cart Processor (Strategy Usage)
class EcommerceCart {
    constructor(strategy) {
        this.strategy = strategy;
    }

    checkout(cart) {
        const total = cart.getTotal();
        const finalAmount = this.strategy.apply(total);

        console.log(`Total: ${total}`);
        console.log(`After Discount: ${finalAmount}`);
    }
}

🚀 Usage
// Singleton Cart
const cart1 = new CartSingleton();
const cart2 = new CartSingleton();

console.log(cart1 === cart2); // ✅ true (Singleton)

// Add items
cart1.addItem('iPhone', 1000);
cart1.addItem('Shoes', 200);

// Strategy
const discount = new PercentageDiscount(10);

// Checkout
const ecommerce = new EcommerceCart(discount);
ecommerce.checkout(cart1);

🧠 Output
true
Total: 1200
After Discount: 1080

🔥 Real-World Mapping
Concept	Real Example
Singleton	One cart per user session
Strategy	Coupon codes, offers
Observer (add later)	Notify user after checkout
🚀 Advanced (Interview Bonus)
🔁 Change Strategy Dynamically
ecommerce.strategy = new FixedDiscount(100);
ecommerce.checkout(cart1);
