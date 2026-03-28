
🔹 5. Factory Pattern (Create Payment Service Dynamically)
// services/PaymentFactory.js
const StripeAdapter = require("./StripeAdapter");
const PaypalAdapterWrapper = require("./PaypalAdapter");

class PaymentFactory {
    static create(type) {
        if (type === "stripe") return new StripeAdapter();
        if (type === "paypal") return new PaypalAdapterWrapper(new (require("./PaypalAdapter"))());
        throw new Error("Unknown payment type");
    }
}

module.exports = PaymentFactory;