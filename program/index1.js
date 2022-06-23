// const buttons = document.querySelectorAll(".btns button");
// buttons.forEach((a)=>{ a.addEventListener("click",function(){
// this.style.backgroundColor = "yellow";     this.style.color = "grey" }) })
// buttons.forEach((a)=>{     a.addEventListener("click",function(event){
// event.currentTarget.style.backgroundColor = "yellow";
// event.currentTarget.style.color = "grey"; console.log(event)     })     })
// const grand = document.querySelector(".grand"); const parent =
// document.querySelector(".parent"); const child =
// document.querySelector(".child"); const body = document.body;
// child.addEventListener("click", function () {     console.log("you clicked on
// child"); }) parent.addEventListener("click", function () { console.log("you
// clicked on parent"); }) grand.addEventListener("click", function (e) {
// console.log(e.target.innerText); }) function myFunc(element) {     return new
// Promise((resolve, reject) => {         if (element) {             var x =
// setInterval(() => {                 const red = Math.floor(Math.random() *
// 125);                 const blue = Math.floor(Math.random() * 125);
// const green = Math.floor(Math.random() * 125);                 const random =
// `rgb(${red},${blue},${green})`;                 const grand =
// document.querySelector('.' + element);
// grand.style.backgroundColor = random;                 resolve("good");
// }, 2000)         } else {             reject();         }
// grand.addEventListener("click", (e) => {             if
// (e.target.classList.contains("child")) {                 clearInterval(x);
// }             if (e.target.classList.contains("parent")) {
// clearInterval(x);             }             if
// (e.target.classList.contains("grand")) {                 clearInterval(x);
// }         })     }) } myFunc("child").then(() =>myFunc("parent")).then(()
// =>myFunc("grand")); let num = 15 let prom = new Promise((resolve,reject)=>{
// if(num>20){     resolve("very heigh") }else{     reject("very low") } })
// prom.then((e)=>{     console.log(e) }).catch((r)=>{     console.log(r) })