// check Armstrong number of n digits

const number = +prompt("Enter the three digit number:");

for (let i = 1; i < number; i++) {
    let sum = 0;


    let temp = i;
let numofDigits = String(i).length;

    while (temp > 0) {

        let remainder = temp % 10;

        sum += remainder ** numofDigits;
       
         temp = Math.floor(temp/10);

    }
    if (sum == i) {
        console.log(i);

    }

}


