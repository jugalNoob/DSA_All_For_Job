class ObserveSys{

    constructor(){
        this.observe = []
    }

    subserion(fn){
        this.observe.push(fn)   // store function
    }

    nofficy(data){
        this.observe.forEach(fn => fn(data))
    }
}

const test1 = (user) => console.log('user1', user)
const test2 = (user) => console.log('user2', user)

let system = new ObserveSys()

system.subserion(test1)
system.subserion(test2)

system.nofficy('new video')



3️⃣ Step-by-Step Flow
Step 1 — Create System
let system = new ObserveSys()


State:

observe = []

Step 2 — Subscribe Observer
system.subserion(test1)


Now:

observe = [test1]

Step 3 — Add Second Observer
system.subserion(test2)


Now:

observe = [test1, test2]

Step 4 — Notify All Observers
system.nofficy("new video")


Loop runs:

test1("new video")
test2("new video")

4️⃣ Visualization
        System
           |
  --------------------
  |                  |
Observer1        Observer2
(test1)           (test2)


When event happens:

notify("new video")


All observers receive update.

5️⃣ Real World Example

This pattern is used in:

YouTube Notifications
Channel → Subject
Subscribers → Observers


Upload video →

notify("new video")


All subscribers receive notification.

6️⃣ Node.js Real Example

Example:

Kafka consumer events
Redis pub/sub
EventEmitter
WebSocket notifications


Node.js Node.js EventEmitter uses this same pattern internally.

7️⃣ Improved Version (With Unsubscribe)
class ObserveSys{

    constructor(){
        this.observe=[]
    }

    subscribe(fn){
        this.observe.push(fn)
    }

    unsubscribe(fn){
        this.observe = this.observe.filter(f => f !== fn)
    }

    notify(data){
        this.observe.forEach(fn => fn(data))
    }
}

8️⃣ Interview Tip

If interviewer asks:

Where is Observer Pattern used?

Answer:

Event systems
Message queues
Notification services
UI updates
Microservice events


✅ Since you're learning JavaScript design patterns, the 4 most important patterns for backend interviews are:

Observer Pattern
Singleton Pattern
Strategy Pattern
Factory Pattern


If you want, I can also show a real Node.js notification system using Observer Pattern (like YouTube subscribers).