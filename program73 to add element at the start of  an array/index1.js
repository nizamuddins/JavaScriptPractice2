// By unshift()

const array = [2,5,3,7];

array.unshift(6);
console.log(array)



// By splice()

const array2 = [4,9,2];

array2.splice(0,0,3);

console.log(array2);


// By spread operator

const array3 = [2,5,8,3];
const array4 = [67,...array3];
console.log(array4)