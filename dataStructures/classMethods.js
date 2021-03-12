// class methods, instance methods

let data = new Array(1, 2, 3)
data.push(7, 9, 4)
console.log(data)
    // comment
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`
    }

}

let marcus = new Student('Mark', 'Blane')
console.log(marcus.fullName())