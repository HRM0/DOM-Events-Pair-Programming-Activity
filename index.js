const counter = document.querySelector(".count-cookie");

let counterValue = 0

counter.addEventListener("click", function() {
    
    let counterHTML = document.querySelector(".counter");
    counterHTML.innerHTML = counterValue += 1;
})


//problem 2
const bigger = document.querySelector(".bigger");
const smaller = document.querySelector(".smaller");
let ptxt = document.querySelector(".ptext");
let textsize = 18

bigger.addEventListener("click", function() {

    if (textsize === 100) {
        console.log("can't be bigger than 100")
    } else {
        textsize += 1;
    }

    ptxt.style.fontSize= `${textsize}px`;
})

smaller.addEventListener("click", function() {

    if (textsize === 1) {
        console.log("can't be smaller than 1")
    } else {
        textsize -= 1;
    }

    ptxt.style.fontSize= `${textsize}px`;
})

//problem 3
const bgcolor = document.querySelector(".changeColor");
let color = document.querySelector(".input");

bgcolor.addEventListener("click", function() {
    document.body.style.backgroundColor= color.value;
})

//problem 4
const up_bot = document.querySelector(".up");
const down_bot = document.querySelector(".down");
const left_bot = document.querySelector(".left");
const right_bot = document.querySelector(".right");
let crane_pic = document.querySelector(".crane");
let up_move = 0;
let down_move = 0;
let left_move = 0;
let right_move = 0;

up_bot.addEventListener("click", function() {
    up_move -= 1
    crane_pic.style.top = `${up_move}px`;
})

down_bot.addEventListener("click", function() {
    down_move += 1
    crane_pic.style.top = `${down_move}px`;
})

left_bot.addEventListener("click", function() {
    left_move -= 1
    crane_pic.style.left = `${left_move}px`;
})

right_bot.addEventListener("click", function() {
    right_move += 1
    crane_pic.style.left = `${right_move}px`;
})

//problem 5
const roll_bot = document.querySelector(".roll");
let roll_res = document.querySelector(".roll_result");
let dice_side = document.querySelector(".dice_input");

roll_bot.addEventListener("click", function() {
    roll_res.textContent= Math.ceil(dice_side.value * Math.random());
})