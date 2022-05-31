// const buttons = document.querySelectorAll(".btns button");
// buttons.forEach((a)=>{ a.addEventListener("click",function(){
// this.style.backgroundColor = "yellow";     this.style.color = "grey" }) })
// buttons.forEach((a)=>{     a.addEventListener("click",function(event){
// event.currentTarget.style.backgroundColor = "yellow";
// event.currentTarget.style.color = "grey"; console.log(event)     })     })

const grand = document.querySelector(".grand");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

const body = document.body;

// child.addEventListener("click", function () {
//     console.log("you clicked on child");
// })
// parent.addEventListener("click", function () {
//     console.log("you clicked on parent");
// })
grand.addEventListener("click", function (e) {
    console.log(e.target.innerText);
})

// body.addEventListener("click", function () {
//     console.log("you clicked on body");
// })

