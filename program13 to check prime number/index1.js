const isPrime = +prompt("Enter the number");

var isPrime1 = 0;
for(let i = 2;i < isPrime; i++)
{
if(isPrime%i===0){
 isPrime1 = 1;
 break;
}


}
if(isPrime===1){
    console.log("1 is neither Prime nor Composite")
}
else if(isPrime>1 && isPrime1===0){
    console.log("The number is prime")
}else{
    console.log("The number is not prime")
}

