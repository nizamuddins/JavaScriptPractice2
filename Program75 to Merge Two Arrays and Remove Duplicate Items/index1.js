const array1 = ["nizam", "nayeem"]

const array2 = ["nomaan", "mohd"];

const array3 = [
    ...array1,
    ...array2
];
console.log(array3)

// By concats
const arrays1 = ["nizam", "nayeem", "nizam"]
const arrays2 = ["nomaan", "mohd", "nazeer", "nomaan"];

function myFunc(array4, array5) {

    const array6 = [].concat(array4, array5);
    const set = new Set(array6)

    let array7 = Array.from(set)

    // console.log(array7)
    return array7

}

console.log(myFunc(arrays1, arrays2))
