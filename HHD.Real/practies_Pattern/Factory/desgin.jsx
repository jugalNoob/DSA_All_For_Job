    Client
      │
      ▼             ┌────────────────┐
  Creator         │   ConcreteCreatorA  │
  (declares)      │   + createProduct() │─────► Product A
      │           └────────────────┘
      ▼                    ▲
  ┌─────────────┐          │
  │ FactoryMethod()        │
  └─────────────┘          │
      ▲                    │
      │           ┌────────────────┐
      └───────────┤ ConcreteCreatorB │─────► Product B
                  └────────────────┘

                  

practies_Pattern/Command lld
🚀 3. FACTORY PATTERN
        [ Client ]
             │
             ▼
        [ Factory ]
      ┌──────┼────────┐
      ▼      ▼        ▼
 [Stripe] [Razorpay] [PayPal]
      │      │        │
      ▼      ▼        ▼
  [ Payment Objects ]


👉 Purpose: Create objects dynamically