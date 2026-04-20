🔥 PRO PATTERN (Factory + Singleton 🔥🔥)
class DB {
  constructor() {
    if (DB.instance) return DB.instance;
    this.connection = "MongoDB Connected";
    DB.instance = this;
  }
}

class DBFactory {
  static getDB() {
    return new DB(); // always same instance
  }
}

const db1 = DBFactory.getDB();
const db2 = DBFactory.getDB();

console.log(db1 === db2); // true