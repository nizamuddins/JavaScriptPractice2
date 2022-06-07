// By using []


const obj1 = {
    name:"nizam",
    age:21,
    hobbies:["cricket","praying"],
    about(){
        return this.name;
    }
    }
    
obj1["gender"] = "male";
console.log(obj1)
