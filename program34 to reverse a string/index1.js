// program to reverse a string

const reverse = prompt("Enter a string");

function reverfunc(str) {
    let len = str.length;
    let newStr = " ";
    for (let i = len - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;

}

const revStr = reverfunc(reverse);
console.log(revStr);