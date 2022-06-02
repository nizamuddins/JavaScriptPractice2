// object instance

const obj = new Object({

    firstName: "nizam",
    age: 21,
    hobbies: [
        "playing", "prauying", "swimming"
    ],
    about() {
        return this.firstName;
    }

})




console.log(obj.firstName);

console.log(obj.about())
console.log(obj["hobbies"])
