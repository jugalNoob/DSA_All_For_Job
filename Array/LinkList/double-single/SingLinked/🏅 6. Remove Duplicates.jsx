findDuplicate() {
    let currentNode = this.head;

    while (currentNode && currentNode.next) {
        if (currentNode.value === currentNode.next.value) {
            // Remove duplicate
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }

    return this.head;
}
