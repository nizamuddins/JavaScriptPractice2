// program to convert decimal to binary
function facrotial(x) {

if(x>1){
    return  x * facrotial(x-1);
}else{
    return x;
}


}

// take input
let number = prompt('Enter a decimal number: ');
const factorialNum = facrotial(number);
console.log(factorialNum)