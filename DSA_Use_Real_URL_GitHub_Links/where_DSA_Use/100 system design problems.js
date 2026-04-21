Here’s a 100 System Design Problems → DSA Pattern Mapping Sheet you can use like a cheat code in interviews.

Instead of memorizing designs, you’ll recognize patterns instantly.

🧠 SYSTEM DESIGN → DSA MAPPING (100 PROBLEMS SHEET)

Legend:

🟦 HashMap = fast lookup
🌲 Tree = indexing/range
📊 Heap = ranking/top K
🔁 Queue = async processing
🕸 Graph = relationships
⏳ Sliding Window = time-based
🧵 Stack = history/undo
🔤 Trie = search/prefix
🧮 Set = uniqueness
🔥 1–10: SOCIAL MEDIA SYSTEMS
Instagram feed → 🕸 Graph + 📊 Heap + 🟦 HashMap
Instagram likes system → 🟦 HashMap + 🧮 Set
Instagram comments → 🔁 Queue + 🟦 HashMap
Follow/unfollow system → 🕸 Graph + 🟦 HashMap
Story view tracking → 🟦 HashMap + ⏳ Sliding Window
Reels trending system → 📊 Heap + 🟦 HashMap
Instagram search → 🔤 Trie + 🕸 Graph
Hashtag system → 🟦 HashMap + 🔤 Trie
Recommendation system → 🕸 Graph + 📊 Heap
Social network mutual friends → 🕸 Graph (BFS)
💬 11–20: MESSAGING SYSTEMS
WhatsApp chat → 🟦 HashMap + 🔁 Queue
WhatsApp group chat → 🕸 Graph + 🟦 HashMap
Message delivery system → 🔁 Queue + 🟦 HashMap
Online/offline status → 🟦 HashMap + 🧮 Set
Read receipts → 🟦 HashMap + 🧮 Set
Typing indicator → 🔁 Queue
Message ordering → 🔁 Queue + 🌲 Tree
Message retry system → 📊 Priority Queue
Media sending system → 🔁 Queue + 🟦 HashMap
Spam detection → ⏳ Sliding Window
🚗 21–30: RIDE / MAP SYSTEMS
Uber ride matching → 📊 Heap + 🕸 Graph
Driver location tracking → 🟦 HashMap + 🕸 Graph
ETA calculation → 🕸 Graph (Dijkstra)
Surge pricing → 📊 Heap
Nearby drivers → 🕸 Graph + 📊 Heap
Route finding → 🕸 Graph
Google Maps navigation → 🕸 Graph
Traffic prediction → ⏳ Sliding Window + 📊 Heap
Ride history → 🧵 Stack
Carpool matching → 🕸 Graph
🛒 31–40: E-COMMERCE SYSTEMS
Amazon product search → 🔤 Trie + 🟦 HashMap
Product catalog → 🟦 HashMap + 🌲 Tree
Shopping cart → 🟦 HashMap
Order system → 🔁 Queue
Payment system → 🔁 Queue + 🟦 HashMap
Inventory system → 🟦 HashMap
Flash sale system → 📊 Heap + ⏳ Sliding Window
Recommendation engine → 🕸 Graph + 📊 Heap
Top selling products → 📊 Heap
Product ranking → 📊 Heap + 🟦 HashMap
🎥 41–50: VIDEO STREAMING (YouTube/Netflix)
Video streaming → 🔁 Queue
Video upload system → 🔁 Queue + 🟦 HashMap
Trending videos → 📊 Heap
Watch history → 🧵 Stack
Recommendation engine → 🕸 Graph + 📊 Heap
Search videos → 🔤 Trie
Autoplay next video → 🟦 HashMap + 📊 Heap
Like/dislike system → 🟦 HashMap + 🧮 Set
Comments system → 🔁 Queue
Watch time analytics → ⏳ Sliding Window
💳 51–60: FINTECH / BANKING
UPI system → 🔁 Queue + 🕸 Graph
Transaction processing → 🔁 Queue
Fraud detection → ⏳ Sliding Window + 🕸 Graph
Balance system → 🟦 HashMap
Ledger system → 🌲 Tree + 🟦 HashMap
Payment gateway → 🔁 Queue
Retry failed payment → 📊 Priority Queue
Transaction history → 🧵 Stack + 🌲 Tree
Currency conversion → 🟦 HashMap
Loan approval system → 🌲 Decision Tree
🔍 61–70: SEARCH SYSTEMS
Google search → 🔤 Trie + 🕸 Graph
Autocomplete → 🔤 Trie
Search ranking → 📊 Heap
Query suggestion → 🔤 Trie + 🟦 HashMap
Search indexing → 🟦 HashMap + 🌲 Tree
Document search → 🟦 HashMap
Keyword ranking → 📊 Heap
Spell correction → 🕸 Graph
Trending searches → 📊 Heap + ⏳ Sliding Window
Voice search system → 🔁 Queue
🧠 71–80: AI / DATA SYSTEMS
Recommendation system → 🕸 Graph + 📊 Heap
Machine learning pipeline → 🔁 Queue
Feature store → 🟦 HashMap
Real-time analytics → ⏳ Sliding Window
Event streaming → 🔁 Queue
Data aggregation → 🌲 Tree
Log processing → 🔁 Queue
Anomaly detection → ⏳ Sliding Window
Ranking system → 📊 Heap
Clustering system → 🕸 Graph
⚙️ 81–90: BACKEND SYSTEMS
API gateway → ⏳ Sliding Window + 🟦 HashMap
Rate limiter → ⏳ Sliding Window
Cache system (Redis) → 🟦 HashMap + 🧵 Doubly Linked List
LRU cache → 🟦 HashMap + 🧵 Stack
Job scheduler → 📊 Priority Queue
Notification system → 🔁 Queue
Email system → 🔁 Queue
Logging system → 🔁 Queue
Session management → 🟦 HashMap
Load balancer routing → 🟦 HashMap
🌐 91–100: ADVANCED SYSTEMS
CDN system → 🟦 HashMap
File storage (S3) → 🌲 Tree
Distributed database → 🌲 Tree + 🟦 HashMap
Search engine indexing → 🔤 Trie + 🌲 Tree
Blockchain system → 🧵 Linked List
Fraud graph detection → 🕸 Graph
Ad recommendation → 🕸 Graph + 📊 Heap
Video CDN optimization → 🔁 Queue
Real-time chat system → 🔁 Queue + 🟦 HashMap
Full social network → 🕸 Graph + 📊 Heap + 🟦 HashMap
🧠 MASTER RULE (THIS IS THE REAL TRICK)

If you forget everything, remember this:

Lookup → HashMap
Ranking → Heap
Time-based → Sliding Window
Relationships → Graph
Async → Queue
History → Stack
Search → Trie
Range queries → Tree

🚀 HOW TO USE THIS SHEET IN INTERVIEWS

When asked any system design question:

Step 1:

Identify feature (feed, search, chat, etc.)

Step 2:

Match to pattern instantly

Step 3:

Say:

“This system is basically Graph + Queue + Heap combination”

Then expand.

⚡ If you want next level

I can give you:

🔥 “Top 50 FAANG system design interview questions with answers”
🔥 “How to speak system design like senior engineer (exact script)”
🔥 “Build Instagram / WhatsApp / Uber in Node.js step-by-step”
🔥 “Real architecture diagrams with Kafka + Redis + DB flow”