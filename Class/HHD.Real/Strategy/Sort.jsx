1️⃣ Example with Sorting Algorithms

Imagine you have multiple sorting algorithms:

Bubble Sort
Merge Sort
Quick Sort


Instead of writing:

if(type === "bubble") bubbleSort()
if(type === "merge") mergeSort()
if(type === "quick") quickSort()


We use Strategy Pattern.

Strategies
class BubbleSort{
    sort(arr){
        console.log("Bubble Sort used")
        return arr.sort((a,b)=>a-b)
    }
}

class QuickSort{
    sort(arr){
        console.log("Quick Sort used")
        return arr.sort((a,b)=>a-b)
    }
}

Context
class SortContext{

    constructor(strategy){
        this.strategy = strategy
    }

    sort(arr){
        return this.strategy.sort(arr)
    }

}

Use
const bubble = new BubbleSort()

const sorter = new SortContext(bubble)

console.log(sorter.sort([5,2,8,1]))


Output:

Bubble Sort used
[1,2,5,8]


If we change strategy:

sorter.strategy = new QuickSort()


Now QuickSort runs.