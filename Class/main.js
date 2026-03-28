class MainSchool {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    schoolInfo() {
        console.log("Main school:", this.name);
    }
}

// Male School
class ManSchool extends MainSchool {
    constructor(name, age, gender) {
        super(name, age);
        this.gender = gender;
    }

    studentInfo() {
        console.log("Male student:", this.name, this.gender);
    }
}

// Female School
class FemaleSchool extends MainSchool {
    constructor(name, age, gender) {
        super(name, age);
        this.gender = gender;
    }

    studentInfo() {
        console.log("Female student:", this.name, this.gender);
    }
}

// Male
let male = new ManSchool("Jugal", 26, "male");
male.schoolInfo();
male.studentInfo();

// Female
let female = new FemaleSchool("Kanakia", 26, "female");
female.schoolInfo();
female.studentInfo();
