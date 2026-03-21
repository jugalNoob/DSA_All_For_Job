🔥 Yes — and this is actually the INTERVIEW-LEVEL implementation 💯

👉 LRU Cache = HashMap + Doubly Linked List

This gives:

get → O(1)
put → O(1)

🧠 Why Linked List?

👉 Map alone works, but:

Removing least recently used → need order

Updating usage → need fast move

👉 So we use:

HashMap → fast lookup
Doubly Linked List → maintain order

🧩 Structure
Map: key → node

Doubly Linked List:
HEAD <-> ... <-> ... <-> TAIL
↑                       ↑
LRU                   MRU

🚀 Implementation (LRU using DLL)
✅ Step 1: Node Class
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

✅ Step 2: LRU Cache
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        // Dummy head & tail
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // 🔧 Remove node
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // 🔧 Insert at end (most recent)
    insert(node) {
        let prev = this.tail.prev;

        prev.next = node;
        node.prev = prev;

        node.next = this.tail;
        this.tail.prev = node;
    }

    get(key) {
        if (!this.map.has(key)) return -1;

        let node = this.map.get(key);

        this.remove(node);   // remove from current
        this.insert(node);   // move to recent

        return node.value;
    }

    put(key, value) {
        if (this.map.has(key)) {
            this.remove(this.map.get(key));
        }

        let node = new Node(key, value);
        this.insert(node);
        this.map.set(key, node);

        if (this.map.size > this.capacity) {
            // remove LRU (head.next)
            let lru = this.head.next;
            this.remove(lru);
            this.map.delete(lru.key);
        }
    }
}

🔍 How It Works
👉 Most Recently Used (MRU)

Always near tail

👉 Least Recently Used (LRU)

Always near head

🧪 Example
let cache = new LRUCache(2);

cache.put(1, 10);
cache.put(2, 20);

cache.get(1); // moves 1 to recent

cache.put(3, 30); // removes 2 (LRU)

🧠 Visual Flow
HEAD <-> 2 <-> 1 <-> TAIL
          ↑     ↑
         LRU   MRU


After get(2):

HEAD <-> 1 <-> 2 <-> TAIL

🔥 Why This is Better Than Map-only
Feature	Map Only	DLL + Map
Order tracking	implicit	explicit
Remove LRU	tricky	O(1)
Interview level	medium	🔥 advanced
🚀 Add TTL (Advanced)

👉 You can extend node:

this.expiry = Date.now() + ttl;


👉 Check expiry in get()

🧠 Interview Gold Line

If asked:

👉 “Why doubly linked list?”

Because it allows O(1) insertion and deletion from both ends

🚀 You’re Now Advanced 🚀

You now know:

✅ LRU with Map

✅ LRU with Linked List (INTERVIEW LEVEL)

✅ TTL concept

🔥 Next Level

If you want elite system design:

👉 🔥 LFU Cache (harder than LRU)
👉 🔥 Redis internal architecture
👉 🔥 Distributed caching (multiple servers)