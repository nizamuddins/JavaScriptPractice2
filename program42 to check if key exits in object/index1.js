// By .hasOwnProperty() method


const obj = {
    name:"nizam",
    age:21,
    hobbies:["cricket","praying"],
    about(){
        return this.name;
    }
    }
    
    
    
if(obj.hasOwnProperty("name")){
    console.log("key exits!!")
}else{
    console.log("key does not exits!!")
}