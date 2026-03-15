class LinlkL {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    firstClass() {
        console.log(this.name, this.age);
    }
}

// Child class
class Test2 extends LinlkL {
    constructor(name, age, gender) {
        super(name, age); // call parent constructor
        this.gender = gender;
    }

    secondClass() {
        console.log(this.gender , this.name);
    }
}

// Create child object
let link = new Test2('Jugal', 18, 'male');

link.firstClass();    // Jugal 18   → inherited from LinlkL
link.secondClass();   // male


