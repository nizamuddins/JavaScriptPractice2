const array = [1, 4, 0, 7, 3];

array.splice(3, 0, 6);
console.log(array)

// By for loop

const array2 = [1, 4, 0, 7, 3];

function myFunc(arr) {

    let index = 3;
    let element = 6;

    for (let i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1]
    
    }
    arr[index] = element;
    return arr

}
const array3 = myFunc(array2)
console.log(array3)