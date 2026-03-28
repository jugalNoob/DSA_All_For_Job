Client ──► Target Interface
                 ▲
                 │  (expected interface)
      ┌──────────┼──────────┐
      │                     │
┌─────────────┐     ┌───────────────┐
│   Adapter   │◄───►│  Adaptee      │
│ (wrapper)   │     │ (old / legacy)│
└─────────────┘     └───────────────┘
      │                     ▲
      └──────── translates ─┘




      Here are a few clean ASCII art versions of the Adapter Pattern (structural pattern) to help visualize how it works:
1. Classic Adapter – Core Structure
textClient
            │
            ▼
      ┌───────────────┐
      │     Target    │  ← Interface the Client expects
      │───────────────│
      │ + request()   │
      └───────┬───────┘
              ▲
              │  (implements Target)
    ┌─────────────────────┐
    │       Adapter       │
    │─────────────────────│
    │ - adaptee           │  ← holds reference to incompatible object
    │ + request()         │  ← translates / delegates
    └──────────┬──────────┘
               │
               ▼
      ┌─────────────────┐
      │    Adaptee      │  ← Legacy / 3rd-party class (different interface)
      │─────────────────│
      │ + specificRequest() │
      └─────────────────┘
2. Compact / Notebook-style Version
textClient ──► [Target.request()]

                 ▲
                 │  (same interface)
          ┌──────┼──────┐
          │             │
   ┌──────────────┐  ┌──────────────┐
   │   Adapter    │  │  Adaptee     │
   │──────────────│  │──────────────│
   │ + request()  │  │ + specific() │ ← incompatible method
   └──────┬───────┘  └──────┬───────┘
          │                 │
          └───── translates / wraps ─────┘
3. Real-World Example: JSON ↔ XML Adapter
textClient Code
  wants JSON
     │
     ▼
┌─────────────────┐
│  JSON_Target    │  ← expected interface
│ + getJSON()     │
└────────┬────────┘
         ▲
         │
┌─────────────────────┐
│   JSONtoXMLAdapter  │
│─────────────────────│
│ - xmlService        │
│ + getJSON()         │  ← converts XML → JSON
└────────┬────────────┘
         │
         ▼
┌─────────────────┐
│   XML_Service   │  ← old system (only gives XML)
│ + getXML()      │
└─────────────────┘
4. Very Minimal Arrow Flow Version
textClient
  │
  ├─► Target.request()
  │
  └─► Adapter ──► Adaptee.specificRequest()
         (translates call)