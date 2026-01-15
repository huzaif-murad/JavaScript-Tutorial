
const promiseOne = new Promise(function (resolve, reject) {
    let error = true;

    if (error) {
        reject("Connection error....");
    } else {

        resolve("Connection established....");
    }
})

// promiseOne.then(function (msg) {
//     console.log(msg);

// }).catch(function (errorMsg) {
//     console.log((errorMsg));

// })

async function promiseResolved(params) {

    const response = await promiseOne;
    console.log(response);

}

promiseResolved()