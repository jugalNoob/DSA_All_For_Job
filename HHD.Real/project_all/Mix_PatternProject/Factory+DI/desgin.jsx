Config (env)
   ↓
Factory → creates DB (Mongo / MySQL / Redis)
   ↓
DI → inject into Service
   ↓
Service → uses DB
