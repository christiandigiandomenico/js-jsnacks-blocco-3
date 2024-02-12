function tagliaArray(array, posizioneMin, posizioneMax) {

    const newArray = [];
    for (let i = posizioneMin; i <= posizioneMax; i++) {
        newArray.push(array[i]);
    }
    return newArray;

}

const arrayNumeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const nuovoArray = tagliaArray(arrayNumeri, 5, 9);

console.log(nuovoArray)