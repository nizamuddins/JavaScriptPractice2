// finding roots of quadratic equation

const a = +prompt("Enter the first number");
const b = +prompt("Enter the second number")
const c = +prompt("Enter the third number");

const descriminant = b * b - 4 * a * c;
console.log(descriminant)
if (descriminant > 0) {
    let root1 = (-b + Math.sqrt(descriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(descriminant)) / (2 * a);
    console.log(`Roots of quadratic equation is ${root1}, ${root2}`)
} else if (descriminant === 0) {

    let root1 = -b / (2 * a);
    let root2 = -b / (2 * a);
    console.log(`Roots of quadratic equation is ${root1}, ${root2}`)

} else {

    const real_prt = (-b / (2 * a)).toFixed(2);
    const imag_prt = (Math.sqrt(-(descriminant)) / (2 * a)).toFixed(2);

    console.log(
        `Roots of quadratic equation is ${real_prt}+${imag_prt}i, ${real_prt}-${imag_prt}i`
    )

}