
// const promiseOne = new Promise(function (resolve, reject) {
//     let error = true;

//     if (error) {
//         reject("Connection error....");
//     } else {

//         resolve("Connection established....");
//     }
// })

// promiseOne.then(function (msg) {
//     console.log(msg);

// }).catch(function (errorMsg) {
//     console.log((errorMsg));

// }).finally(function () {
//     console.log("this will run no matter what.");

// })

// async function promiseResolved(params) {

//     const response = await promiseOne;
//     console.log(response);

// }

// promiseResolved()


fetch('https://jsonplaceholder.typicode.com')
    .then((response) => {
        console.log(typeof response);


        return response;
    })
    .then((data) => {
        console.log(data);

    })
    .catch((error) => {
        console.log(error);

    });