// program to find factorial of a number

const numFac = +prompt("Enter a number");
let num = 1;

for(let i = 1; i <= numFac;i++){

   num = num*i;

}
console.log(num);