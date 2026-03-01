
    InsterLinkList(index , value){
        let currentLoop=this.head
        let count=1
        while(count < index-1){
            currentLoop=currentLoop.next
        }

        currentLoop.next={
            value,
            next:currentLoop.next 
        }
        this.size++


    }

