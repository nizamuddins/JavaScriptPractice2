const array = [1, 23];

const obj = {

    name: "nizam",
    age: 21
}

array.push(obj)
console.log(array)




// By spread Operator

const array2 = [
    ...array,
    obj
];




console.log(array2)

// By splice()

array2.splice(4, 0, obj);

console.log(array2)
