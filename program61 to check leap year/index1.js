function myFunc(year) {

    if ((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0)) {
        return year + ' is leap year'
    } else {
        return 'not a leap year'
    }

}

const years = +prompt("Enter a positive year");
const leapCheck = myFunc(years)
console.log(leapCheck)
