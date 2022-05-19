// progeam to print all prime numbers in an interval

const isPrime = +prompt("Enter the number");


for(let i = 2;i <=isPrime; i++)
{
    for(var  j=2; j < i;j++){

        if(i%j===0){
            break;
        }
 
    }
   if(i===j){
  
    console.log(i);

   }

}

 
