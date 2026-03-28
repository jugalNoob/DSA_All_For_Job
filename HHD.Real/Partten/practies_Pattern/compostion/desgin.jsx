                      ┌─────────────────────┐
                      │     Component       │  ← Abstract / Interface
                      │─────────────────────│
                      │ + operation()       │
                      │ + add(component)    │  (optional / default throw)
                      │ + remove(component) │  (optional)
                      │ + getChild(i)       │  (optional)
                      └───────────┬─────────┘
                                  │
               ┌──────────────────┼──────────────────┐
               │                  │                  │
     ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────────┐
     │     Leaf        │  │     Leaf        │  │     Composite       │
     │─────────────────│  │─────────────────│  │─────────────────────│
     │ + operation()   │  │ + operation()   │  │ + operation()       │
     └─────────────────┘  └─────────────────┘  │ - children: List    │
                                                │─────────────────────│
                                                │ + add(component)    │
                                                │ + remove(component) │
                                                │ + getChild(i)       │
                                                └───────────┬─────────┘
                                                            │
                                       ┌────────────────────┼────────────────────┐
                                       │                    │                    │
                                 ┌───────────────┐   ┌───────────────┐   ┌───────────────┐
                                 │     Leaf      │   │   Composite   │   │     Leaf      │
                                 └───────────────┘   └───────┬───────┘   └───────────────┘
                                                             │
                                                       ┌─────┼─────┐
                                                       │           │
                                                 ┌────────────┐  ┌────────────┐
                                                 │    Leaf    │  │   Leaf     │
                                                 └────────────┘  └────────────┘



                                                 Explanation of the diagram

Component — the common interface/abstract class that both leaves and composites implement
Leaf — simple objects with no children (end nodes)
Composite — can contain other Components (leaves or other composites) → forms the tree
The operation() method is called uniformly:
Leaf → does its own work
Composite → usually calls operation() on all its children (recursively