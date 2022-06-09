// By trim() method

const string = "   Hello world  ";
const trim = string.trim();
console.log(trim)

// By RegExp
function myFunc(str){
    const trim1 = str.replace(/^\s+|\s+$/g,'' );
console.log(trim1)


}

const string1 =  "   Hello world  ";
myFunc(string1);