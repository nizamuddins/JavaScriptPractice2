// program to check if a number is prime or not

const number = parseInt(prompt("Enter a positive number: "));
let isPrime = 0;


    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = 1;
            break;
        }
    }

    if (number === 1) {
      console.log("1 is neither prime nor composite number.");
  } else if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
