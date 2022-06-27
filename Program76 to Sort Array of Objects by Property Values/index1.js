const array = [

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

array.sort((a, b) => {
    return a.age - b.age;
})
console.log(array)



