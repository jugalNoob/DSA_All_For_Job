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
