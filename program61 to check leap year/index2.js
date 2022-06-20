const year = +prompt("Enter a positive year");

function myFunc(years) {
    const date = new Date(years, 1, 29)
    if (date.getDate() === 29) {
        console.log('leap year')
    } else {
        console.log('not a leap year ')
    }

}
myFunc(year)
