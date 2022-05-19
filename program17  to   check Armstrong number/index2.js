// program to check Armstrong number

const armStrong = prompt("Enter a three digit number")
let sum =0;

let temp = armStrong;

while(temp>0){

 let remainder = temp%10;

 sum += remainder**armStrong.length;
 
 temp = Math.floor(temp/10);


}

if(sum == armStrong){

    console.log(`${armStrong} is Armstrong number`);
}
else{
    console.log("Not a Armstrong number")
}

