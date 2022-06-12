// By concatenation
// const number = 2,50000.00

// const currency = '$' + number.toFixed(2);

// console.log(currency)

// By toLocaleString() method

const result =  (2500).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
});

console.log(result);

