class LINKED{
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }

  tailhead(data){
    let newnode = {
      prev: this.tail,
      value: data,
      next: null
    }

    if(!this.head){
      this.head = newnode
      this.tail = newnode
    } else {
      this.tail.next = newnode
      this.tail = newnode
    }

    this.size++
  }

  traverfarword(){
    let curret = this.head

    while(curret){
      console.log(curret.value)
      curret = curret.next
    }
  }

  traverbackward(){
    let curret = this.tail

    while(curret){
      console.log(curret.value)
      curret = curret.prev
    }
  }
}




let link=new LINKED()
link.tailhead(10)
link.tailhead(20)
link.tailhead(30)
link.tailhead(40)
link.traverfarword()
link.traverbackward()
console.log(link)


🧪 3️⃣ Test the Doubly Linked List
let dll = new DoublyLinkedList(10);

dll.appendNode(20);
dll.appendNode(30);
dll.appendNode(40);

console.log("Forward traversal:");
dll.traverseForward();     // 10 20 30 40

console.log("Backward traversal:");
dll.traverseBackward();    // 40 30 20 10

dll.deleteNode(2);         // delete 20

console.log("After deletion:");
dll.traverseForward();     // 10 30 40

console.log(dll.searchNode(30)); // true
console.log(dll.searchNode(50)); // false

🧠 Interview Notes (Very Important)
Time Complexity



| Operation | Time |
| --------- | ---- |
| Insert    | O(1) |
| Delete    | O(n) |
| Search    | O(n) |
| Traverse  | O(n) |



Space Complexity

O(n) (extra prev pointer)

⭐ One-Line Interview Explanation

A Doubly Linked List stores references to both previous and next nodes, allowing efficient forward and backward traversal.
