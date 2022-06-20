const D1 = new Date();
const D2 = new Date();

const d1 = D1>D2 ;
console.log(d1)

const d2 = D1<D2 ;
console.log(d2)

const d3 = D1<=D2 ;
console.log(d3)

const d4 = D1!=D2 ;
console.log(d4)

const time = D1.toLocaleTimeString()===D2.toLocaleTimeString();
console.log(time)

