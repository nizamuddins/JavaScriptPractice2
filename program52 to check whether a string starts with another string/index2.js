// By .test() method

const string = 'Hellol World';
const string2 = /He/g;
const starts = string2.test(string)
if(starts){
    console.log("The string starts with He")
}else{
    console.log("Does'nt starts with He");
}