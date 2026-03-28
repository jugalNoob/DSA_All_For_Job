Client ──► Director ──► BuilderInterface
                      │
            ┌─────────┼─────────┐
            │         │         │
     ConcreteBuilderA  ConcreteBuilderB  ...
            │                   │
            ▼                   ▼
       ComplexProduct      AnotherProduct
       (step-by-step)      (different steps)