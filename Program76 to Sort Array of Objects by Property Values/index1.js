const arr = [
    {
        name: "nizam",
        age: 21
    }, {
        name: "nizam",
        age: 19
    }, {
        name: "nizam",
        age: 27
    }, {
        name: "nizam",
        age: 13
    }
] 
arr.sort((a, b) =>a.age - b.age)
console.log(arr)

const array1 = [
    {
        a: 6
    }, {
        a: 6
    }, {
        a: 7
    }, {
        a: 9
    }, {
        a: 8
    }, {
        a: 8
    }, {
        a: 10
    }, {
        a: 10
    }
]

let array = []
for (let i = 0; i < array1.length - 1; i++) {

    if (array1[i].a !== array1[i + 1].a) {

        array.push(array1[i + 1])

    } else if (i == 0) {
        array.push(array1[i])
    }

}




array.sort((a, b) => b.a - a.a)

console.log(array)
