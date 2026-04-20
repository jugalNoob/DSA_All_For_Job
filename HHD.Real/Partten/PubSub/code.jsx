bus.publish("news", "Breaking news 🔥")


class PubSub {
    constructor() {
        this.events = {}
    }

    subscribe(event, callback) {
        if (!this.events[event]) {
            this.events[event] = []
        }
        this.events[event].push(callback)
    }

    publish(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(cb => cb(data))
        }
    }
}

// Usage
let bus = new PubSub()

bus.subscribe("news", (data) => {
    console.log("User1:", data)
})

bus.subscribe("news", (data) => {
    console.log("User2:", data)
})

bus.publish("news", "Breaking news 🔥")
bus.publish("news", "Breaking news 🔥")