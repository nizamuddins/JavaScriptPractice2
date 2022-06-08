const string = prompt("Enter a  string");
function myFunc(str) {
    if (/S/i.test(str) && /G$/i.test(str)) {
        console.log("THe string starts with S and ends with G ")
    } else if (/^S/i.test(str)) {
        console.log("The string start with S but does not ends with G")
    } else if (/^G/i.test(str)) {
        console.log("The string  does not start with Sbut ends with G ")
    } else {
        console.log(" THe string does not starts with S nither ends with G ")
    }
}
myFunc(string)



