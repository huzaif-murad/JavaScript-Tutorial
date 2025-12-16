let obj1 = {
    name: "Huzaif",
    gender: "male",
    age: 22,
    hobbies: ["coding", "reading", "gaming"],
    isMarried: false
}

const obj2 = {
    profession: "Student",
    salary: 35
}

const { salary } = obj2
console.log(salary)

let obj3 = { ...obj1, ...obj2 }


// console.log(obj3)
// console.log(obj1);
// console.log(obj1.name);
// console.log(obj1.hobbies[0])
// obj1.name = "Sam"

// console.log(obj1.name);

