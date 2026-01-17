
// function createUser(product, price) {
//     this.product = product;
//     this.price = price;
// }

// createUser.prototype.increment = function () {
//     return this.price + 10;

// }
// const coffee = new createUser("coffee", 15);
// const chai = new createUser("chai", 10);

// console.log(coffee.increment());


let userName = "Huzaif           ";

String.prototype.trueLength = function () {
    console.log(this.trim().length);
}

userName.trueLength()


const student = {
    userName: "Huzaif",
    password: "123",
    marks: 67
}
const teacher = {
    userName: "Vadgave",
    password: "1234",
    salary: "200000",
    __proto__: student
}



console.log(teacher.marks)