Good 👍 Now let's see how extends actually works internally in JavaScript.
Many interviewers ask this because class is just syntactic sugar over prototypes.

1️⃣ Your Code (Class Version)
class User{
    login(){
        console.log("User logged in")
    }
}

class Admin extends User{
    deletePost(){
        console.log("Post deleted")
    }
}


When you write this, JavaScript engine converts it internally into prototype code.

2️⃣ Internal Conversion (Approximate)

JavaScript internally behaves like this:

function User(){}

User.prototype.login = function(){
    console.log("User logged in")
}

function Admin(){}

Admin.prototype.deletePost = function(){
    console.log("Post deleted")
}


Now we must link prototypes.

3️⃣ Prototype Linking

extends basically does this:

Admin.prototype = Object.create(User.prototype)


This means:

Admin.prototype → inherits from → User.prototype


Then restore constructor:

Admin.prototype.constructor = Admin

4️⃣ Full Internal Equivalent
function User(){}

User.prototype.login = function(){
    console.log("User logged in")
}

function Admin(){}

Admin.prototype = Object.create(User.prototype)

Admin.prototype.deletePost = function(){
    console.log("Post deleted")
}

Admin.prototype.constructor = Admin

5️⃣ Object Creation
let link = new Admin()


Internally JavaScript does:

Step 1

Create empty object

link = {}

Step 2

Attach prototype

link.__proto__ → Admin.prototype

Step 3

Constructor runs

Admin()

6️⃣ Prototype Chain

Final chain:

link
 ↓
Admin.prototype
 ↓
User.prototype
 ↓
Object.prototype
 ↓
null

7️⃣ Method Lookup Process

When calling:

link.login()


JavaScript searches:

link → not found
Admin.prototype → not found
User.prototype → found ✅


So it runs:

User logged in

8️⃣ Visual Diagram
            Object.prototype
                   ↑
            User.prototype
               login()
                   ↑
            Admin.prototype
             deletePost()
                   ↑
                 link

9️⃣ Real Node.js Example

Example Role System

class User{
    login(){
        console.log("Login success")
    }
}

class Admin extends User{
    deleteUser(){
        console.log("User deleted")
    }
}

const admin = new Admin()

admin.login()
admin.deleteUser()


Used in:

Authentication systems
RBAC systems
Permission systems

🔟 Important Interview Question

Interviewers may ask:

Q: What does extends do internally?

Answer:

👉 It sets the prototype chain using

Object.create()


Example:

Admin.prototype = Object.create(User.prototype)

🔥 Very Advanced (Senior JS Interview)

Another question they ask:

What is difference between

__proto__
prototype
constructor


This confuses many developers.

If you want, I can explain this with a clear diagram that makes it impossible to forget