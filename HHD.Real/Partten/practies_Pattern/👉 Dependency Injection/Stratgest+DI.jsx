// Strategy Classes
class BubbleSort {
    sort(arr){
        console.log("Bubble Sort used")
        return arr.sort((a,b)=>a-b)
    }
}

class QuickSort {
    sort(arr){
        console.log("Quick Sort used")
        return arr.sort((a,b)=>a-b)
    }
}

// Context Class using DI
class SortContext {
    // Inject the dependency from outside
    constructor(strategy){
        this.strategy = strategy
    }

    // Optional: setter to change strategy dynamically
    setStrategy(strategy){
        this.strategy = strategy
    }

    // Delegates sorting to the injected strategy
    sort(arr){
        return this.strategy.sort(arr)
    }
}

// Usage
const bubble = new BubbleSort()          // dependency created outside
const quick = new QuickSort()            // another strategy

// Inject BubbleSort into context
const sorter = new SortContext(bubble)
console.log(sorter.sort([5,2,8,1]))      // Bubble Sort used

// Change strategy dynamically
sorter.setStrategy(quick)
console.log(sorter.sort([10,3,6,1]))     // Quick Sort used
