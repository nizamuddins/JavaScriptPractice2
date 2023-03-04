// program to print prime numbers between the two numbers

const primeNumber = 10;

for (let i = 2; i <= primeNumber; i++) {

    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            break;
        }
    }

    if (i === j) {
        console.log(i);
    }
}