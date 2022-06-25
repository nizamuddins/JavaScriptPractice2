const array = [
    1,
    4,
    5, {
        naem: 'nizam',
        age: 21
    }
]

for (let i = array.length; i <= array.length && i > 0; --i) {

    array.pop()

}
console.log(array)


// by splice()

const array2 = [3,6,8,2];

array2.splice(0);
console.log(array2)



// By fnction 

const array3 = [3,6,8,2];

function myFunc(arr){


arr = []

return arr
}

console.log(myFunc(array3))



const array4 = [3,6,8,2];

function myFunc(arr){


arr.length = 0

return arr;
}

console.log(myFunc(array3))