class LINKED {
    constructor(data) {
        this.head = {
            prev: null,
            value: data ?? null, // if no data provided, set null
            next: null
        };
        this.tail = this.head;
        this.size = data !== undefined ? 1 : 0; // initialize size correctly
    }

    tailHead(data) {
        let newnode = {
            prev: this.tail,
            value: data,
            next: null
        };
        if (this.tail) {
            this.tail.next = newnode;
        }
        this.tail = newnode;
        if (this.size === 0) this.head = newnode; // first element
        this.size++;
    }
    printList() {
    let curr = this.head;
    let result = [];
    while (curr) {
        result.push(curr.value);
        curr = curr.next;
    }
    console.log(result.join(' <-> '));
}

}

// Usage
let link = new LINKED(); // can also do new LINKED(5)
link.tailHead(10);
link.tailHead(20);
link.printList(); // Output: 10 <-> 20
console.log(link);

