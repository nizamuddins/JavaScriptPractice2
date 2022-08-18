// console.log('hello world'); console.log(`hello world`); console.log("hello
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
// root1,     root2 = (-b / 2 * a);     console.log(root1, root2) } else { let
// imgprt = (-b) / (2 * a)     let realprt = (Math.floor(Math.sqrt(-(deter))) /
// (2 * a)).toFixed(2) console.log(`${imgprt}+${realprt}i,
// ${imgprt}-${realprt}i`) } const kilometers = 24; const factor = 0.62137;
// const miles = kilometers*factor; console.log(miles.toFixed(2)+" miles") const
// kilometers2 = miles/factor; console.log(kilometers2 +" kilmeters") const
// celcius = 20; const fehrenhit = (celcius*1.8)+32; console.log(fehrenhit+ "
// Feh"); const celcius2 = (fehrenhit-32)/1.8; console.log(celcius2 + " Cel")
// const num = Math.floor(Math.random()*10)+1; console.log(num) const num = -8;
// if(num>0){     console.log('Number is Positive') }else if(num ===0){
// console.log('Number is Zero') }else{     console.log('Number is Negative') }
// const num = 53; if(num % 2===0){     console.log('Number is Even') }else{
// console.log('Number is Odd') } const num =4; const value =
// num%2==0?'Even':"Odd"; console.log(value) const a =34; const b =23; const c
// =234; const max = Math.max(a,b,c); console.log(max) const num = 14; let flag
// = 0; for(let i= 2;i<num;i++){ if(num%i===0){     flag = 1;     break; } }
// if(flag===0){     console.log('prime') }else{     console.log('Not Prime') }
// const num = 100; for (let i = 2; i <= num; i++) {     let flag = 0;     for
// (let j = 2; j < i; j++) {         if (i % j === 0) {             flag = 1;
// break;         }     }     if (flag === 0) {         console.log(i)     } }
// const fact =5; function myfunc(facto){ let factorial = 1; for(let i=
// 1;i<=facto;i++){ factorial *= i; } return  factorial; }
// console.log(myfunc(fact)) const num = 100; for(let i=1;i<=10;i++){ const
// table = num * i; console.log(`${num}*${i} = ${table}`) } const num = 10; let
// n1 = 0,     n2 = 1,     next; for (let i = 0; i < num; i++) {
// console.log(n1);     next = n1 + n2;     n1 = n2;     n2 = next; } const num
// = 100; if(num<0 || num ===0){ console.log('enter number greater then zero')
// }else if(num ===1){     console.log('[0]'); }else if(num === 2){
// console.log('[0,1]'); } else if(num>2){ let output = [0,1]     for(let i =
// 2;i<num;i++){         var output1 = output.push(output[output.length-2] +
// output[output.length-1]);     } console.log(output) } const num = 373; let
// temp = num; let sum = 0; while (temp !== 0) {     let rem = temp % 10; sum +=
// rem ** String(num).length;     temp = Math.floor(temp / 10); } if (num ===
// sum) {     console.log('Armstrong number ') } else {     console.log("Not
// Armstrong Number") } let a = 34; let b = 21; let operator = "*"; if(operator
// == "+"){  console.log(a+b) }else if(operator == "-"){     console.log(a-b)
// }else if(operator == "*"){     console.log(a*b) }else{     console.log(a/b) }



