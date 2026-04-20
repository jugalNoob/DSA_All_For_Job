class stripApi{

    makepayment(order){
        console.log('start strip' , order)
    }

}

class  paymentSevice{
    constructor(stripapi){
        this.stripapi=stripapi
    }

    process(order){
        this.stripapi.pay(order)
    }
}


class stripAdraped{

    constructor(strippay){
        this.strippay=strippay
    }
    pay(order){
        this.strippay.makepayment(order)
    }
}





// let test=new stripApi()
// let test1=new stripAdraped(test)
// let test2=new paymentSevice(test1)
// test2.process(10000)



class PaymentState {
    pay(order) {
        console.log('Payment started')
        // process payment using adapter
        order.paymentService.process(5000)
        order.setState(new ShippedState())
    }
}

class ShippedState {
    pay(order) {
        console.log('Order shipped')
        order.setState(new ConfirmedState())
    }
}

class ConfirmedState {
    pay(order) {
        console.log('Order confirmed')
    }
}

class Order {
    constructor(paymentService) {
        this.state = new PaymentState()
        this.paymentService = paymentService
    }

    setState(state) { this.state = state }
    next() { this.state.pay(this) }
}

// Usage
let stripeApi = new stripApi()
let adapter = new stripAdraped(stripeApi)
let paymentService = new paymentSevice(adapter)

let order = new Order(paymentService)
order.next() // Payment started + Stripe payment
order.next() // Order shipped
order.next() // Order confirmed

::::::::::::::: second row class ------------------->>

// ── Payment APIs ──
class StripeAPI {
  makePayment(amount) {
    console.log('Stripe way:', amount)
  }
}

class GoogleAPI {
  makePayment(amount) {
    console.log('Google way:', amount)
  }
}

// ── Adapter Pattern ──
class StripeAdapter {
  constructor(stripe) {
    this.stripe = stripe
  }

  process(amount) {
    this.stripe.makePayment(amount)
  }
}

class GoogleAdapter {
  constructor(google) {
    this.google = google
  }

  process(amount) {
    this.google.makePayment(amount)
  }
}

// ── Service Layer ──
class PaymentService {
  constructor(adapter) {
    this.adapter = adapter
  }

  pay(amount) {
    this.adapter.process(amount)
  }
}

// ── State Pattern ──
class PaymentState {
  pay(order) {
    console.log('Payment started')
    order.paymentService.pay(order.amount)
    order.setState(new ShippedState())
  }
}

class ShippedState {
  pay(order) {
    console.log('Order shipped')
    order.setState(new ConfirmedState())
  }
}

class ConfirmedState {
  pay(order) {
    console.log('Order confirmed')
  }
}

// ── Order ──
class Order {
  constructor(amount, paymentService) {
    this.amount = amount
    this.paymentService = paymentService
    this.state = new PaymentState() // initial state
  }

  setState(state) {
    this.state = state
  }

  next() {
    this.state.pay(this)
  }
}

// ── Usage ──
let stripe = new StripeAPI()
let stripeAdapter = new StripeAdapter(stripe)
let payService = new PaymentService(stripeAdapter)

let order = new Order(5000, payService)

order.next() // Payment started → Stripe way: 5000
order.next() // Order shipped
order.next() // Order confirmed
