// program to find factors of a number

const number = +prompt("Enter the number");

function MyFunc(sum) {

    if (sum > 0) {
        return sum + MyFunc(sum - 1);
    } else {

        return sum
    }

}

const sum = MyFunc(number);
console.log(sum);