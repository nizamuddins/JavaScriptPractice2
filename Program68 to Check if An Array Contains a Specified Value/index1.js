const array = [1, 3, 4, 5, 6]

if (array.includes(1)) {
    console.log('includes')
} else {
    console.log('not found')
}

// by built in method

const index = array.lastIndexOf(7);

if (index != -1) {
    console.log(index)
} else {
    console.log('not found')
}

