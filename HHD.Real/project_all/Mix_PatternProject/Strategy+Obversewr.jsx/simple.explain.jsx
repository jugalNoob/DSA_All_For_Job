class EmailStrategy {
    send(user, message) {
        console.log(`📧 Email to ${user.name}: ${message}`);
    }
}

class SmsStrategy {
    send(user, message) {
        console.log(`📱 SMS to ${user.name}: ${message}`);
    }
}

class DefaultStrategy {
    send(user, message) {
        console.log(`⚠️ No strategy for ${user.name}: ${message}`);
    }
}

class Subscriber {
    constructor(name, strategy = new DefaultStrategy()) {
        this.name = name;
        this.strategy = strategy;
    }

    update(news) {
        this.strategy.send(this, news);
    }
}

class NewsPublisher {
    constructor() {
        this.subscribers = [];
    }

    subscribe(user) {
        this.subscribers.push(user);
    }

    unsubscribe(user) {
        this.subscribers = this.subscribers.filter(sub => sub !== user);
    }

    notify(news) {
        this.subscribers.forEach(user => user.update(news));
    }
}

// Usage
let news = new NewsPublisher();

let rahul = new Subscriber('rahul', new EmailStrategy());
let jugal = new Subscriber('jugal', new SmsStrategy());
let karan = new Subscriber('karan'); // uses default

news.subscribe(rahul);
news.subscribe(jugal);
news.subscribe(karan);

news.notify('🔥 Today is your exam!');
