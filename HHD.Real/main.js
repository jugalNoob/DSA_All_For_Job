

class UpiPayment  {
  pay(amount) {
    console.log("UPI payment:", amount);
  }
}

class GooglePayment {
  pay(amount) {
    console.log("Google Pay payment:", amount);
  }
}



class Adapterpattern{
    constructor(payprocess){
        this.payprocess=payprocess 
    }

     
    process(order){
        this.payprocess.pay(order)
    }
}



class thiredservice
{

    constructor(thirdparty){
        this.thirdparty=thirdparty
    }

    startpay(order){
        this.thirdparty.process(order)
    }

}


let link=new UpiPayment()
let link1=new Adapterpattern(link)

let link2=new thiredservice(link1)
link2.startpay(10000)



class PaymentMethod {
  pay(amount) {
    throw new Error("Must implement pay()");
  }
}

class UpiPayment extends PaymentMethod {
  pay(amount) {
    console.log("UPI payment:", amount);
  }
}

class GooglePayment extends PaymentMethod {
  pay(amount) {
    console.log("Google Pay payment:", amount);
  }
}



class PaymentContext {
  constructor(paymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  setMethod(method) {
    this.paymentMethod = method;
  }

  pay(amount) {
    this.paymentMethod.pay(amount);
  }
}


let upi = new UpiPayment();
let payment = new PaymentContext(upi);

payment.pay(10000);

// switch strategy
payment.setMethod(new GooglePayment());
payment.pay(5000);




// // Subject / Publisher
// class NewsPublisher {
//     constructor() {
//         this.subscribers = []; // List of observers
//     }

//     // Subscribe an observer
//     subscribe(observer) {
//         this.subscribers.push(observer);
//     }

//     // Unsubscribe an observer
//     unsubscribe(observer) {
//         this.subscribers = this.subscribers.filter(sub => sub !== observer);
//     }

//     // Notify all observers
//     notify(news) {
//         console.log('Notification:', news);
//         this.subscribers.forEach(sub => sub.update(news));
//     }
// }

// // Observer / Subscriber
// class Subscriber {
//     constructor(name) {
//         this.name = name;
//     }

//     update(news) {
//         console.log(`${this.name} received: ${news}`);
//     }
// }

// // Usage
// const bbcNews = new NewsPublisher();

// const mobileApp = new Subscriber('Mobile App');
// const webApp = new Subscriber('Web App');

// bbcNews.subscribe(mobileApp);
// bbcNews.subscribe(webApp);

// // Send notification
// bbcNews.notify('JavaScript 2026 specification released!');

// Output:
// Notification: JavaScript 2026 specification released!
// Mobile App received: JavaScript 2026 specification released!
// Web App received: JavaScript 2026 specification released!




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
