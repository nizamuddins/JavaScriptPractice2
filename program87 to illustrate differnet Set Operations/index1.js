const set = new Set(['mango', 'banana', 'orange']);

set.add(22334);

console.log(set.has(22334))

set.forEach((a) => {
    console.log(a)
})

console.log(set.size)

for (let i of set) {
    console.log(i)
}

let length = 0;
for (let i of set) {
    length++;
}
console.log(length)
