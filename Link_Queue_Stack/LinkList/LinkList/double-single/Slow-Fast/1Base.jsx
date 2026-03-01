🐢🐇 What is Fast & Slow Pointer?

We use:

slow → moves 1 step

fast → moves 2 steps

Used for:

Find middle element

Detect cycle

Find start of cycle

Very important for interviews.


hasCycle() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;   // Cycle found
        }
    }

    return false;
}
