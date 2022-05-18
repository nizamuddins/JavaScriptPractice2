// progeam to print all prime numbers in an interval

const isPrime = +prompt("Enter the number");


for(let i = 2;i <=isPrime; i++)
{
    var isPrime1 = 0;
    for(var  j=2; j < i;j++){

        if(i%j===0){
            isPrime1 = 1;
            break;
        }
 
    }
   if(isPrime>1 && isPrime1===0){
  
    console.log(i);

   }

}

 
