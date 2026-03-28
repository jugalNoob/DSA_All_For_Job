

// // ── State Classes ──
// class Payment {
//     pay(order) {
//         console.log('Payment started')
//         order.setState(new Shipped())
//     }
// }

// class Shipped {
//     pay(order) {
//         console.log('Order shipped')
//         order.setState(new Confirmed())
//     }
// }

// class Confirmed {
//     pay(order) {
//         console.log('Order confirmed')
//     }
// }

// // ── Context Class ──
// class Order {
//     constructor() {
//         this.state = new Payment() // initial state
//     }

//     setState(state) {
//         this.state = state
//     }

//     next() {
//         this.state.pay(this)
//     }
// }

// // ── Usage ──
// let order = new Order()

// order.next() // Payment started
// order.next() // Order shipped
// order.next() // Order confirmed
// order.next() // Order confirmed (remains in final state)
