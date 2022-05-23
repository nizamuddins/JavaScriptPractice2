// program to print fibonacci sequence by recurrsipn

function fibonacci(num) {

    if (num < 2) {
        return num;
    } else {

        return fibonacci(num - 1) + fibonacci(num - 2)

    }

}

const number = +prompt("Enter a positive integer");

if (number <= 0) {

    console.log("Enter a positive integeer ");
} else {

    for (let i = 0; i < number; i++) {

        console.log(fibonacci(i));

    }

}