const buttonElement = document.querySelector("#start-game")

buttonElement.addEventListener("click", function () {

    const userInput = prompt("Scrivi una frase in minuscolo")

    document.getElementById("result").innerHTML = textUppercase(userInput)

})

function textUppercase(string) {

    let words = string.split(" ");

    let wordUppercase = words.map(function (parola) {
        return parola.charAt(0).toUpperCase() + parola.slice(1);
    });

    let nuovaStringa = wordUppercase.join(" ");

    return nuovaStringa;
}