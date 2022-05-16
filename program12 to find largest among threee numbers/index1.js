// To check largest among three numbers

const num1 = +prompt("Enter the first number");
const num2 = +prompt("Enter the second number");
const num3 = +prompt("Enter the third number");

if(num1 > num2 && num1 > num3)
{
    console.log(num1 + " is the greatest number");
}else if(num2 > num1 && num2 > num3 ){
    console.log(num2 + " is the greatest number");

}else{
    console.log(num3 + " is the greatest number");
    
}
