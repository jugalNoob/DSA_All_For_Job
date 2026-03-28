Great 🔥 — you already built Strategy Pattern correctly.
Now let’s combine it with Factory Pattern so strategy selection becomes dynamic (real interview level).

🧠 1️⃣ Goal

👉 Instead of manually doing:

new BubbleSort()


👉 We want:
    
SortFactory.create("bubble")

🏗️ FINAL ARCHITECTURE
            Client
              ↓
        SortFactory 🔥
         /       \
   BubbleSort   QuickSort
              ↓
        SortContext (Strategy)

🔥 2️⃣ Full Code (Factory + Strategy)
✅ Strategies
class BubbleSort {
    sort(arr) {
        console.log("🟢 Bubble Sort used");
        return arr.sort((a, b) => a - b);
    }
}

class QuickSort {
    sort(arr) {
        console.log("🔵 Quick Sort used");
        return arr.sort((a, b) => a - b);
    }
}

✅ Factory (NEW 🔥)
class SortFactory {
    static create(type) {
        switch (type) {
            case "bubble":
                return new BubbleSort();

            case "quick":
                return new QuickSort();

            default:
                throw new Error("Invalid sort type");
        }
    }
}

✅ Context (Strategy Executor)
class SortContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    sort(arr) {
        return this.strategy.sort(arr);
    }
}

✅ Usage (Clean + Dynamic 🔥)
const strategy = SortFactory.create("quick"); // or "bubble"

const sorter = new SortContext(strategy);

console.log(sorter.sort([5, 2, 8, 1]));

🔍 Execution Flow (Story Style)
User selects "quick"
   ↓
SortFactory.create("quick")
   ↓
returns QuickSort object
   ↓
SortContext uses it
   ↓
QuickSort.sort() runs

🧠 WHY COMBINE FACTORY + STRATEGY?
Pattern	Responsibility
Factory	Creates object
Strategy	Executes behavior
⚡ REAL-WORLD ANALOGY

👉 Payment System:

Factory → choose Stripe / Razorpay
Strategy → execute payment logic


👉 Sorting System:

Factory → choose algorithm
Strategy → run algorithm

🔥 ADD NEW STRATEGY (INTERVIEW TEST)
class MergeSort {
    sort(arr) {
        console.log("🟣 Merge Sort used");
        return arr.sort((a, b) => a - b);
    }
}


👉 Only update factory:

case "merge":
    return new MergeSort();

🚀 ADVANCED VERSION (BEST PRACTICE 🔥)

👉 Avoid switch (more scalable)

class SortFactory {
    static strategies = {
        bubble: BubbleSort,
        quick: QuickSort
    };

    static create(type) {
        const Strategy = this.strategies[type];
        if (!Strategy) throw new Error("Invalid type");
        return new Strategy();
    }
}

🧠 INTERVIEW GOLD POINTS
Open/Closed Principle ✅
Easy to extend ✅
Clean separation of concerns ✅
⚡ INTERVIEW ONE-LINER

👉 “Factory handles object creation, Strategy handles behavior — together they provide flexible and scalable design.”

🚀 NEXT LEVEL (if you want 🔥)

I can show:

Real Node.js system using this (payments / caching / DB)
Strategy selection based on config/env
Plugin-based architecture (advanced)

Just tell 👍