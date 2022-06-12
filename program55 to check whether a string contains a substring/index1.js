// By .includes() method


const string = prompt("Enter a string");
const strCheck = prompt("Enter a string to be checked");

if(string.includes(strCheck)){
    console.log("The string contains "+ strCheck);

}else{
    console.log("The string does not contains "+ strCheck);

}


// By lastindex() method

const string1 = prompt("Enter a string");
const strCheck1 = prompt("Enter a string to be checked");

const result  = string1.lastIndexOf(strCheck1,0);
if(result !== -1){
    console.log("The string contains "+ strCheck1);

}else{
    console.log("The string does not contains "+ strCheck1);

}
