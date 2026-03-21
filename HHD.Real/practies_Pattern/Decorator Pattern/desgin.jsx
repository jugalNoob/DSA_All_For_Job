✅ Decorator#

Client ──► Component
                 ▲
      ┌──────────┼──────────┐
      │          │          │
  Concrete   DecoratorA   DecoratorB
  Component     ▲             ▲
                │             │
                └──── wraps ───┘
                     (adds behavior)

🚀 8. DECORATOR PATTERN

🚀 8. DECORATOR PATTERN
        [ Base Object ]
              │
              ▼
        [ Decorator ]
              │
      ┌───────┴────────┐
      ▼                ▼
 [Logging]        [Caching]
      │                │
      ▼                ▼
      [ Enhanced Object ]

      