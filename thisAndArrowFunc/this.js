const user = {
    username: "Huzaif",
    roll_no: 23,
    branch: "CSE DS",
    greeting: function () {
        // console.log(`${this.username}, welcome to our website.`);
        console.log(this)

    },
    hello: function () {
        console.log("hello");

    }
}

user.greeting()

// user.username = "Sam"
// user.greeting()