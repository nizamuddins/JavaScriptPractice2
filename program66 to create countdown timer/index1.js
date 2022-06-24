let countDownDate = new Date().getTime() + 24 * 60 * 60 *1000


let id = setInterval(function () {

    let now = new Date().getTime();

    let timeLeft = countDownDate - now;

    let date = Math.floor(timeLeft / (24 * 60 * 60 * 1000))
    let hours = Math.floor((timeLeft / (60 * 60 * 1000)) % 24)
    let minutes = Math.floor((timeLeft / 1000 / 60) % 60)
    let seconds = Math.floor((timeLeft / 1000) % 60)

    console.log(`${date}d ${hours}h ${minutes}min ${seconds}s`)

    if (timeLeft < 0) {
        clearInterval(id)
        console.log("countdown finished")

    }

}, 2000);
