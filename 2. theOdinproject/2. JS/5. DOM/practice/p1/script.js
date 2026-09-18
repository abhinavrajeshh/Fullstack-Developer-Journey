// const button1 = document.querySelector("#btn1");
// const para = document.querySelector(".text");
// -------------------
// button1.addEventListener("click", function(){
//     para.textContent = "Button clicked";
//     console.log("button was clicked");
// })
// ---------------------
// const button2 = document.querySelector("#btn2");

// button1.addEventListener("click", function(){
//     para.textContent = "ROCK";
//     console.log("Button 1 clicked");
// })

// button2.addEventListener("click", function(){
//     para.textContent = "PAPER";
//     console.log("Button 2 clicked");
// })
// ---------------------------
const button = document.querySelector("#btn");
button.addEventListener("click", function(){
    const heading = document.createElement("h1");
    heading.textContent = "This is heading";
    document.body.appendChild(heading);
})
const btn = document.querySelector("#parabtn");
btn.addEventListener("click", function(){
    const para = document.createElement("p");
    para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa quo illo laborum facilis, harum vitae iure recusandae maiores.";
    document.body.appendChild(para);
})