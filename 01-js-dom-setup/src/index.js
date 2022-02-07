// Ex 1

let whatHappened = document.querySelector("#happening");

const btn = document.getElementById("notify")
btn.addEventListener('click', (e) => eventHandler(e, "clicked"))

// Ex 2

// const btn = document.getElementById("notify")
btn.addEventListener('mouseover', (e) => eventHandler(e, "moused"))

function eventHandler(event, type){
    // console.log('event: ', event);
    console.log(`the use just ${type}`);
    whatHappened.innerText = type
    type == "clicked" ? whatHappened.style.color = "blue" : whatHappened.style.color = "green"
}

console.log(whatHappened)


// Ex 3
// script tag to high on html w/o defer

// Ex 4

// index.js
// document.addEventListener("DOMContentLoaded", function(){
//     const btn = document.getElementById("notify")
//     btn.addEventListener('mouseover', function(){
//       console.log("Printing a Message!")
//     })
//   });

// Ex 5

// index.js
// document.addEventListener("DOMContentLoaded", function(){
//     const btn = document.getElementById("notifiable")
//     btn.addEventListener('click', function(){
//       console.log("Printing a Message!")
//     })
//   });