const string = prompt("Enter the string");
const vowels = ["a", "e", "i", "o", "u"];
function myFunc(str) {
    let length = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] == vowels[j]) {
                length++;
                break;
            }
        }
    }
    return length;
}
console.log(myFunc(string))