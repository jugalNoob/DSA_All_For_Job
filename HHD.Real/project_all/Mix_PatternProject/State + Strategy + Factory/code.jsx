Great 🔥 now you’re entering advanced LLD (interview gold)


Let’s combine State + Strategy + Factory using your 
Traffic Light System 🚦

🧠 First: Understand Roles (VERY CLEAR)
1. State Pattern

👉 Controls which state you are in

Red → Yellow → Green

2. Strategy Pattern

👉 Controls what behavior to apply

Stop strategy
Go strategy
Wait strategy

3. Factory Pattern

👉 Creates correct objects

Create RedState / GreenState / YellowState


🎯 Big Picture Flow
Factory → creates State
State → uses Strategy
Context → runs everything


🔥 Step-by-Step Design
🟢 Step 1: Strategy (Behavior logic)
class Strategy {
    execute() {}
}



class StopStrategy extends Strategy {
    execute() {
        console.log("🚫 STOP")
    }
}


class GoStrategy extends Strategy {
    execute() {
        console.log("✅ GO")
    }
}


class WaitStrategy extends Strategy {
    execute() {
        console.log("⏳ WAIT")
    }
}

🔴 Step 2: State (Uses Strategy)


class State {
    handle(context) {}
}

class RedState extends State {
    handle(context) {
        new StopStrategy().execute()
        context.setState(StateFactory.getState("GREEN"))
    }
}

class GreenState extends State {
    handle(context) {
        new GoStrategy().execute()
        context.setState(StateFactory.getState("YELLOW"))
    }
}

class YellowState extends State {
    handle(context) {
        new WaitStrategy().execute()
        context.setState(StateFactory.getState("RED"))
    }
}

🏭 Step 3: Factory (Create States)


class StateFactory {
    static getState(type) {
        if (type === "RED") return new RedState()
        if (type === "GREEN") return new GreenState()
        if (type === "YELLOW") return new YellowState()
    }
}

🧠 Step 4: Context (Main controller)
class TrafficLight {
    constructor() {
        this.state = StateFactory.getState("RED")
    }

    setState(state) {
        this.state = state
    }

    change() {
        this.state.handle(this)
    }
}

▶️ Run System


let light = new TrafficLight()

light.change() // STOP → next GREEN
light.change() // GO → next YELLOW
light.change() // WAIT → next RED
light.change() // STOP → ...

🔥 Output Flow
🚫 STOP
✅ GO
⏳ WAIT
🚫 STOP

🧠 What’s happening internally
TrafficLight (Context)
        ↓
Current State (Red)
        ↓
Uses Strategy (Stop)
        ↓
Factory creates next state (Green)

🎯 Why combine all 3?

| Pattern  | Responsibility    |
| -------- | ----------------- |
| State    | Controls flow     |
| Strategy | Controls behavior |
| Factory  | Object creation   |


🔥 Interview Explanation (POWERFUL)

👉 Say this:

“I used State Pattern to manage transitions, 
Strategy Pattern to encapsulate behavior for
 each state, and Factory Pattern to decouple 
 object creation. This removes conditionals 
 and makes the system scalable.”

🚀 Real-World Mapping
Traffic system 🚦
Payment processing 💳
Order lifecycle 📦
Game states 🎮