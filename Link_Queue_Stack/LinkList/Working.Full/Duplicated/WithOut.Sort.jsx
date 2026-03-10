Good 🔥 now this is real interview level.

🎯 Problem

Remove duplicates from an UNSORTED singly linked list.

Example:

Input:
1 → 3 → 2 → 3 → 1 → 4

Output:
1 → 3 → 2 → 4


Since it’s unsorted, duplicates are not adjacent.
So we cannot compare current.value === current.next.value.

We need extra memory.

✅ Best Approach → Use a Hash Set
💡 Idea

Traverse list

Store values in a Set

If value already exists → remove node

Else → add to set

✅ Implementation (Correct Version)
removeDuplicatesUnsorted(){

    let current = this.head
    let prev = null
    let seen = new Set()

    while(current){

        if(seen.has(current.value)){
            // Duplicate found → remove it
            prev.next = current.next
            this.size--
        }else{
            // First time seeing value
            seen.add(current.value)
            prev = current
        }

        current = current.next
    }

    return this.head
}

🔥 Step-by-Step Example

List:

1 → 3 → 2 → 3 → 1 → 4

Iteration 1
current = 1
seen = {}


1 not in set → add it.

seen = {1}
prev = 1

Iteration 2
current = 3


Not in set → add.

seen = {1,3}
prev = 3

Iteration 3
current = 2


Not in set → add.

seen = {1,3,2}
prev = 2

Iteration 4
current = 3


3 already exists ❌ duplicate.

So:

prev.next = current.next


We skip this node.

List becomes:

1 → 3 → 2 → 1 → 4


Do NOT move prev here.

Iteration 5
current = 1


1 exists ❌ duplicate.

Remove it:

1 → 3 → 2 → 4

Iteration 6
current = 4


Not in set → add.

Final:

1 → 3 → 2 → 4

🧠 Why We Need prev

Because in singly linked list we cannot go backward.

To remove node:

prev.next = current.next


We must know previous node.

⚡ Complexity