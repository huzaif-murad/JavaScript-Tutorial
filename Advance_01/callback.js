
function division(a, b) {
    console.log(a / b);

}
function addition(a, b, division) {
    division(a, b);
    return a + b;

}

let a = 10;
let b = 5;
let ans = addition(a, b, division);
console.log(ans);
