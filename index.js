// task 1
const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12,
    print() {
        console.log(`${this.firstName} ${this.lastName} is a student in class ${this.class}`)
    }
};

student.print();

// task 2
const person = {
    firstName : "John", 
    lastName : "Smith", 
    age : 41,
    job : "engineer",
    residence : "France",
    printSentence() {
        console.log(`${this.firstName} ${this.lastName} is an ${this.age} years old ${this.job} living in ${this.residence}.`);
    },
    // bonus task
    getLength() { 
        let counter = 0;
        for (const prop in person) {
            counter++;
        };
        console.log(counter);
        // alternative solution for bonus task
        //const size = Object.keys(person).length;
        //console.log(size);
    },
};

person.printSentence();
person.getLength();
