const array = [1, 3, 4, 5, 6]
const n = 4;
const newArray = myFunc(array, n);

console.log(newArray)
function myFunc(arr, n) {

    let array2 = []
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] != n) {
            array2.push(arr[i])
        }
    }
    return array2
};

// By splice()

const array3 = [1, 3, 4, 5, 6];
array.splice(2, 1);
console.log(array3)
