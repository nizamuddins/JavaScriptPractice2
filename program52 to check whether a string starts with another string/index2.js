// By .test() method

const string = 'Hellol Wolrd';

const starts = /He/g.test(string)
if(starts){
    console.log("The string starts with He")
}else{
    console.log("Does'nt starts with He");
}