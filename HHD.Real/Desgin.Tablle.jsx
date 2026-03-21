Quick Decision Cheat-Sheet (interview-gold):

Many constructors / optionals → Builder
Family of related objects → Abstract Factory
One object creation logic → Factory
Algorithms swap → Strategy
Internal state changes behavior + transitions → State
Request as object (undo, queue, log) → Command
Incompatible interface → Adapter
Add features dynamically → Decorator
Control access / lazy / remote → Proxy
Abstraction × Implementation independent → Bridge
Tree structure uniform access → Composite
One instance → Singleton (but prefer DI)


#,Scenario description,Most common wrong / naive answers,Strong / expected answer + reasoning
1,"Different payment methods: UPI, Credit Card, Wallet, NetBanking, selected at runtime",Strategy + Factory,Strategy (main behavior) + Factory (creation) is the most common clean combo. Abstract Factory only if you also need families (receipt + validator + logger per gateway)
2,"Same question, but each gateway also needs different receipt formats + fraud check rules",Strategy,Abstract Factory becomes attractive here (family: PaymentProcessor + ReceiptGenerator + FraudChecker)
3,Order can be in states: Created → PaymentPending → Paid → Shipped → Delivered → Cancelled. Cancel behavior changes completely depending on state.,Strategy,State pattern – clearest intent when behavior + allowed transitions change together
4,You want to support adding new payment method without changing existing code,Just “Strategy”,Strategy + Open–Closed via configuration / DI. Mention Factory for creation + Registry of strategies.
5,“What if we also want to add promo-code / coupon / discount logic?”,Decorator,Decorator is good if discounts stack (10% + free shipping + ₹50 off). Strategy if mutually exclusive.