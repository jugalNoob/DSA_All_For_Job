8️⃣ Static Methods
Code
class MathUtil{

  static add(a,b){
    return a+b
  }

}

console.log(MathUtil.add(2,3))

Important

Static methods belong to class, not object.

Correct

MathUtil.add()


Wrong

new MathUtil().add()


Static used for utility functions. 

JavaScript_OOP_Interview_Guide