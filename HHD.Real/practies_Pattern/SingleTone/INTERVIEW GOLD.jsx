🚀 1. When to Use Each (INTERVIEW GOLD)
🔹 1. Singleton

👉 Use when:

Only ONE instance should exist

Examples:

DB connection

Cache instance

Logger

class DB {
    static instance;
    constructor() {
        if (DB.instance) return DB.instance;
        DB.instance = this;
    }
}
