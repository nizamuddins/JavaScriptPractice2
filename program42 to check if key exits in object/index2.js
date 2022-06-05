// By in operator


const obj = {
    name:"nizam",
    age:21,
    hobbies:["cricket","praying"],
    about(){
        return this.name;
    }
    }
    
 const property = "age" in obj;   
    
if(property){
    console.log("key exits!!")
}else{
    console.log("key does not exits!!")
}