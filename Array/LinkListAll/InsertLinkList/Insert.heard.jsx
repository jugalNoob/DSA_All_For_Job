insertAt(index, value) {
    if (index < 1 || index > this.size + 1) {
        console.log('Invalid index');
        return;
    }

    const newNode = { value, next: null };

    if (index === 1) {
        // Insert at head
        newNode.next = this.head;
        this.head = newNode;
    } else {
        let current = this.head;
        let count = 1;
        while (count < index - 1) {
            current = current.next;
            count++;
        }
        // Insert node
        newNode.next = current.next;
        current.next = newNode;
    }

    this.size++;
}
