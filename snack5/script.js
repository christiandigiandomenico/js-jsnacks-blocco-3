const buttonElement = document.querySelector("#start-game")

buttonElement.addEventListener("click", function () {

    const userInput = prompt("Scrivi una frase in minuscolo")

    document.getElementById("result").innerHTML = textUppercase(userInput)

})

function textUppercase(string) {
    let words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    let nuovaStringa = words.join(" ");

    return nuovaStringa;
}