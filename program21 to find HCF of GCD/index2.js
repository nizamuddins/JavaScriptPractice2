// program to find HCF or GCD by while loop and if else


const num1 = +prompt("Enter the first number");
const num2 = +prompt("Enter the Second number")

let hcf;
let i=0;

while(i<=num1 && i<=num2){

    if(num1%i===0 && num2%i===0){
     hcf = i;       
    
    }
    i++
}

console.log(`HCF of ${num1},${num2} is ${hcf}`);

