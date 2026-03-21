    Client
      │
      ▼
  ┌──────────────────┐
  │ AbstractFactory  │
  │──────────────────│
  │ createButton()   │──────► AbstractProductA (Button)
  │ createCheckbox() │──────► AbstractProductB (Checkbox)
  └──────────────────┘
           ▲
     ┌─────┼─────┐
     │           │
┌────────────┐  ┌────────────┐
│ WinFactory │  │ MacFactory │
└────────────┘  └────────────┘
     │               │
     ▼               ▼
  WinButton       MacButton
  WinCheckbox     MacCheckbox