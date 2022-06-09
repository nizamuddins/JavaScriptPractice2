// By .test() method

const string = 'Hello Wolrd';
const index = 'He'
const starts = string.lastIndexOf(index, 0) === 0;
if (starts) {
    console.log("The string starts with He")
} else {
    console.log("Does'nt starts with He");
}