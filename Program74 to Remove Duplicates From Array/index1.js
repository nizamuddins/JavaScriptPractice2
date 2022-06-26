// By loop

const array = [
    1,
    5,
    2,
    5,
    2,
    6
];

let array2 = [];

for (let i of array) {

    if (array2.lastIndexOf(i) === -1) {
        array2.push(i)
    }

}
console.log(array2)



// By Set()


const array3 = [1,2,1,2,3,4,3];

const set = new Set(array3)

let array4 = [];
for(let i of set){

array4.push(i)

}
// console.log(Array.from(set))

console.log(array4)
