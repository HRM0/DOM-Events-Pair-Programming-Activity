const counter = document.querySelector(".count-cookie");

let counterValue = 0

counter.addEventListener("click", function() {
    
    let counterHTML = document.querySelector(".counter");
    counterHTML.innerHTML = counterValue += 1;
})

const bigger = document.querySelector(".bigger");

let textsize = 18

bigger.addEventListener("click", function() {
    if (textsize === 100) {
        console.log("can't be bigger than 100")
    } else {
        textsize += 1;
    }
    let ptxt = document.querySelector(".ptext");
    ptxt.style.fontSize= `${textsize}px`;
})

const smaller = document.querySelector(".smaller");

smaller.addEventListener("click", function() {

    if (textsize === 1) {
        console.log("can't be smaller than 1")
    } else {
        textsize -= 1;
    }

    let ptxt = document.querySelector(".ptext");
    ptxt.style.fontSize= `${textsize}px`;
})

const bgcolor = document.querySelector(".changeColor");

bgcolor.addEventListener("click", function() {

    let color = document.querySelector(".input");
    document.body.style.backgroundColor= color.value;
})

