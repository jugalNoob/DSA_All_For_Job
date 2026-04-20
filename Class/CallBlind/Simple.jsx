class Main {
    constructor(name, rollno, gender) {
        this.name = name;
        this.rollno = rollno;
        this.gender = gender;
    }
}


// create objects using class
let data = new Main('jugal', 45, 'male');
let data1 = new Main('jugal', 69, 'male');
let data2 = new Main('karan', 10, 'male');


function main() {
    if (this.rollno > 12) {
        console.log(`roll ${this.rollno}`);
    }
}

// use apply
main.apply(data);
main.apply(data1);
main.apply(data2);
