// program to guess random number

function MyFunc() {

    const random = Math.floor(Math.random() * 10) + 1;

    let number = +prompt("Guess a number from 1 to 10");

    while (number !== random) {

        number = +prompt("Guess a number from 1 to 10");
    }

    if (number === random) {
        console.log("You guessed correct number");
    }

}

MyFunc();




