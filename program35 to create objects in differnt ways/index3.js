//  constructor function


function myfunc(firstName,age,clg){

this.firstName = firstName;
this.age = age;
this.clg = clg;
this.about = function (){
    console.log(`iam from ${this.clg}`)
}
this.scores = {
    marks:100,
    grade:"pass",
}



}


const user1 = new myfunc("nizam",21,"Liet");
user1.about();

console.log(user1.scores.marks)