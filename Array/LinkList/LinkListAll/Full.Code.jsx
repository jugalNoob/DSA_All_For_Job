class Linked{
    constructor(data){
        this.head={
            value:data,
            next:null
        }
        this.tail=this.head
        this.size=1
    }

appNode(data){
let newNode={
    value:data,
    next:null
}
this.tail.next=newNode
this.tail=newNode
this.size++
}


MiddlePointer(){
    let slow=this.head
    let fast=this.head
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
    }
    return slow.value
}

AppendHead(data){
    let newnode={
        value:data,
        next:this.head
    }
    this.head=newnode
    this.size++
}

CheckDuplate(){
    let current=this.head
    while(current && current.next){
        if(current.value === current.next.value){
            current.next=current.next.next
        }else{
            current=current.next
        }
    }
    return this.head
}

DeleteHead() {
    if (!this.head) return;
    this.head = this.head.next;
    this.size--;
    if (!this.head) {
        this.tail = null;
    }
}


DeletMiddle(){
      if (!this.head) return null;         // empty list
    if (!this.head.next) {               // only one node
        this.head = null;
        return;
    }
    let prve=null
    let  slow=this.head
    let fast=this.head
    while(fast && fast.next){
        prve=slow
        slow=slow.next
        fast=fast.next.next 
    }
     // delete middle node
    prve.next = slow.next;
}


ReverNode(){
    let prev = null
    let current = this.head
    this.tail = this.head   // update tail
    while(current){
        let nextNode = current.next
        current.next = prev
        prev = current
        current = nextNode
    }
    this.head = prev
}


insertAt(index, data) {
    if (index < 1 || index > this.size + 1) {
        console.log("Invalid index");
        return;
    }
    let newnode = {
        value: data,
        next: null
    };
    if (index === 1) {
        newnode.next = this.head;
        this.head = newnode;
        if (this.size === 0) {
            this.tail = newnode;
        }
    } else {
        let count = 1;
        let current = this.head;

        while (count < index - 1) {
            current = current.next;
            count++;
        }

        newnode.next = current.next;
        current.next = newnode;

        if (!newnode.next) {
            this.tail = newnode;
        }
    }
    this.size++;
}
}


let link=new Linked(10)

link.appNode(20)
link.appNode(30)
link.appNode(40)
link.appNode(50)
link.InsertDelete(2 , 1000)
// link.ReverNode()

// link.CheckDuplate()
// link.AppendHead(1000)
// console.log(link.MiddlePointer())
// link.DeletMiddle()
// link.DeleteHead()

console.log(link)
