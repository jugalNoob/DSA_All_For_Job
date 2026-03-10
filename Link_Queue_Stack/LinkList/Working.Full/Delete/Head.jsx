Here's a very simple and clear explanation of what this deleteHead() function does:
JavaScriptdeleteHead() {
    this.head = this.head.next
    this.size--
}
What it does (in plain words)
It removes the first node of the linked list (the head).
Step-by-step breakdown

this.head = this.head.next
The old head is thrown away
The second node now becomes the new head
In other words: "the list now starts from the node that was previously number 2"

this.size--
We decrease the size counter by 1
Because we removed one node


Visual example
Before calling deleteHead():
textthis.head →  [10] → [20] → [30] → [40]    size = 4
              ↑
            (old head)
After deleteHead():
textthis.head →         [20] → [30] → [40]    size = 3
                     ↑
                  (new head)
The node with value 10 is now disconnected and (in JavaScript) will be garbage collected later.
Important things to notice / common bugs people miss


Situation,What happens with this code?,Is it safe?
List has 1 node,head = null → list becomes empty,OK
List is already empty (head === null),this.head.next → Error! (Cannot read property 'next' of null),NOT SAFE
You want to return the deleted value,This code doesn't return anything,Depends on need



Safer / more complete version (common in interviews)
JavaScriptdeleteHead() {
    if (this.head === null) {
        return;           // or throw error, or return null
    }

    const removedValue = this.head.value;   // optional: save value if needed

    this.head = this.head.next;
    this.size--;

    // Optional: if list became empty
    if (this.head === null) {
        this.tail = null;
    }

    return removedValue;   // optional
}