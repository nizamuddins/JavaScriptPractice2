function myfunc(string2){
const slice1 = string2.slice(0,1);
const slice2 = string2.slice(1);
const upperCase = slice1.toUpperCase();

return upperCase + slice2


}



const string1 = prompt("Enter a string");


const string3  = myfunc(string1);
console.log(string3)
