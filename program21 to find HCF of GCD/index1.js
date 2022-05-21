// program to find HCF or GCD by for loop


const num1 = +prompt("Enter the first number");
const num2 = +prompt("Enter the Second number")

let hcf;
for(let i=0;i<=num1 && i<=num2;i++){

    if(num1%i===0 && num2%i===0){
     hcf = i;       
    
    }

}

console.log(`HCF of ${num1},${num2} is ${hcf}`);

