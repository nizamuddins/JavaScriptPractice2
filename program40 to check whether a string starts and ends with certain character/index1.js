// starWith() and endWith() method

const string = prompt("Enter a  string");

function myFunc(str) {

    if (str.startsWith("S") && str.endsWith("G")) {

        console.log("THe string starts with S and ends with G")

    } else if (str.startsWith("S")) {
        console.log("The string start with S but does not ends with G")
    } else if (str.endsWith("S")) {

        console.log("The string  does not start with S but ends with G")

    } else {
        console.log("THe string does not starts with S nither ends with G")

    }

}

myFunc(string)



