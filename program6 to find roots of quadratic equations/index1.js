// finding roots of quadratic equation

const a = 3;
const b = 6;
const c = 2;

let descriminant = b * b - 4 * a * c;
console.log(descriminant)
if (descriminant > 0) {
    let root1 = ((-b + Math.sqrt(descriminant)) / (2 * a)).toFixed(2);
    let root2 = ((-b - Math.sqrt(descriminant)) / (2 * a)).toFixed(2);
    console.log(`Roots of quadratic equation ff is ${root1}, ${root2}`)
} else if (descriminant === 0) {

    let root1 = -b / (2 * a);
    let root2 = -b / (2 * a);
    console.log(`Roots of quadratic equation is ${root1}, ${root2}`)

} else {

    const real_prt = -b / (2 * a);
    const imag_prt = (Math.floor(Math.sqrt(-(descriminant))) / (2 * a)).toFixed(2);

    console.log(
        `Roots of quadratic equation is ${real_prt}+${imag_prt}i, ${real_prt}-${imag_prt}i`
    )

}