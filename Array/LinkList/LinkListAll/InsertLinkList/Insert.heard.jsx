 InsrtNode(index , data){


            if (index < 1 || index > this.size + 1) {
        console.log("Invalid index");
        return;
    }
  
        
    let newnode = { value: data, next: null };

    if (index === 1) {
        newnode.next = this.head;
        this.head = newnode;
    } else {
        let current = this.head;
        let count = 1;
        while (count < index - 1) {
            current = current.next;
            count++;
        }
        newnode.next = current.next;
        current.next = newnode;
    }

    this.size++;
    }

