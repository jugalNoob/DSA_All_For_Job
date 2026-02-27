1️⃣ What is a Concurrent Stack?

A Concurrent Stack is a stack designed to be:

Thread-safe or process-safe

Prevent race conditions during concurrent access

Often implemented using locks, atomic operations, or lock-free algorithms

Use Cases:

Job queues in multi-threaded servers

Task scheduling in parallel systems

Real-time data processing pipelines

2️⃣ Key Approaches

Using Locks (Mutex / Critical Section)

Protect push and pop with a lock

Simple but may cause contention

Lock-Free Stack (Using Atomic Operations)

Use compare-and-swap (CAS) operations

More advanced, high-performance for concurrent systems

3️⃣ Example: Concurrent Stack in Node.js Using async Mutex
class ConcurrentStack {
  constructor() {
    this.stack = [];
    this.lock = false; // simple mutex
  }

  // Acquire lock (async wait)
  async acquire() {
    while (this.lock) {
      await new Promise(resolve => setTimeout(resolve, 1)); // busy wait
    }
    this.lock = true;
  }

  release() {
    this.lock = false;
  }

  // Push element safely
  async push(value) {
    await this.acquire();
    this.stack.push(value);
    this.release();
  }

  // Pop element safely
  async pop() {
    await this.acquire();
    let popped = null;
    if (this.stack.length > 0) {
      popped = this.stack.pop();
    }
    this.release();
    return popped;
  }

  peek() {
    return this.stack.length ? this.stack[this.stack.length - 1] : null;
  }

  display() {
    console.log("Stack (bottom -> top):", this.stack.join(" <- "));
  }
}

// Example usage
(async () => {
  const cstack = new ConcurrentStack();

  await Promise.all([
    cstack.push(10),
    cstack.push(20),
    cstack.push(30)
  ]);

  cstack.display(); // Stack (bottom -> top): 10 <- 20 <- 30

  console.log("Popped:", await cstack.pop());
  cstack.display();
})();

✅ Key Points

Thread-safe stack → prevents race conditions.

Lock-based: Simple but may block threads.

Lock-free / CAS-based: Efficient for high-performance concurrent systems.

Common in parallel processing, task schedulers, producer-consumer systems.

In Node.js, concurrency is mainly asynchronous, so async locks or atomic operations can simulate thread safety.