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



    