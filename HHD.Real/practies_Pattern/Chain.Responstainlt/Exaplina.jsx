The Chain of Responsibility Pattern is a behavioral design pattern where a request is passed through a chain of handlers, and each handler decides:

Handle the request, or

Pass it to the next handler

This helps avoid large if/else conditions.

1️⃣ Simple Meaning

Chain of Responsibility allows multiple objects to handle a request without the sender knowing which object will handle it.

The request moves through a chain until one handler processes it.

2️⃣ Real-Life Example

Think of customer support escalation 📞

Customer Request
      |
      v
Support Agent
      |
      v
Manager
      |
      v
Director


If the agent cannot solve the problem, it goes to the manager, then director.

3️⃣ Problem Without Chain Pattern

Example: Expense approval

function approve(amount){

    if(amount <= 1000){
        console.log("Manager approved")
    }
    else if(amount <= 5000){
        console.log("Director approved")
    }
    else{
        console.log("CEO approved")
    }

}


Problems ❌

Many if/else

Hard to extend

Not flexible

4️⃣ Chain of Responsibility Solution

We create handlers in a chain.

Step 1 — Base Handler
class Handler {

    setNext(handler){
        this.next = handler
        return handler
    }

    handle(request){
        if(this.next){
            return this.next.handle(request)
        }
    }

}

Step 2 — Concrete Handlers
class Manager extends Handler {

    handle(amount){

        if(amount <= 1000){
            console.log("Manager approved:", amount)
        }else{
            super.handle(amount)
        }

    }

}

class Director extends Handler {

    handle(amount){

        if(amount <= 5000){
            console.log("Director approved:", amount)
        }else{
            super.handle(amount)
        }

    }

}

class CEO extends Handler {

    handle(amount){
        console.log("CEO approved:", amount)
    }

}

Step 3 — Build the Chain
let manager = new Manager()
let director = new Director()
let ceo = new CEO()

manager.setNext(director).setNext(ceo)

manager.handle(300)
manager.handle(3000)
manager.handle(10000)

5️⃣ Output
Manager approved: 300
Director approved: 3000
CEO approved: 10000

6️⃣ Diagram
Request
   |
   v
Manager
   |
   v
Director
   |
   v
CEO


Each handler either processes the request or passes it forward.

7️⃣ Real Node.js Example

Very common in Express middleware.

Request
   |
   v
Auth Middleware
   |
   v
Logging Middleware
   |
   v
Rate Limit Middleware
   |
   v
Controller


Example:

app.use(auth)
app.use(logger)
app.use(rateLimit)


Each middleware passes request to next().

This is a Chain of Responsibility implementation.

8️⃣ Benefits

✅ Removes large if/else blocks
✅ Flexible request handling
✅ Easy to add new handlers
✅ Decouples sender from receiver

9️⃣ Interview Definition

Chain of Responsibility is a behavioral design pattern that passes a request along a chain of handlers until one handler processes it.

🔟 Common Real Use Cases

Express middleware

Authentication pipelines

Logging systems

Event processing

Request validation pipelines

Payment processing chains

If you want, I can also show a real Node.js authentica