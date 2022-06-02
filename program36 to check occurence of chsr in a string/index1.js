function myfunc(str,char){

let occurence = 0;

for(let i=0;i<str.length;i++){

    if(str[i]==char){
        occurence++;
    }
}
return occurence;

}



const string = prompt("Enter a string");
const letter = prompt("Enter a letter to check");


const letterOucc  = myfunc(string,letter);
console.log(letterOucc)
