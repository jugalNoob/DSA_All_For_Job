2️⃣ Logger System
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


👉 One global logger