// program to print the Fibonacci Sequence

const numFib = +prompt("Enter a value")

if(numFib === 1){
console.log([0])

}else if(numFib===2){
    console.log([0,1])
}else{
 let output = [0,1];
 for(let i=2;i < numFib;i++){
     output.push(output[output.length-2] + output[output.length-1]);
 }

console.log(output);
}

