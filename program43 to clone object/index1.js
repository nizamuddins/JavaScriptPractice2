// By Object.assign() method


const obj1 = {
    name:"nizam",
    age:21,
    hobbies:["cricket","praying"],
    about(){
        return this.name;
    }
}
    
const obj2 =  Object.assign({},obj1)
console.log(obj2)