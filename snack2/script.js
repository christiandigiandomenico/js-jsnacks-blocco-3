const buttonElement = document.querySelector("#start-game")

buttonElement.addEventListener("click", function () {

    document.getElementById("result").innerHTML = fusedArray

})

function arrayCalculated(array1, array2) {
    const fusedArray = [];
    for (let i = 0; i < array1.length; i++) {
        fusedArray.push(array1[i]);
        fusedArray.push(array2[i]);
    }
    return fusedArray;
}

const arrayOne = ['a', 'b', 'c', 'd', 'e'];
const arrayTwo = [1, 2, 3, 4, 5];
const fusedArray = arrayCalculated(arrayOne, arrayTwo);