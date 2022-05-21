// program to check numbers has same last digit


const num1 = +prompt("Enter the first number");
const num2 = +prompt("Enter the second number");
const num3 = +prompt("Enter the third number");


const result1 = num1 % 10;
const result2 = num2 % 10;
const result3 = num3 % 10;


if(result1===result2 && result1===result3){
    console.log(`${num1},${num2},${num3}, has the same last digit`)
}else{
    console.log(`${num1},${num2},${num3}, does not has the same last digit`)

}