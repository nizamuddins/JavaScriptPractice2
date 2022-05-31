function myFunc(num) {
    let bin = 0;
    let i = 1;
    while (num !== 0) {
        let rem = num % 2;
        num = Math.floor(num / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    return bin
}
const DecNumber = +prompt("Enter the number");
console.log(myFunc(DecNumber));

