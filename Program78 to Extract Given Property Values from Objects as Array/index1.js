// By map()

const array = [
    {
        name: "nizam",
        age: 21
    }, {
        name: "nayeem",
        age: 23
    }, {
        name: "nomaan",
        age: 12
    }, {
        name: "mehmood",
        age: 34
    }
]

const newArr = array.map((a) => {

    return a.age
})

console.log(newArr)

// By for Loop

const myFunc = (arr2) => {
    let arr = []

    for (let i = 0; i < arr2.length; i++) {

        arr.push(array[i].age)

    }

    return arr
}

console.log(myFunc(array))