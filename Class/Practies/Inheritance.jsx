1️⃣ First Structure (Sibling Classes)
        User
       /    \
   Admin   Moderator


Code:

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

class Moderator extends User{
    banUser(){
        console.log("User banned")
    }
}


Here:

Admin → login(), deletePost()
Moderator → login(), banUser()


They cannot access each other's methods.


:::::::::::: ---------------------------->>>

2️⃣ Second Structure (Chain Inheritance)
User
  ↓
Admin
  ↓
Moderator


Code:

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

class Moderator extends Admin{
    banUser(){
        console.log("User banned")
    }
}


Now methods flow downward.

User
 └─ login()

Admin
 ├─ login()
 └─ deletePost()

Moderator
 ├─ login()
 ├─ deletePost()
 └─ banUser()





 3️⃣ Your Object
let link = new Admin()


Prototype chain:

link
 ↓
Admin.prototype
 ↓
User.prototype
 ↓
Object.prototype

4️⃣ Method Calls
✔ login()

Found in:

User.prototype


Output

User logged in

✔ deletePost()

Found in:

Admin.prototype


Output

Post deleted

✔ deletePost() again

You called it twice:

link.deletePost()
link.deletePost()


Output

Post deleted
Post deleted

5️⃣ Why banUser() Does NOT Work

Because the object is:

new Admin()


Prototype chain:

Admin → User


But Moderator is below Admin, not above.

So this would fail:

link.banUser()


Error:

TypeError: link.banUser is not a function

6️⃣ If You Want All 3 Methods

Create a Moderator object:

let link = new Moderator()

link.login()
link.deletePost()
link.banUser()


Output

User logged in
Post deleted
User banned

7️⃣ Prototype Chain (Moderator)
link
 ↓
Moderator.prototype
 ↓
Admin.prototype
 ↓
User.prototype
 ↓
Object.prototype

🧠 Important Interview Concept

JavaScript inheritance works top → down only

Parent → Child


Methods flow downward, not upward.

🔥 Advanced Interview Trick

class is actually syntactic sugar for prototype inheritance.

Internally JavaScript converts this:

class Admin extends User


into something like:

Admin.prototype = Object.create(User.prototype)
class MainSchool{
    constructor(age){
        this.age=age
    }

    firstClass(){
        console.log(this.age , 'this is my first class ')
    }
}



class SeondBranch extends MainSchool{

    constructor(name ,  age){
        super(age)
        this.name=name 
    }

   secondClassExplain(){

 if(this.age > 26){

   super.firstClass()

   console.log(this.age + 20)

 }else{
   console.log("check your age")
 }

}

    
}

let test1=new SeondBranch('jugal'  , 27)

// test1.firstClass()
test1.secondClassExplain()
console.log(test1)