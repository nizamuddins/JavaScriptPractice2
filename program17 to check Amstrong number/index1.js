// check Armstrong number of three digits

let sum = 0;
const number = +prompt("Enter the three digit number:");

let temp = number;

while (temp > 0) {

    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    temp = Math.floor(temp / 10);

}

if (sum === number) {
    console.log(`${number} is Amstrong number`);

} else {
    console.log("Not a Amstrong number");
}
