🚀 Advanced (BEST PRACTICE)

Instead of constructor trick, use static getter

class Singleton {
  static instance;

  constructor() {
    if (Singleton.instance) {
      throw new Error("Use getInstance()");
    }
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

⚡ Interview Answer (Perfect)

👉
“Singleton ensures only one instance of a class exists and provides a global access point. It is commonly used for database connections, logging, and configuration management.”