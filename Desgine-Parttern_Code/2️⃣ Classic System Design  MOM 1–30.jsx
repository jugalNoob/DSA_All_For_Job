| Rank | Problem                  | Why Asked                        | Key Focus Areas / Trade-offs                         | Typical Scale                          | Difficulty        |
| ---- | ------------------------ | -------------------------------- | ---------------------------------------------------- | -------------------------------------- | ----------------- |
| 1    | TinyURL                  | Classic starter; hashing + DB    | Hash collisions, DB choice, analytics, rate limiting | 100M+ shortenings/day                  | Easy-Medium       |
| 2    | Twitter Feed             | Fan-out vs fan-in, ranking       | Push vs pull, caching, ML signals                    | 500M+ users, millions tweets/sec       | Medium-Hard       |
| 3    | Instagram                | Media storage, stories           | CDN, feed generation, expiry                         | High read:write, petabytes             | Medium-Hard       |
| 4    | YouTube                  | Video streaming, recommendations | Chunked upload, adaptive bitrate, CDN                | Billions views/day, global latency <2s | Hard              |
| 5    | Uber                     | Real-time matching, ETA, surge   | Geospatial indexing, WebSockets                      | Millions rides/day, real-time          | Hard              |
| 6    | WhatsApp                 | E2E encryption, offline delivery | Group scaling, media storage                         | Billions messages/day                  | Medium-Hard       |
| 7    | Netflix                  | Video + recommendation           | Microservices, ML pipeline                           | Global, multi-region, peak spikes      | Hard              |
| 8    | Amazon                   | E-commerce platform              | Search, inventory, transactions                      | Peak events (Prime Day), high write    | Hard              |
| 9    | Google Search            | Crawling, indexing, ranking      | Distributed crawler, inverted index                  | Trillions pages, freshness             | Very Hard         |
| 10   | Distributed Rate Limiter | API protection                   | Token bucket / sliding window, Redis                 | Millions req/sec                       | Medium            |
| 14   | LLM Serving              | Prompt + inference scaling       | KV cache, tensor parallelism, batching               | 100k+ RPS, low latency                 | Hard (2026 trend) |
| 19   | Distributed Cache        | Consistency & eviction           | LRU/LFU, write-through/write-back                    | Sub-ms latency, high hit rate          | Medium-Hard       |
| 20   | Real-time Analytics      | Stream + dashboards              | Lambda/Kappa architecture, window aggregation        | Millions events/sec                    | Hard              |
