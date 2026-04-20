class NewsPublisher {
    constructor() {
        this.subscribers = []
    }

    subscribe(sub) {
        this.subscribers.push(sub)
    }

    unsubscribe(sub) {
        this.subscribers = this.subscribers.filter(s => s !== sub)
    }

    notify(news) {
        this.subscribers.forEach(sub => {
            if (typeof sub.update === "function") {
                sub.update(news)
            }
        })
    }
}

class Subscriber {
    constructor(name) {
        this.name = name
    }

    update(news) {
        console.log(`${this.name} received: ${news}`)
    }
}

// Usage
let news = new NewsPublisher()

let jugal = new Subscriber('Jugal')
let ram = new Subscriber('Ram')

news.subscribe(jugal)
news.subscribe(ram)

news.notify('Today is rainy day ☔')

