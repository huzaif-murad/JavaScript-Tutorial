

const display = document.querySelector('#display');
console.log(display);

const buttons = document.querySelector('#buttons');

let currentVal = "0";

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
    if (type === "number") {
        if (currentVal === "0") {
            display.innerText = e.target.dataset.value;
            currentVal = display.innerText;
        } else {
            display.innerText = display.innerText + e.target.dataset.value;
            currentVal = display.innerText;
        }
    }

    console.log(e.target.dataset.type, e.target.dataset.value)

})
