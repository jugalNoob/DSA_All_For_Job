🚀 2. COMMAND PATTERN
        [ Client ]
             │
             ▼
        [ Invoker ]
             │
             ▼
        [ Command ]
             │
      ┌──────┴────────┐
      ▼               ▼
[BuyOrderCmd]   [SellOrderCmd]
      │               │
      ▼               ▼
   [ Receiver (Engine) ]


👉 Purpose: Encapsulate request as object