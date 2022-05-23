
const number = +prompt("enter the number");


function MyFunc(num) {

    if (num > 1) {
        return num * MyFunc(num - 1);
    }else{ 
        return num;
    }

};


const factorial = MyFunc(number);
console.log(factorial);



