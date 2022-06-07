// By using spread operator

const obj1 = {
    name: "nizam",
    age: 21,
    hobbies: [
        "cricket", "praying"
    ],
    about() {
        return this.name;
    }
}

const obj2 = {
    gender: "male"
}

const obj3 = {...obj1,...obj2};
console.log(obj3)