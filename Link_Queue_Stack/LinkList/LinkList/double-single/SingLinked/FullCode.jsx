class LINK {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.size = 1
    }

    AppendNode(data) {
        let newNode = {
            value: data,
            next: null
        }

        this.tail.next = newNode
        this.tail = newNode
        this.size++
    }

    HeadAppend(data) {
        let newNode = {
            value: data,
            next: this.head   // 🔥 important line
        }

        this.head = newNode
        this.size++
    }


    Reverser(){
        let prev=null
        let currentnode=this.head
        while(currentnode){
            let newnode=currentnode.next
            currentnode.next=prev
            prev=currentnode
            currentnode=newnode
        }
        this.head=prev
        return this
    }

    NodeDelete(value){
        let count=1
        let lead=this.head
        if(value === 1){
            this.head=this.head.next
    }else{
        while(count < value-1){
            lead=lead.next
            count++
        }
        let nextnode=lead.next.next
        lead.next=nextnode
        console.log(lead)
    }
    }

    InsterNode(index,value){
        let count=1
        let currentNode=this.head
    
            while (count < index - 1) {
      currentNode = currentNode.next;
      count++;
    }


        currentNode.next={
            value,
            next:currentNode.next
        }
        this.size++

    }


    DuplicatedNode(){
        let currentNode=this.head

       while(currentNode && currentNode.next){

        if(currentNode.value===currentNode.next.value){

            currentNode.next=currentNode.next.next
        }else{
            currentNode=currentNode.next
        }
       }
       this.size--
       return  this.head

    }

    findCenter(){
        let slow=this.head
        let fast=this.head
        while(fast && fast.next){
            slow=slow.next
            fast=fast.next.next
        }
        return slow.value

    }
}

const link = new LINK(10)
// link.HeadAppend(100)
link.AppendNode(20)
link.AppendNode(30)
link.AppendNode(40)
link.AppendNode(40)
console.log(link.findCenter())

link.DuplicatedNode()
// link.NodeDelete(2)
// console.log(link.InsterNode(1 , 2000))

// link.Reverser()
console.log(link)


    SearchNode(value){

        let current=this.head
        while(current){

            if(current.value === value){
                return true
            }

            current=current.next
        }

        return false
    }

      print() {
    let curr = this.head;
    let out = [];
    while (curr) {
      out.push(curr.value);
      curr = curr.next;
    }
    console.log(out.join(" → "));
  }
}

const link=new LinkList(10)
link. appNode(20)
link. appNode(30)
link. appNode(40)
link.deletNode(3)
link.insterNode(1 , 1000)
link.reverNode()
console.log(link.SearchNode(1000))
link.print()
console.log(link)