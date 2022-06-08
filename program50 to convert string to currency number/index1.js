// By concatenation
// const number = 250000.00

// const currency = '$' + number.toFixed(2);

// console.log(currency)

// program to format numbers as currency string

const result =  (2500).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
});

console.log(result);

