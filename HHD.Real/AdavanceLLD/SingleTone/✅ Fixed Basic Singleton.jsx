✅ Fixed Basic Singleton
class Singleton {

  static instance = null;

  constructor(connected) {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    this.connected = connected;
    Singleton.instance = this;
  }

  dbconnect() {
    console.log(this.connected);
  }
}

let test1 = new Singleton('DB1');
let test2 = new Singleton('DB2');

test1.dbconnect(); // DB1
test2.dbconnect(); // DB1 (same instance!)

🧠 What is Singleton (Simple Meaning)

👉 Only ONE object can exist
👉 Everyone uses the same instance