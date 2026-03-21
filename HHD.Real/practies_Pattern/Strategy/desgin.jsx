🚀 4. STRATEGY PATTERN

🚀 4. STRATEGY PATTERN
        [ Client ]
             │
             ▼
     [ Payment Context ]
             │
      ┌──────┼────────┐
      ▼      ▼        ▼
 [CardPay] [UPIPay] [NetBanking]

::-:: ---------------------------<><><></></></>
 Client ──► Context
                 │
                 ▼
          ┌───────────────┐
          │ Strategy      │◄────── interface / abstract
          │───────────────│
          │ execute()     │
          └───────────────┘
                 ▲         ▲         ▲
       ┌─────────┼─────────┼─────────┐
       │         │         │         │
  StrategyA   StrategyB  StrategyC  ...
   (sort)     (pay)      (compress) ...