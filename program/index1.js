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

// child.addEventListener("click", function () {     console.log("you clicked on
// child"); }) parent.addEventListener("click", function () { console.log("you
// clicked on parent"); })
grand.addEventListener("click", function (e) {
    console.log(e.target.innerText);
})

function myFunc(element) {
    return new Promise((resolve, reject) => {
        if (element) {
            const red = Math.floor(Math.random() * 125);
            const blue = Math.floor(Math.random() * 125);
            const green = Math.floor(Math.random() * 125);
            const random = `rgb(${red},${blue},${green})`;
            const grand = document.querySelector('.' + element);
            grand.style.backgroundColor = random;
            resolve();
        } else {
            reject();
        }
    })

}

const id1 = setInterval(() => {
    myFunc("child").then(() => {})
}, 1000)
const id2 = setInterval(() => {
    myFunc("parent").then(() => {})
}, 1000)
const id3 = setInterval(() => {
    myFunc("grand").then(() => {})
}, 1000)

const grand1 = document.querySelector(".grand");
grand.addEventListener("click", (e) => {
    if (e.target.classList.contains("child")) {
        clearInterval(id1);
    }
    if (e.target.classList.contains("parent")) {
        clearInterval(id2);
    }
    if (e.target.classList.contains("grand")) {
        clearInterval(id3);
    }
})