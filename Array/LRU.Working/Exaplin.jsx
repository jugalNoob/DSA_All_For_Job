Sure, Jugal 😎 — here’s LRU in simple, easy English:

LRU = Least Recently Used

Imagine a limited-size shelf for books.

You can only keep 5 books on it (like cache size).

Rule: When the shelf is full and you need to put a new book:

You remove the book you haven’t used for the longest time.

If you use a book again:

It becomes the most recently used, so it stays on the shelf longer.

Example

Shelf can hold 3 items → [ ] empty

Add A → [A]

Add B → [A, B]

Add C → [A, B, C]

Access A → [B, C, A] (A becomes recently used)

Add D → [C, A, D] (B was least recently used → removed)

✅ Simple Idea: “Always remove the item you haven’t used for the longest time.”