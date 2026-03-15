DB Connection

class MySQL{
    connect(){
        console.log("Connected to MySQL")
    }
}

class MongoDB{
    connect(){
        console.log("Connected to MongoDB")
    }
}

class DBFactory{

    static create(type){

        if(type === "mysql"){
            return new MySQL()
        }

        if(type === "mongo"){
            return new MongoDB()
        }
    }
}

let db = DBFactory.create("mongo")

db.connect()

