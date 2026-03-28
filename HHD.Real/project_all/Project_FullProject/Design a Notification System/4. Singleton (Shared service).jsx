🔹 4. Singleton (Shared service)
class Logger {
  static instance;

  constructor() {
    if (Logger.instance) return Logger.instance;
    Logger.instance = this;
  }

  log(msg) {
    console.log("LOG:", msg);
  }
}

const logger = new Logger();


👉 Used for:

Logging
Redis connection
DB connection