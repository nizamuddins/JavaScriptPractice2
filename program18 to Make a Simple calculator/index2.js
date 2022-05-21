// program to make simple calculator by Switch statement

const operator = prompt("Enter the opertaor(+,-,*,/):");

const num1 = +prompt("Enter the first number");
const num2 = +prompt("Enter the Second number");

switch(operator){
     case "+":;
    var result = num1 + num2;
    console.log(`Sum of two numbers ${num1},${num2} is ${result}`);
    break;
    
    case "-":;
    var result = num1 - num2;
    console.log(`Subrtaction of two numbers ${num1},${num2} is ${result}`);
    break;
    
    case "*":;
    var result = num1 * num2;
    console.log(`Multiplication of two numbers ${num1},${num2} is ${result}`);
    break;
    
    case "/":;
    var result = (num1 / num2);
    console.log(`Divison of two numbers ${num1},${num2} is ${result}`);
    break;

    default:
        console.log("Not a valid operator ");
}
