// By using regular expression


const string = "Red is not red as red";
const regex = /red/gi;

const replace = string.replace(regex,"blue");
console.log(replace)