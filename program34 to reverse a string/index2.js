// program to reverse a string  by reverse() method

const reverse = prompt("Enter a string");

const words = reverse.split("");
const reveresing = words.reverse();
const newStr = reveresing.join("");
console.log(newStr)