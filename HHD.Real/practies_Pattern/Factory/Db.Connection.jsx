// Common Interface
class Database {
    connect() {
        throw new Error("Connect method must be implemented");
    }
}

// MongoDB
class MongoDB extends Database {
    connect() {
        console.log("MongoDB connected");
    }
}

// SQL
class MySQL extends Database {
    connect() {
        console.log("MySQL connected");
    }
}

// Factory
class DatabaseFactory {
    static getDatabase(type) {
        switch (type) {
            case "mongo":
                return new MongoDB();
            case "sql":
                return new MySQL();
            default:
                throw new Error("Invalid DB type");
        }
    }
}

// Usage
const db = DatabaseFactory.getDatabase("mongo");
db.connect();


// DB Connection

// class MySQL{
//     connect(){
//         console.log("Connected to MySQL")
//     }
// }

// class MongoDB{
//     connect(){
//         console.log("Connected to MongoDB")
//     }
// }

// class DBFactory{

//     static create(type){

//         if(type === "mysql"){
//             return new MySQL()
//         }

//         if(type === "mongo"){
//             return new MongoDB()
//         }
//     }
// }

// let db = DBFactory.create("mongo")

// db.connect()

