const array1 = [2, 6, 4, 5];
const array2 = [1, 7, 2, 6,4];

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


// By filter()


const arr1 = [3,1,7,9,4];

const arr2 = [3,8,6,7,7,2,4];


const arr3 = arr1.filter((a)=> arr2.lastIndexOf(a)!== -1);

console.log(arr3)