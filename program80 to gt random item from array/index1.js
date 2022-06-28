const array = ['nizam', 'nayeem', 'nomaan'];

const random = Math.floor(Math.random() * array.length);

console.log(array[random])

const array1 = [2, 6, 4, 5];
const array2 = [1, 7, 2, 6];

function myFunc1(arr1, arr2) {
    let flag = [];

    for (let i = 0; i < arr1.length; i++) {

        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) 

                flag.push(arr1[i])

        }

    }

    return flag

}
const returnval = myFunc1(array1, array2);
console.log(returnval)