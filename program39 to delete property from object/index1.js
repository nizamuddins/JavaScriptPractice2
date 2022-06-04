const obj = {
name:"nizam",
age:21,
hobbies:["cricket","praying"],
about(){
    return this.name;
}
}



delete obj.hobbies;
delete obj["about"]
console.log(obj)