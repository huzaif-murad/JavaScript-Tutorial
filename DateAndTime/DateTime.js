let myDate = new Date("2002-03-02");

// console.log(myDate.toDateString());
// console.log(myDate.getTime());

let newDate = Date.now();

// console.log(newDate);


newDate.toLocaleString('default', {
    weekday: "long",

});

console.log(newDate);