// By using spread operator

const obj1 = {
    name: "nizam",
    age: 21,
    gender:"male",
    hobbies: [
        "cricket", "praying"
    ],
    about() {
        return this.name;
    }
}

const keys = Object.keys(obj1);

console.log(keys.length)