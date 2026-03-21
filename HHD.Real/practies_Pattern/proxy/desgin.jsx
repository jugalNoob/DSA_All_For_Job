Client ─────────────► Proxy ─────────────► RealSubject
         (uses same interface)     (delegates / controls access)

          ┌─────────────────┐          ┌─────────────────┐
          │     Subject     │◄───────►│   RealSubject   │
          │─────────────────│          │─────────────────│
          │ + request()     │          │ + request()     │  ← actual work
          └─────────────────┘          └─────────────────┘
                   ▲
                   │  (implements Subject)
         ┌─────────────────┐
         │      Proxy      │
         │─────────────────│
         │ - realSubject   │  (lazy / controlled reference)
         │ + request()     │
         └───────┬─────────┘
                 │
          ┌──────┼──────┬──────┐
          │      │      │      │
     Access   Logging   Caching   Virtual/
   Control           Protection  (lazy loading)


   Proxy Pattern – Common Variants (with labels)
textClient
                       │
                       ▼
                ┌───────────────┐
                │    Subject    │  ← Interface / Abstract
                │───────────────│
                │ + request()   │
                └───────┬───────┘
                        ▲
         ┌──────────────┼──────────────┐
         │              │              │
┌────────────────┐ ┌───────────────┐ ┌────────────────┐
│   RealSubject  │ │     Proxy     │ │ ProtectionProxy│
│────────────────│ │───────────────│ │────────────────│
│ + request()    │ │ - realSubject │ │ + request()    │
│ (does the work)│ │ + request()   │ │   (check perms)│
└────────────────┘ └───────┬───────┘ └────────────────┘
                           │
                    delegates / adds behavior
                           │
                 ┌─────────┼─────────┐
                 │         │         │
            Lazy Loading  Caching   Logging
           (Virtual Proxy)           (Smart Proxy)
Very Compact / Notebook-style Version
textClient ──► [Proxy] ──► [Real Subject]
             │
       controls / adds:
       - lazy init
       - access check
       - cache
       - logging
       - remote call
Classic File/Image Proxy Example (Virtual Proxy – lazy loading)
textClient wants image
       │
       ▼
  ┌─────────────┐
  │ ImageProxy  │  ← implements Image
  │─────────────│
  │ - filename  │
  │ - realImage │ (null initially)
  │ + display() │
  └─────┬───────┘
        │
   if realImage == null ──► load from disk ──► RealImage
        │                                       │
        └─────────────────────► display() ─────┘
Let me know if you'd like:

A version focused on one specific type of proxy (Protection / Virtual / Remote / Caching)
Comparison with Adapter / Decorator in ASCII
More detailed arrows / flow for a particular use-case

Happy pattern sketching! 🛡️