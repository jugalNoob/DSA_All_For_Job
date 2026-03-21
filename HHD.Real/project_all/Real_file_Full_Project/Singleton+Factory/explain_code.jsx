🧠 Let’s Answer Your Question First
❓ Can we use Singleton + Factory together?

👉 ✅ YES, absolutely

🔥 Simple Explanation
Factory → decides what object to create
Singleton → ensures only one instance exists

👉 So:

Factory can create objects, and one of them can be a Singleton

💻 Example (Simple)
class DB {
  constructor() {
    if (DB.instance) return DB.instance;
    DB.instance = this;
  }

  connect() {
    console.log("DB connected");
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

🎯 Interview Line (Perfect Answer)

“Yes, Factory can be used to create objects, and Singleton ensures only one instance is returned.”

⚠️ But Now Back to MOCK INTERVIEW 🔥

👉 Don’t skip questions 😄

❓ Question 1 (AGAIN)

👉 What is the difference between:

Encapsulation vs Abstraction