const string = prompt("Enter a sentence");

const words = string.split(" ");

words.sort();

for(let word of words){

console.log(word)

}