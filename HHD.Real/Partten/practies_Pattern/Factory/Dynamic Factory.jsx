✅ Better (Dynamic Factory 🔥)
class DatabaseFactory {
    static registry = {};

    static register(type, dbClass) {
        this.registry[type] = dbClass;
    }

    static getDatabase(type) {
        const DB = this.registry[type];
        if (!DB) throw new Error("Invalid DB type");
        return new DB();
    }
}

// Register dynamically
DatabaseFactory.register("mongo", MongoDB);
DatabaseFactory.register("sql", MySQL);

// Usage
const db = DatabaseFactory.getDatabase("mongo");
db.connect();

🧠 Why This is Powerful

✅ No if-else
✅ Easily extendable
✅ Plug & play system

🔥 Combine With Your Previous Patterns

Now you know: