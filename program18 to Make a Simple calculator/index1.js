// program to make simple calculator by if esle

const operator = prompt("Enter the opertaor(+,-,*,/):");

const num1 = +prompt("Enter the first number");
const num2 = +prompt("Enter the Second number");

if (operator === "+") {

    let result = num1 + num2;
    console.log(`Sum of two numbers ${num1},${num2} is ${result}`)

} else if (operator === "-") {

    let result = num1 - num2;
    console.log(`Subrtaction of two numbers ${num1},${num2} is ${result}`)

} else if (operator === "*") {

    let result = num1 * num2;
    console.log(`Multiplication of two numbers ${num1},${num2} is ${result}`)

} else {

    let result = (num1 / num2);
    console.log(`Divison of two numbers ${num1},${num2} is ${result}`)

}
