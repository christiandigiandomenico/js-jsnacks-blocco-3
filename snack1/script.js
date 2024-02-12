const buttonElement = document.querySelector("#start-game")

buttonElement.addEventListener("click", function () {

    const userInput = prompt("Inserisci la parola che verrà invertita")

    invertitore(userInput)

    document.getElementById("result").innerHTML = invertitore(userInput)

})

function invertitore(variable) {
    let newString = "";
    let index = (variable.length - 1);

    for (let i = index; i >= 0; i--) {
        newString += variable[i];
    }

    return (newString);
}