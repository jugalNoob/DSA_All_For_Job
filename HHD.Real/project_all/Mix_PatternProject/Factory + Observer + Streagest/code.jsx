Factory + Observer // // Factory + Observer 

// | Email Campaign System         | Factory + Observer 

class Emailsend{
send(user , message){
     console.log(`📧 Email to ${user.name}: ${message}`);
}
 
}



class Smssend{
send(user , message){
   console.log(`📱 SMS to ${user.name}: ${message}`);
}
}



// factory pattern ---------------->>



class factory{

    static nofication(type){

        if(type === 'email'){
            return new Emailsend()
        }


         if(type === 'sms'){
            return new Smssend()
        }
    }

}



class NewsPublisher {

    constructor() {
        this.subscribers = []; // List of observers
    }


    pushing(data){

        this.subscribers.push(data)
    }

    remove(data){
        this.subscribers=this.subscribers.filter((sub)=>sub !== data)
    }

    noftiy(news){
        this.subscribers.forEach((sub)=>{
            sub. update(news)
        })
    }
}



class Subscribe{
    constructor(name,stragest){
        this.name=name
        this.stragest=stragest
    }

    update(news){
        this.stragest.send(this , news)
    }

}


let news=new NewsPublisher()

let jugal=new Subscribe('rahul' , factory.nofication('email'))

news.pushing(jugal)
news.noftiy('to daya is rain')






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
