let arr = [3, 4, 5, 6, 7, 8]

// function square(num) {
//     console.log(num * num);
// }

// arr.forEach(square)


// for (const key in arr) {

//     console.log(arr[key]);

// }

// let obj1 = {
//     name: "Huzaif",
//     rollNum: 24,
//     division: "B"
// }

// for (const key in obj1) {
//     console.log(obj1[key])
// }

let arr2 = [
    {
        name: "Huzaif",
        rollNum: 24
    },
    {
        name: "Tassho",
        rollNum: 73
    }
]

for (const element of arr2) {
    console.log(element.name)
}