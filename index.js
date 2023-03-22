const counter = document.querySelector(".counterButton");
let counterValue = 0
counter.addEventListener("click", function() {
    let counterHTML = document.querySelector(".counterDiv > .center");
    counterHTML.innerHTML = counterValue += 1;
    console.log(counterHTML.innerText)
    //counterValue++
})