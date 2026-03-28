1️⃣ What is Singleton Pattern?

Singleton is a design pattern that ensures a class has only one instance and provides a global access point to that instance.

Key points:

Only one object is created

Subsequent requests reuse the same object

Useful for resources like database connections, logging, configuration, caching

2️⃣ Why use Singleton for DB?

In backend applications:

Creating a new database connection every time is expensive

Too many connections can overload the database

Singleton ensures one shared DB connection for all requests

Benefits:

Resource-efficient

Avoid multiple connections

Consistent access to DB

3️⃣ Example: MongoDB Singleton in Node.js
// db.js
const { MongoClient } = require('mongodb');

class Database {
    constructor() {
        this.client = null;
        this.db = null;
    }

    async connect(uri, dbName) {
        if (!this.client) { // ✅ create only once
            this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await this.client.connect();
            console.log('DB Connected');
            this.db = this.client.db(dbName);
        }
        return this.db; // return existing instance if already connected
    }

    getDb() {
        if (!this.db) throw new Error('Database not connected yet');
        return this.db;
    }
}

// Export **single instance**
module.exports = new Database();

4️⃣ Usage in API
// app.js
const dbInstance = require('./db');

async function run() {
    const db = await dbInstance.connect('mongodb://localhost:27017', 'myDatabase');
    
    const users = db.collection('users');
    const result = await users.find({}).toArray();
    console.log(result);
}

run();


Key points:

require('./db') always returns the same instance

connect() will create connection only once

Multiple modules using dbInstance share the same connection

5️⃣ How Singleton Works Internally
+--------------------+
|      Database      |  <-- Only one instance
+--------------------+
| client             |
| db                 |
+--------------------+
| connect()          |
| getDb()            |
+--------------------+

All modules → require('./db') → same object


The first connect() creates the client

Subsequent calls just return the existing client

6️⃣ Real-World Use Cases

Database connection (MongoDB, MySQL, PostgreSQL)

Redis or Cache client

Logger service (Winston, Pino)

Configuration / Environment variables

Message queue connection (Kafka producer/consumer)

7️⃣ Benefits in System Design

Reduces connection overhead

Ensures thread-safe or single-thread usage in Node.js

Centralized access → easier to manage errors and disconnects