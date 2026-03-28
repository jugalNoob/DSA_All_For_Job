5️⃣ D → Dependency Inversion Principle (DIP) 🔥 (VERY IMPORTANT)

👉 “Depend on abstraction, not concrete class”

❌ Bad
class MySQL {
  save() {}
}

class UserService {
  constructor() {
    this.db = new MySQL();
  }
}


👉 Tight coupling ❌

✅ Good
class UserService {
  constructor(db) {
    this.db = db;
  }
}

const mongoDB = {
  save: () => console.log("Saved in Mongo"),
};

const service = new UserService(mongoDB);


👉 Flexible + scalable ✅

💡 Simple meaning:

👉 “Direct dependency mat rakho — inject karo”