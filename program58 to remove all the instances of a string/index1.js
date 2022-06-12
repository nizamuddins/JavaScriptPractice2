// By RegExp

const string = 'jAvascript learning';

const RegExp = /a/gi;

const replace = string.replace(RegExp,'A');

console.log(replace)

// By built in method



const string1 = ' learning javascript programs';

const split = string1.split('a')
const join = split.join('A')

console.log(join)