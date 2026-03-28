     ┌───────────────┐
     │   Subject     │
     │───────────────│
     │ attach()      │
     │ detach()      │
     │ notify()      │
     └───────┬───────┘
             │
      ┌──────┼──────┬──────┐
      ▼      ▼      ▼      ▼
  ObserverA ObserverB ObserverC ...
   update()  update()  update()

   


🚀 5. OBSERVER PATTERN

🚀 5. OBSERVER PATTERN
        [ Publisher ]
             │
      ┌──────┼──────────────┐
      ▼      ▼              ▼
 [EmailSvc][NotifSvc][AnalyticsSvc]


👉 Example:

Trade Executed → Notify all services
