// By undefined, null,false


function myFunc1(var1) {

    if (var1 === undefined) {
        console.log('it is undefined ')
    } else if (var1 === null) {
        console.log('it is null')
    } else if (var1 === false) {
        console.log('it is false')
    }else{
        console.log('neither null nor false nor undefined')
    }

}

myFunc1(variable);
myFunc1(null);
myFunc1(false);
myFunc1('nizam');

// By typeof
var variable;
function myFunc1(var1) {

    if (typeof var1 === 'undefined') {
        console.log('it is undefined ')
    } else if (var1 === null) {
        console.log('it is null')
    } else if ( var1 === false) {
        console.log('it is false')
    }else{
        console.log('neither null nor false nor undefined')
    }

}

myFunc1(variable);
myFunc1(null);
myFunc1(false);
myFunc1('nizam');




