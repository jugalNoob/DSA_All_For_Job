deleteNode(value){
        let counter=1
        let lead=this.head;
        if(value===1){
            this.head=this.head.next
        }else{
            while(counter < value -1){
                lead=lead.next
                counter++
            }
            let nexNode=lead.next.next;
            lead.next=nexNode;
            console.log(lead)
        }
        

    }



    /// Delete Head Node 


        DeleteHead() {
        if (!this.head) {
            console.log("List is empty")
            return
        }

        if (this.head === this.tail) {
            this.head = null
            this.tail = null
            this.size = 0
            return
        }

        this.head = this.head.next
        this.size--
    }

    