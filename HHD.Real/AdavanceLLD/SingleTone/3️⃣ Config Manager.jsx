3️⃣ Config Manager
class Config {
  static instance;

  constructor() {
    if (Config.instance) return Config.instance;

    this.settings = { port: 3000 };
    Config.instance = this;
  }
}


👉 Shared config everywhere