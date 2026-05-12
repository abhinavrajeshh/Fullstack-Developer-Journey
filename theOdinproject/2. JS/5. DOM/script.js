// let title = document.querySelector("#title");
// title.textContent = "Hello Abhinav";

// let title = document.querySelector('#title');
// title.textContent = "changed sub";

// let newLe = document.querySelector("#h3");
// newLe.textContent = "this is changed now";

// const heading = document.querySelector("h1");
// console.log(heading);

// console.log(document);

// ------------
// const heading = document.querySelector("#title");
// const para = document.querySelector(".text");
// const btn = document.querySelector("button");

// heading.textContent = "hehe";
// para.textContent = "New text";
// -----------------------
const para = document.querySelector(".text");

const button1 = document.querySelector("#btn1");

button1.addEventListener("click", function(){
    console.log("Button:1 - Clicked");
    para.textContent = "Button 1 clicked";
    para.style.color = "red";
})

const button2 = document.querySelector("#btn2");
button2.addEventListener("click", function(){
    console.log("Button:2 clicked");
    para.textContent = "Button 2 clicked";
    para.style.backgroundColor = "yellow";
})