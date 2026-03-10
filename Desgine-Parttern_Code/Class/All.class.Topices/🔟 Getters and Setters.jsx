🔟 Getters and Setters
Code
class User {

  constructor(name){
    this._name = name
  }

  get name(){
    return this._name.toUpperCase()
  }

  set name(val){
    this._name = val.trim()
  }

}

Example
const u = new User("jugal")

console.log(u.name)

u.name = "  ram  "

console.log(u.name)


Output

JUGAL
RAM


Getter → read property
Setter → update property. 

JavaScript_OOP_Interview_Guide