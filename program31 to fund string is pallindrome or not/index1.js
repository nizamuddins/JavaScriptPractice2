function myFunc(str) {
    const len = str.length;

    for (let i = 0; i < len ; i++) {

        if (str[i] !== str[len - 1 - i]) {

            return "It is Not a pallinderome";

        } 
        

    }

    return "It is pallindrome"

}

const string = prompt("Enter the string ");

const func = myFunc(string);

console.log(func)