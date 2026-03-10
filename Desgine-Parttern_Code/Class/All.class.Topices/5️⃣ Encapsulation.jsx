class Account {

  #balance = 0

  deposit(amount){
    this.#balance += amount
  }

  getBalance(){
    return this.#balance
  }
}


Step-by-Step

#balance

private variable


Cannot access outside.

Example

const acc = new Account()

acc.deposit(100)

console.log(acc.getBalance())


Output

100


Encapsulation hides internal data. 

JavaScript_OOP_Interview_Guide

