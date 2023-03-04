// program to find sum of a number

const number = +prompt("Enter the number");

function MyFunc(sums) {

    if (sums > 0) {
        return sums + MyFunc(sum - 1);
    } else {
        return sums
    }

}

const sum = MyFunc(number);
console.log(sum);