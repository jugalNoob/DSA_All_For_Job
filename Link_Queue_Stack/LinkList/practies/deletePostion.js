deleteNode(index) {
  if (index === 0) {
    this.head = this.head.next;
    return this;
  }

  let current = this.head;
  let count = 0;

  // go to (index - 1) position
  while (current && count < index - 1) {
    current = current.next;
    count++;
  }

  // safety check
  if (!current || !current.next) {
    return this;
  }

  // delete node
  current.next = current.next.next;

  return this;
}




  deleteNode(index){

    let current=this.head
    let count=1 
    // debugger;
    while(current && count < index -1){
      current=current.next
      count++
    }

    current.next=current.next.next



    // 1 : 10 && 1 < 1-1 

    current.next=current.next.next // 20 =30


    return this
  }
