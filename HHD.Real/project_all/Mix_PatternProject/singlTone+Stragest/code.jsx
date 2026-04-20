class Bubble {
  sort(data) {
    console.log("Bubble Sort");
    return [...data].sort((a, b) => a - b);
  }
}

class Selection {
  sort(data) {
    console.log("Selection Sort");
    return [...data].sort((a, b) => a - b);
  }
}

class Merge {
  sort(data) {
    console.log("Merge Sort");
    return [...data].sort((a, b) => a - b);
  }
}




class SortContext {

  static instance = null;

  constructor(strategy) {
    this.strategy = strategy;
  }

  static getInstance(strategy) {
    if (!SortContext.instance) {
      SortContext.instance = new SortContext(strategy);
    }
    return SortContext.instance;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  sort(data) {
    return this.strategy.sort(data);
  }
}




let sorter = SortContext.getInstance(new Bubble());

console.log(sorter.sort([4, 2, 1, 3]));

sorter.setStrategy(new Selection());
console.log(sorter.sort([4, 2, 1, 3]));

sorter.setStrategy(new Merge());
console.log(sorter.sort([4, 2, 1, 3]));