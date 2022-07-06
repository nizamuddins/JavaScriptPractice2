function myFunc(variable) {

    if (variable instanceof Function) {
        console.log("the variable is of function type")
    } else {
        console.log("the variable is not function")
    }

}

const func = () => {
    console.log('nizam')
}

myFunc(func);




function myFunc(variable) {

    if (typeof variable === "function") {
        console.log("the variable is of function type")
    } else {
        console.log("the variable is not function")
    }

}

const func1 = () => {
    console.log('nizam')
}

myFunc(func1)