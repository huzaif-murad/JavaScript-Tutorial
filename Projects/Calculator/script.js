

function updateDisplay(e) {



    document.querySelector("#display").innerText += e.target.innerText;
}

document.querySelector("#buttons").addEventListener("click", function (e) {
    updateDisplay(e)
})