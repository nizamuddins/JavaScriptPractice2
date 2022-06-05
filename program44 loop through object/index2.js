// By using Object.keys()method and for of loop


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
const object = Object.keys(obj1);
for (let obj2 of object) {
    console.log(obj2 + ":" + obj1[obj2])
}
