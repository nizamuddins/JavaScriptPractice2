function myFunc() {

    if (arguments.length === 0) {

        console.log('u have not  passed any argument')
    } else if (arguments.length === 1) {
        console.log('Pass atleast two argument')
    } else {

        let result = 0;
        for (let i = 0; i < arguments.length; i++) {

            result += arguments[i]

        }
        console.log(result)
    }

}
myFunc(34, 100)
myFunc(2)

// By switch()

function myfunc() {

    switch (arguments.length) {
        case 0:
            console.log('u have not  passed any argument');
            break;
        case 1:
            console.log('Pass atleast two argument');
            break;
default:

let result = 0;
for (let i = 0; i < arguments.length; i++) {

    result += arguments[i]

}
console.log(result)
    }

}
myfunc(23, 16)