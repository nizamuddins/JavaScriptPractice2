// check Armstrong number of n digits

let sum = 0;
const number = prompt("Enter the three digit number:");
let numofDigits = number.length;

let temp = number;
while (temp > 0) {

    let remainder = temp % 10;

    sum += remainder ** numofDigits;

    temp = Math.floor(temp / 10);

}

if (sum == number) {
    console.log(`${number} is Amstrong number`);

} else {
    console.log("Not a Amstrong number");
}
