const buttonElement = document.querySelector("#start-game")

buttonElement.addEventListener("click", function () {

    const userInput = prompt("Scrivi una parola")

    function rearrange(string) {
        return string.split('').sort().join('');
    }


    const string = userInput;
    const orderedString = rearrange(string);

    document.getElementById("result").innerHTML = orderedString

})