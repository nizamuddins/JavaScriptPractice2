// By using for in loop


const obj1 = {
    name:"nizam",
    age:21,
    hobbies:["cricket","praying"],
    about(){
        return this.name;
    }
    }
    
  for(let obj in obj1){
      console.log(obj  + ":" +obj1[obj])
  }