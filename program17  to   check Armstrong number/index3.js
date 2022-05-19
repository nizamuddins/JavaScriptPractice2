// program to check Armstrong number

const armStrong = prompt("Enter a three digit number")

for (let i = 0; i < armStrong; i++) {
    let sum = 0;

    let temp = i;
let numofDigits = String(i).length;
    while (temp > 0) {

        let remainder = temp % 10;

        sum += remainder ** numofDigits;

        temp = Math.floor(temp / 10);

    }

    if (sum == i) {

        console.log(i);
    }

}
