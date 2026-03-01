class LinkLed{
    constructor(data){
        this.head={
            value:data,
            next:null
        }
        this.tail=this.head
        this.size=1
    }

    AppendNode(data){
        let newnode={
            value:data,
            next:null
        }
        this.tail.next=newnode
        this.tail=newnode
        this.size++
    }

    InsertLinked(index , value){

            // ❗ index validation
    if (index < 1 || index > this.size + 1) {
      console.log("❌ Invalid index");
      return;
    }

       // insert at head
    if (index === 1) {
      this.head = {
        value,
        next: this.head
      };
      this.size++;
      return;
    }

        let count = 1;
    let currentNode = this.head;

    while (count < index - 1) {
      currentNode = currentNode.next;
      count++;
    }

    currentNode.next = {
      value,
      next: currentNode.next
    };

    // update tail if inserted at end
    if (index === this.size + 1) {
      this.tail = currentNode.next;
    }

    this.size++;
    }
}

const link= new LinkLed(10)
link.AppendNode(20)
link.AppendNode(30)
link.AppendNode(40)
link.InsertLinked(5 , 500)
console.warn(link)


/// Index User ----------------->>

insertNode(index, value) {
    if (index < 0 || index > this.size) {
        console.log("Invalid index");
        return;
    }

    const newNode = { value, next: null };

    // Insert at beginning
    if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        if (this.size === 0) this.tail = newNode;
    } else {
        let current = this.head;
        let count = 0;

        while (count < index - 1) {
            current = current.next;
            count++;
        }

        newNode.next = current.next;
        current.next = newNode;

        // If inserting at last
        if (newNode.next === null) {
            this.tail = newNode;
        }
    }

    this.size++;
}
