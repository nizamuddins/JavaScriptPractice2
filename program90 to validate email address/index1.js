function myFunc(email1){

const regX =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if(regX.test(email1)){
    console.log("email is valid")
}else{
    console.log('email is not valid')
}





}


const emails = "uddinmdnizam61@gmail.com";


myFunc(emails)
