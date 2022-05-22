// program to find factors of a number

const number = +prompt("Enter the number");

console.log(`Factors of ${number} is:`)

for (let i = 0; i <= number; i++) {

    if (number % i === 0) {

        console.log(i)

    }

}
