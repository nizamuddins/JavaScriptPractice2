const obj = {

    name: 'nizam',
    age: 21,
    hobbies: [
        'playing', 'writing', 'coding'
    ],
    about: function () {

        return `My name is ${this.name}`

    }

}

function myFunc1(a, b) {
    return a + b;
}

export {obj,myFunc1}