// // console.log('hello world'); console.log(`hello world`); console.log("hello
// world") var a = 2; var b= 6; console.log(a+b); console.log(a*b) var b= 36;
// console.log(Math.sqrt(b)); area of triangle formula= (base*height)/2 var b=
// 6; var h = 54; console.log((b*h)/2) var s1= 6; var s2 = 5; var s3 = 2; const
// S = (s1+s2+s3)/2 const area = Math.floor(Math.sqrt(S*(S-s1)*(S-s2)*(S-s3)))
// console.log(area) let a =4; let b=2; let c= b; b = a; a= c; console.log(a,b)
// let c= a+b; a= c-a; b= c-b; console.log(a,b) [a,b] = [b,a] console.log(a,b)
// let c= a^b;   a= c^a;   b = c^b; console.log(a,b) const a = 5; const b = 3;
// const c = 4; const deter = b * b - 4 * a * c; let root1; let root2; if (deter
// > 0) {     root1 = (-b + (Math.floor(Math.sqrt(deter))) / (2 *
// a)).toFixed(2);     root2 = (-b - (Math.floor(Math.sqrt(deter))) / (2 *
// a)).toFixed(2);     console.log(root1, root2) } else if (deter === 0) {
// root1,     root2 = (-b / 2 * a);     console.log(root1, root2) } else {
// let imgprt = (-b) / (2 * a)     let realprt =
// (Math.floor(Math.sqrt(-(deter))) / (2 * a)).toFixed(2)
// console.log(`${imgprt}+${realprt}i, ${imgprt}-${realprt}i`) }