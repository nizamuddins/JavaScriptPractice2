// program to convert an object to a string

const person = {
    name: 'Jack',
    age: 27
}

const result1 = String(person);
const result2 = String(person['name']);

console.log(result1);
console.log(result2);

console.log(typeof result1);
console.log(typeof result2);


// by JSON.stringify()

const person1 = {
    name: 'Jack',
    age: 27
}

const string = JSON.stringify(person1)
console.log(typeof string)