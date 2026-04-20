1️⃣ Database Connection (MOST IMPORTANT)
class DB {
  static instance;

  constructor() {
    if (DB.instance) return DB.instance;

    console.log("DB Connected 🚀");
    DB.instance = this;
  }
}

const db1 = new DB();
const db2 = new DB(); // won't reconnect


👉 Prevents multiple DB connections