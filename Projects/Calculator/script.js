

const display = document.querySelector('#display');

const buttons = document.querySelector('#buttons');

let currentVal = "0";
let previousVal = null;
let operator = null;
let shouldReset = false;

buttons.addEventListener("click", function (e) {

    const type = e.target.dataset.type;
    const value = e.target.dataset.value;
    if (!e.target.classList.contains("btn")) return;

    //Decimal handling
    if (type === "special" && value === "decimal") {

        //Decimal already exists
        if (currentVal.includes('.')) {
            return;
        }
        if (currentVal === "0") {

            currentVal = "0."

        } else {
            currentVal += "."
        }

        display.innerText = currentVal;
        return;
    }

    //Handling operators

    if (type === "operator") {

        // replace operator if user presses operators repeatedly
        if (operator !== null && shouldReset) {
            operator = value;
            return;
        }

        if (operator === null) {
            previousVal = currentVal;
        } else {
            previousVal = String(calculate(previousVal, currentVal, operator));
            currentVal = previousVal;
            display.innerText = currentVal;
        }

        operator = value;
        shouldReset = true;
        return;
    }

    // Equals handling
    if (type === "special" && value === "equal") {

        // Nothing to calculate
        if (operator === null || previousVal === null) return;

        const result = calculate(previousVal, currentVal, operator);

        currentVal = String(result);
        display.innerText = currentVal;

        previousVal = null;
        operator = null;
        shouldReset = true;

        return;
    }

    //Number handling
    if (type === "number") {
        if (shouldReset) {
            currentVal = value;
            shouldReset = false;
        } else if (currentVal === "0") {
            currentVal = value;
        } else {
            currentVal += value;
        }

        display.innerText = currentVal;
        return;
    }


})


function calculate(previousVal, currentVal, operator) {
    let a = Number(previousVal);
    let b = Number(currentVal);

    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b === 0 ? 0 : a / b;
    }
}