class LinkList{
    constructor(data){
        this.head={
            value:data,
            next:null,
        }
        this.tail=this.head
        this.size=1
    }

    appNode(data){
        const newnode={
            value:data,
            next:null
        }
        this.tail.next=newnode
        this.tail=newnode
        this.size++
    }

    insterNode(index , value){
        let count=1
        let currentNode=this.head
        while(count < index-1){
            currentNode=currentNode.next
            count++
        }
        currentNode.next={
            value,
            next:currentNode.next
        }
        this.size++
    }

    reverNode(){

        let prve=null
        let current=this.head
        this.tail=this.head

        while(current){

            let newnode=current.next
            current.next=prve
            prve=current
            current=newnode
        }

        this.head=prve
        return this
    }

    deletNode(value){
        let count=1
        let lead=this.head
        if(value === 1){
            this.head=this.head.next
        }
        else{
            while(count < value){
                lead=lead.next
                count++
            }
            let nexnode=lead.next.next
            lead.next=nexnode
            console.log(lead , 'jugal sharma')
            this.size--
        }

        
    }

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