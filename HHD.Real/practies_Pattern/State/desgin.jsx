:-: ----------------------------<><><><><></></></></>
   Context ──► State (interface)
                 ▲         ▲         ▲
       ┌─────────┼─────────┼─────────┐
       │         │         │         │
   StateA     StateB     StateC    ...
 (NoCoin)   (HasCoin)  (Dispensing) ...
   (methods change behavior)

   

. STATE PATTERN


🚀 7. STATE PATTERN
        [ Order Context ]
               │
        ┌──────┼────────────┐
        ▼      ▼            ▼
   [Created] [Paid]   [Shipped]
        │       │           │
        ▼       ▼           ▼
   [State Change Transitions]


