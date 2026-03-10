class LINKED{

    constructor(data){

        this.head={
            value:data,
            next:null
        }
        this.tail=this.head
        this.size=1
    }

    AppenNode(data){

        let newnode={
            value:data,
            next:null
        }
        this.tail.next=newnode
        this.tail=newnode
        this.size++
    }
HeadApp(data){

    let newnode={
        value:data,
        next:this.head
    }

    this.head=newnode
    this.size++
}

    ReverLink(){

        let pver=null
        let current=this.head
        this.tail=this.head
        while(current){
            let newnode=current.next
            current.next=pver
            pver=current
            current=newnode
        }
       this.head=pver

       return this
    }


    CheckMiddleLinked(){
        let fast=this.head
        let slow=this.head
        while(fast && fast.next){
            slow=slow.next
            fast=fast.next.next
        }
        return slow.value
    }

    removeMiddlle(){

           if(!this.head || !this.head.next){
        this.head = null
        return
    }


        let prev=null
        let fast=this.head
        let slow=this.head
        
    while (fast && fast.next) {
        
        prev=slow
        slow=slow.next
        fast=fast.next.next
        
    }

   if(prev){
        prev.next = slow.next
    }

}


deletHead(){
    this.head=this.head.next
    this.size--
}

Insert(index , data){

    let newnode={value:data , next:null}

    if(index ===1){

        newnode.next=this.head
        this.head=newnode


    }else{

        let count=1

        let currrent=this.head

        while(count < index-1){

            currrent=currrent.next

            count++
        }

        newnode.next=currrent.next
        currrent.next=newnode

         if (!newnode.next) {
            this.tail = newnode;
        }
    }

}


remoceDecpluation(){

    let current=this.head
    console.log(current)

    while(current && current.next){

        if(current.value === current.next.value){

            current.next=current.next.next
        }

        else{

            current=current.next
        }

        return 
    }

}

}

let link=new LINKED(10)
// link.HeadApp(100)
link.AppenNode(20)
link.AppenNode(30)
link.AppenNode(40)
link.AppenNode(50)
link.AppenNode(60)
link.AppenNode(60)
// link.Insert(1,10000)
// link.deletHead()
// console.log(link.CheckMiddleLinked())
// link.removeMiddlle()
// link.ReverLink()
console.log(link)