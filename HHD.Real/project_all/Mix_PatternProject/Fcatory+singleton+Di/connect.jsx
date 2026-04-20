✅ CLEAN + INTERVIEW READY VERSION
🧠 1. Singleton (Correct)
class Singleton {

    static instance = null;

    constructor(connect){
        this.connect = connect;
    }

    dbConnect(){
        console.log(this.connect);
    }

    static getInstance(connect){
        if(!Singleton.instance){
            Singleton.instance = new Singleton(connect);
        }
        return Singleton.instance;
    }
}

🏭 2. Factory
class Factory {

    static create(type, connect){

        switch(type){

            case 'mongodb':
                return Singleton.getInstance(connect);

            default:
                throw new Error('Invalid DB type');
        }
    }
}

💉 3. Dependency Injection (DI)
class DI {

    constructor(db){
        this.db = db;
    }

    dbConnectdi(){
        this.db.dbConnect();
    }
}

🚀 Usage
let link = Factory.create('mongodb', 'connect123');

let link1 = new DI(link);

link1.dbConnectdi();

console.log(link instanceof Singleton); // true

🧠 Step-by-step Flow
Step 1: Factory
Factory → creates Singleton DB instance

Step 2: DI
DI receives DB object

Step 3: Usage
DI calls dbConnect()

🎯 Output
connect123
true

🧠 Core Concepts
🟢 Singleton

👉 Only one DB connection exists

🟡 Factory

👉 Decides what object to create

🔵 Dependency Injection

👉 Pass dependencies instead of creating inside class