// By using for in loop


const obj1 = {
    name:"nizam",
    age:21,
    hobbies:["cricket","praying"],
    about(){
        return this.name;
    }
    }
    
let count = 0;
  for(let obj in obj1){
  count++;
  }

  console.log(count)

