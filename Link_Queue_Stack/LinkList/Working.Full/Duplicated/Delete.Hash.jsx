// Completely different version – removes all duplicates
removeAllDuplicates() {
    if (!this.head) return;

    let seen = new Set([this.head.value]);
    let current = this.head;

    while (current.next) {
        if (seen.has(current.next.value)) {
            current.next = current.next.next;
            this.size--;
        } else {
            seen.add(current.next.value);
            current = current.next;
        }
    }
}