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

// Context Class with Dependency Injection
class SortContext {

    // Inject the strategy from outside (constructor injection)
    constructor(strategy){
        this.strategy = strategy
    }

    // Optional: setter injection if you want to change strategy later
    setStrategy(strategy){
        this.strategy = strategy
    }

    sort(arr){
        return this.strategy.sort(arr)
    }
}

// Usage
const bubble = new BubbleSort()
const quick = new QuickSort()

// Inject BubbleSort strategy
const sorter = new SortContext(bubble)
console.log(sorter.sort([5,2,8,1])) // Bubble Sort used

// Switch to QuickSort strategy dynamically (DI in action)
sorter.setStrategy(quick)
console.log(sorter.sort([10,3,6,1])) // Quick Sort used
