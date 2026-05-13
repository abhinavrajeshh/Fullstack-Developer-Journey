const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const para = document.querySelector(".text");

button1.addEventListener("click", ()=>{
    para.style.color = "red";
    console.log("RED clicked");
})
button2.addEventListener("click", ()=>{
    para.style.color = "blue";
    console.log("BLUE clicked");
})