// By built in method const string1 = `i am from liet. himayathnagar.
// telangana`; const split = string1.split('\n') const join = split.join('<br>')
// console.log(join) console.log("hello world"); console.log('hello world')
// console.log(`hello world`); var firstName = "nizam"; var first_Name =
// "nayeem"; var $firstName = "nziam"; let first$Name = "nayeem"; const _Name  =
// "nizam"; const Name_ = "nayeem"; let Name_123 = "nayeem"; Name_123 = "
// ashraf"; console.log(Name_123); const string = "nizam";
// console.log(string[0]); const slice = string.slice(0,1); const slice1 =
// string.slice(1); let upper = slice.toUpperCase() console.log(upper + slice1)
// console.log(upper.toLowerCase() +slice1) const nizam  = " hello world ";
// console.log(nizam) console.log(nizam.trim()); console.log(string.slice(2,3));
// const string = "nixsm"; const num = Number(string); console.log(typeof num);
// const num2 = +string; console.log(typeof num2) const num = 12; const number =
// num + ""; console.log(typeof number) const num1 = 2; const num2 = '2';
// console.log(num1 === num2); console.log(num1 >= num2); console.log(num1 <=
// num2); console.log(num1 !== num2); let  name = 0; if(name){
// console.log("nizam") }else{     console.log("nayeem") } const name = "nizam"
// console.log("my name is "+name); console.log(`my name is ${name}` ) const
// name = "nizam"; if (name === "nizam") {     console.log("yes") } else {
// console.log('no'); } const age = 21; let name = age>20?'nizam':'nayeem';
// console.log(name); const num1 = 3; let num2 = '4'; if (typeof(num1) ===
// 'number' || typeof(num2) === 'number') {     console.log("It is number type")
// } else {     console.log("Not a number typpe") } const num = 3; if (num ===
// 1) {     console.log("sunday") } else {     if (num === 2) {
// console.log('monday');     } else if (num === 3) { console.log('tuesday') }
// else if (num === 4) { console.log('wednesday')     } else if (num === 5) {
// console.log('thursday');     } else if (num === 6) { console.log('friday') }
// else {         console.log('saturday')     } } let Name = "nizam"; var length
// = Name.length; switch (true) {     case length > 5: console.log("wrong");
// break;     case length <= 5: console.log("correct")         break; default:
// console.log("invalid") } const num = 30240; let total = 0; for (let i = 0; i
// < num; i++) {     if (num % i === 0) {         total++;     } }
// console.log(total) const num = 45; for (let i = 0;i < num; i++) {
// console.log(i) } console.log(i) const num ="nizam"; let i=0;
// while(i<num.length){     console.log(num[i]);     i++; } const num = "nizam";
// let i = 0; do {     console.log(num[i]);     i++; } while (i > num.length)
// const num = 4; for (let i = 0; i <= num; i++) {     if (i === 3) { continue;
// }     console.log(i) } let i = 0; do {     console.log(num[i]);     i++; }
// while (i > num.length) const num = 4; for (let i = 0; i <= num; i++) {     if
// (i === 3) {         break;     }     console.log(i) } Arrays const array1 =
// ["nizam", 21, true]; console.log(Array.isArray(array1)) console.log(array1)
// array1[2] = false; console.log(array1) console.log(array1.length);
// array1.push({name: "nizam"}) console.log(array1); array1.pop();
// console.log(array1) array1.unshift({name: "nizam"}) console.log(array1)
// array1.shift(); console.log(array1) const array1 = ["nizam","nayeem"]; const
// array2 = array1; console.log(array1,array2) array1.push("noman")
// console.log(array1,array2); const array1 = ["nizam","nayeem"]; const array2 =
// array1.slice(0); console.log(array2) array1.push("zjvbd");
// console.log(array2) console.log(array1) const array1 = ["nizam", "nayeem"];
// const array2 = array1.concat(["nomaan"]); console.log(array2) const array1 =
// ["nizam", "nayeem"]; const array3 = ["nizam","work"] const array2 =
// [...array1, ...array3]; console.log(array2); const array1 = ["nizam",
// "nayeem"]; for(let i=0;i<array1.length;i++){     console.log(array1[i]) }
// for(let arr in array1){     console.log(array1[arr]) } for(let arr of
// array1){     console.log(arr) } const array1 = ["nizam", "nayeem"]; let
// [var1,...var2] = array1; console.log(var1,var2) const array1 = ["nizam",
// "nayeem"]; let num = array1[1] console.log(num) Objects const obj1 = {
// name:"nizam",     age:21 } console.log(obj1); console.log(obj1.name);
// obj1.name = "nayeem"; console.log(obj1.name); obj1.gender = "male";
// console.log(obj1.gender); obj1["class"] = "cse3b"; console.log(obj1) let n =
// 5; for (let i = 1; i <= n; i++) {     for (let j = 1; j <= n - i; j++) {
// console.log(' ')     }     for (let k = 0; k < 2 * i - 1; k++) {
// console.log('*')     }     console.log(); } const nam = "name"; const key =
// "nizam"; const obj = {     age: 21 } obj[nam] = key; console.log(obj); const
// obj ={   name:"nizam",   age:21, } for(let obj1 in obj){   console.log(obj1)
// } const keys = Object.keys(obj); console.log(keys) for(let val of keys){
// console.log(val) } const obj = {     name: "nizam",     age: 21 } let {name:
// var1, ...var2} = obj; console.log(var1); const obj = {     name: "nizam",
// age: 21 } const obj2 = {     name: "nayeem",     gender:"male" } const obj3 =
// {...obj,...obj2}; console.log(obj3); const ob = {..."123"}; console.log(ob)
// const key = "name"; const num = "age"; const grn = "gender"; const name =
// "nizam"; const age = 21; const gender = "male"; const obj = {     [key]:
// name,     [num]: age,     [grn]: gender } console.log(obj) const array = [
// {name:"nizam",age:21}, {name:"nayeem",age:17}, {name:"nomaan",age:25},
// {name:"mohd",age:23}, ] let [var1,var2,...var3] = array;
// console.log(var1,var2,var3) let [{name:var6},{name:var5},{...var7},{...var4}]
// = array; console.log(var6,var5,var7,var4) functions function myFunc(){
// console.log("nizam") } myFunc() let myFunc = function (){
// console.log("nizam") } myFunc() let myFunc = ()=>{     console.log("nizam") }
// myFunc() function myFunc() {     console.log("nziam")     let func = () => {
// console.log("liet")     }     let func2 = () => {        return
// ("himaytsagar")     }     func();     console.log(func2()); } myFunc();
// myFunc(); function myFunc(){     console.log("nizam") } function myFunc(a, b
// = 0) {     return a + b } console.log(myFunc(2,6)) function myFunc(a,b,...c)
// { let con = 0; for(let arr of c){     con += arr; }     return a+b+con; }
// console.log(myFunc(2,6,3,5,6,7)) const array = ["nizam", "nayeem", "yakhoob"]
// function myFunc([var1, var2, var3]) {     console.log(var1);
// console.log(var2)     console.log(var3) } myFunc(array) const obj ={
// name:"nizam",     age:21 } function myFunc({name:var1,age:var2,...var3}) {
// console.log(var1);     console.log(var2)     console.log(var3) } myFunc(obj)
// function myFunc2(){     return ("nizam") } function myFunc(func) {
// console.log(func()); } myFunc(myFunc2) function myFunc2() {     return
// ("nizam") } function myFunc(func) {     return func(); }
// console.log(myFunc(myFunc2)) const array = [1,3,5,6] function myFunc(arr){
// console.log(arr + 1) } array.forEach(function(arr){     console.log(arr + 1)
// }) const array = [1,3,5,6] function myFunc(arr){     return (arr + 1) } const
// array2 = array.map(myFunc) console.log(array2) const array = [1,3,5,6]
// function myFunc(arr){ return arr>4 } const array2 = array.filter(myFunc)
// console.log(array2) const array = [1,3,5,6] function
// myFunc(accomodate,current){ return  accomodate*current } const array2 =
// array.reduce(myFunc,1) console.log(array2) const array = [1,3,5,6] function
// myFunc(arr){ return  arr%2===0 } const array2 = array.find(myFunc)
// console.log(array2) const array = [1,3,5,6] function myFunc(arr){ return
// arr>0 } const array2 = array.every(myFunc) console.log(array2) const array =
// [1,3,5,6] function myFunc(arr){ return  arr>6 } const array2 =
// array.some(myFunc) console.log(array2) const array = new Array(10).fill(3);
// console.log(array) const array1 = [1,3,5,6]; array.fill(1,0,2);
// array.fill(2,2,4); array.fill(3,4,6); array.fill(4,6,8); array.fill(5,8);
// console.log(array) const array = [1,3,4,5];  const dele = array.splice(1,3);
// array.splice(1,3,2,3,4,5,6,7) console.log(array) const string = 'nizam i am'
// let string2 =" "; for (let i = string.length - 1; i >= 0; i--) {     string2
// += string[i] } console.log(string2) const arr = [1,3,9,8,7]; const arr1 =
// arr.slice(0).sort((a,b)=>{ return a-b; }); console.log(arr) console.log(arr1)
// const array = [10,23,45,] const set1 = new Set(array); set1.add([1,2,3,4])
// console.log(set1.has(23)) console.log(set1) for (let set2 of set1) {
// console.log(set2) } const array = [1,2,3,4,5]; const obj = { name:"nizam",
// age:21 } const map = new Map([["name","nizam"],[array,obj]]) const key =
// map.keys(); for(let ke of key){     console.log(map.get(ke)) }
// console.log(map.get(array).name) for(let [var1,var2] of map){
// console.log(var1 +':'+ var2) } map.forEach((a)=>{ console.log(a) })
// map.set(1,obj) console.log(map) function methods const obj = {     name:
// "nizam",     age: 21,     about: function () {         console.log(this.name)
// } } obj.about(); function myFunc() { console.log(this.name) } const obj = {
// name: "nizam",     age: 21, about:myFunc, } const obj1 = {     name: "mazin",
// age: 23, about:myFunc, } const obj2 = {     name: "zohaib",     age: 28,
// about:myFunc, } obj2.about(); function myFunc(a, b) { console.log(this.name,
// a + b) } const obj = {     name: "nizam",     age: 21 } const obj1 = { name:
// "mazin",     age: 23 } const obj2 = {     name: "zohaib",     age: 28 }
// myFunc.call(obj, 3, 3); myFunc.apply(obj2, [1, 2]) const func =
// myFunc.bind(obj1, 4, 6) func(); function myFunc() { console.log(this.name) }
// const obj = {     name: "nizam",     age: 21 } myFunc.call(obj) const obj1 =
// {     about() {         console.log(this.name)     } } function
// myFunc(name,age) {     const obj = Object.create(obj1);     obj.name = name;
// obj.age = age; return obj } const user1 = myFunc("nizam",21); user1.about();
// function myFunc(name,age) {     const obj = Object.create(myFunc.prototype);
// obj.name = name;     obj.age = age; return obj } myFunc.prototype.about =
// function(){     console.log(this.name) } const user1 = myFunc("nizam",21);
// user1.about(); function myFunc(name,age){ this.name = name; this.age = age; }
// myFunc.prototype.about = function(){     console.log(this.name) } const func
// =new myFunc("nizam",21) func.about() class Create {     constructor(name,
// age) {         this.name = name;         this.age = age;     }     get
// about() {         console.log(this.name)     } } const class1 = new
// Create("nizam", 21); class1.about class dog extends Create {
// constructor(name, age, speed) {         super(name, age);         this.speed
// = speed     }     get dog(){         console.log(this.age)     } } const
// class2 = new dog("july", 3,'20kph'); console.log(class2) class2.about
// console.log(class2.speed) class2.dog **********DOM*********** const head1 =
// document.getElementsByTagName("h1"); const head2 =
// document.getElementsByClassName("head") head1[0].style.backgroundColor =
// "red"; head2[0].style.fontSize = "4rem"  console.log(head2) const id =
// document.getElementById("body");  console.log(id) id.style.backgroundColor =
// "black"; const buttons = document.querySelector("button"); buttons
// .classList     .add("btns")  console.log(buttons) const button2 =
// document.querySelectorAll("button") button2[0].style.backgroundColor =
// "green" button2[1].style.backgroundColor = "red";
// button2[2].style.backgroundColor = "yellow"; const array =
// Array.from(button2) for (let i = 0; i < array.length; i++) {
// array[i].style.padding = ".5rem 2rem";     array[i].style.fontSize = "1.2rem"
// array[i].style.fontWeight = "600" } const head3 =
// document.querySelector("h1") head3.textContent = "hello nizam!"
// head3.innerHTML = 'hello nizam' const btn =
// document.querySelector("button.green"); console.log(btn) const ul =
// document.querySelector("ul");  ul.innerHTML += '<li><button
// class=\"btn\">button4</button></li>'
// document.querySelectorAll("button")[3].classList.add("btns") const ul =
// document.querySelector("ul"); const li = document.createElement("li") const
// btn2 = document.createElement("button") const text =
// document.createTextNode("button4"); btn2.append(text); li.append(btn2)
// li.classList.add("list") btn2.classList.add("btns")  ul.prepend(li)  let li3
// = li.cloneNode(true);  ul.append(li3)  const lis =
// document.querySelectorAll("li");  lis[0].remove(); ul.after(li) let li3 =
// li.cloneNode(true); ul.before(li3) const ul = document.querySelector("ul");
// ul.insertAdjacentHTML("beforeend","<li class = \"list\"><button
// class=\"btns\">button4</button></li>")
// ul.insertAdjacentHTML("afterbegin","<li class = \"list\"><button
// class=\"btns\">button4</button></li>")
// ul.insertAdjacentHTML("beforebegin","<li class = \"list\"><button
// class=\"btns\">button4</button></li>") ul.insertAdjacentHTML("afterend","<li
// class = \"list\"><button class=\"btns\">button4</button></li>")
// document.querySelectorAll("li")[3].remove(); const ul =
// document.querySelector("ul"); const li = document.querySelectorAll("li")[2];
// const li3 = document.querySelectorAll("li")[1]; const li1 =
// document.createElement("li") const btn2 = document.createElement("button")
// const text = document.createTextNode("button4"); btn2.append(text);
// li1.append(btn2) li1.classList.add("list") btn2.classList.add("btns")
// ul.replaceChild(li1,li) ul.removeChild(li3) ************ */ Event
// listerners****** body.addEventListener("keypress", function (e) {     const
// keys = e.key color(keys); }) function color(keys2) { console.log(keys2) if
// (keys2 === "g" || keys2 === "r" || keys2 === "y") {
// body.style.backgroundColor = "black";     } } btn2.forEach((a) => {
// a.addEventListener("mouseover", function () {         let color =
// this.classList[2] body.style.backgroundColor = color; e.target.textContent =
// color }) }) const form = document.querySelector("form"); const ul =
// document.querySelector('ul') form.addEventListener("submit", (e) => {
// e.preventDefault();     const text = document.querySelector(".text");     if
// (text.value !== " ") {         const li = document.createElement("li") const
// btn = document.createElement("button");         btn.textContent = text .value
// btn             .classList             .add('btns', 'btn1')         li
// .classList             .add('list') li.append(btn)         ul.append(li)
// remove()     }     text.value = ' '; }) function remove() {     let red =
// Math.floor(Math.random() * 225); let blue = Math.floor(Math.random() * 225);
// let green = Math.floor(Math.random() * 225);     const color =
// `rgb(${red},${blue},${green})`     const button3 =
// document.querySelectorAll(".btn1");     button3.forEach((a) => {         a
// .classList             .add(color)         a.style.backgroundColor = color
// a.addEventListener("click", (e) => {             body.style.backgroundColor =
// color;             if (e.currentTarget.classList.contains(color)) { e
// .currentTarget                     .parentNode .previousElementSibling
// .childNodes[1] .style                     .textDecoration = "line-through"
// } })     }) }