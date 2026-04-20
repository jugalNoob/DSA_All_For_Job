
1️⃣ Current Patterns You Have
Strategy Pattern – classes like bullsort, selection, insert implement sort(data).
Factory Pattern – factory.nofication('bull') creates the correct strategy object.
Adapter Pattern – Adapter class allows using process(data) instead of usersort(data).
State Pattern – you started defining states (sortname, sortnumbet, sortinfo) with a state(order) method.
2️⃣ Problems in Your Current Code
The State pattern isn’t connected to your sorting workflow yet.
Example: sortname.state(order, data) tries to call order.sorting.usersort(data), but order isn’t defined properly.
statices (states container) is not used.
You’re calling:
console.log(test2.process([9 , 2 ,1]))

This only triggers Adapter → Strategy, ignoring the state pattern completely.
3️⃣ How to properly combine State + Strategy + Adapter + Factory

Goal:

Use Strategy to sort.
Use State to change sorting behavior dynamically.
Use Adapter to unify the interface.
Use Factory to choose the sorting algorithm.
Example Refactor
// === Strategy ===
class BullSort {
    sort(data) { return data.sort((a,b)=>a-b); }
}
class SelectionSort {
    sort(data) { return data.sort((a,b)=>b-a); }
}
class InsertSort {
    sort(data) { return data.sort((a,b)=>a-b); }
}

// === Factory ===
class Factory {
    static getSort(type) {
        switch(type) {
            case 'bull': return new BullSort();
            case 'selection': return new SelectionSort();
            case 'insert': return new InsertSort();
            default: throw new Error('Unknown sort type');
        }
    }
}

// === Context (Strategy executor) ===
class SortContext {
    constructor(strategy) {
        this.strategy = strategy;
    }
    usersort(data) {
        return this.strategy.sort(data);
    }
}

// === Adapter ===
class Adapter {
    constructor(context) {
        this.context = context;
    }
    process(data) {
        return this.context.usersort(data);
    }
}

// === State Pattern ===
class SortState {
    state(order, data) { /* override in subclasses */ }
}

class SortName extends SortState {
    state(order, data) {
        console.log('State: Sorting by name...');
        order.strategy.sort(data);
        order.setState(new SortNumber());
    }
}

class SortNumber extends SortState {
    state(order, data) {
        console.log('State: Sorting by number...');
        order.strategy.sort(data.reverse()); // just demo
        order.setState(new SortInfo());
    }
}

class SortInfo extends SortState {
    state(order, data) {
        console.log('State: Bubble sort simulation...');
        // maybe do bubble sort here
    }
}

// === State-enabled sorting ===
class StateSort {
    constructor(strategy) {
        this.strategy = strategy;
        this.currentState = new SortName(); // initial state
    }
    setState(state) { this.currentState = state; }
    doState(data) { this.currentState.state(this, data); }
}

// === Usage ===
let strategy = Factory.getSort('bull');   // Factory chooses strategy
let context = new SortContext(strategy);  // Strategy context
let adapter = new Adapter(context);       // Adapter

console.log(adapter.process([9,2,1]));   // normal strategy sort

// --- Using State Pattern ---
let stateSort = new StateSort(strategy);
stateSort.doState([5,3,8]); // SortName -> SortNumber -> SortInfo

✅ Explanation
Factory → creates sorting algorithm (BullSort).
Strategy → SortContext executes the algorithm.
Adapter → allows calling process(data) instead of usersort(data).
State Pattern → StateSort dynamically changes state after each doState call.