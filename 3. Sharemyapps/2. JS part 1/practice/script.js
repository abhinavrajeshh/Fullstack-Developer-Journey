// const heading = document.querySelector("h1");
// heading.textContent = "Hello";

// function a(){
//     let aa = 10;
// }

// //  typeof a;
// let age = true;
// console.log(typeof age);
// --------------
// const fruits = ["apple", "orange"];
// fruits.push("mango");
// console.log(fruits);
// fruits[0]= "banana";
// console.log("after updation : ", fruits);
// fruits = ["strawberry", "orange"];
// console.log(fruits);
// --------------------
// let a = "10px";
// console.log(Number(a));
// ------------
// let b = "Abhinav";
// let spl = b.split("");
// console.log(spl);
// ---------------
// Math.round(4.6) // 5
// Math.floor(4.9) // 4
// Math.ceil(4.1)  // 5
// Math.abs(-10)   // 10
// Math.max(10, 20) // 20
// Math.min(10, 20) // 10
// ------------------
// const person = {
//     name : "Abhinav",
//     age : 21, 
//     isStudent : true
// }
// console.log(person.name + " is " + person.age + "yrs old")
// -----------
// const person = {
//     "first name" : "Abhinav",
//     "Last name" :  "Rajesh"
// }
// console.log(person["first name"]);
// console.log(a);

// -------------
// var a = "hello"
// console.log(typeof a);
// console.log(a.split(""))
// -------
// let a = 10;
// let b = 20;
// let big = a>b?a:b;
// console.log(big );
// -----------  
// function add(a,b){
// return a+b;
// }
// let result = add(10,20);
// console.log(result);
// -----------
// const add = (a,b)=>{
//     return a+b;
// }
// console.log(add(10,20));
// -------------
// const add = (a,b) => a+b;
// console.log(add(25,25));
//--------
// (function (){
//     console.log("hello");
// })();
// -----------

// function hello(){
//     var message = "hello";
//     console.log(message);
    
// }
// hello();
// console.log(message);


 // ==========================================
 // 1. HOISTING
 // ==========================================

 // Function declarations can be called before their written position.
 sayHello();

 function sayHello() {
     console.log("Hello!");
 }

 // var is initialized with undefined before normal execution.
 console.log(score); // undefined
 var score = 10;
 console.log(score); // 10

 // let and const are hoisted but cannot be accessed before initialization.
 // console.log(age); // ReferenceError
 let age = 21;


 // ==========================================
 // 2. TEMPORAL DEAD ZONE (TDZ)
 // ==========================================

 // TDZ: period before a let/const declaration is reached and initialized.
 // Accessing the variable during this period causes ReferenceError.

 // console.log(city); // ReferenceError
 let city = "Kollam";
 console.log(city); // Kollam


 // ==========================================
 // 3. VARIABLE SHADOWING
 // ==========================================

 // An inner variable with the same name shadows the outer variable.
 let name = "Abhinav";

 function showName() {
     let name = "Rahul";
     console.log(name); // Rahul
 }

 showName();
 console.log(name); // Abhinav

 // Nested block: let can shadow an outer var.
 var x = 10;

 {
     let x = 20;
     console.log(x); // 20
 }

 console.log(x); // 10

 // Redeclaring let with var in the same scope causes SyntaxError.
 // let total = 10;
 // var total = 20;


 // ==========================================
 // 4. globalThis
 // ==========================================

 // globalThis provides access to the global object.
 console.log(globalThis);

 // Browser: globalThis === window
 // Node.js: globalThis === global

 // Top-level let/const do not automatically become globalThis properties.
 let userAge = 21;
 console.log(globalThis.userAge); // Usually undefined


 // ==========================================
 // 5. SWITCH FALL-THROUGH
 // ==========================================

 // Fall-through occurs when a matching case continues into later cases
 // because there is no break.

 let number = 1;

 switch (number) {
     case 1:
         console.log("One");
     case 2:
         console.log("Two");
         break;
     default:
         console.log("Other");
 }

 // Output:
 // One
 // Two


 // ==========================================
 // 6. break STATEMENT
 // ==========================================

 // break exits the nearest enclosing loop or switch.

 for (let i = 1; i <= 5; i++) {
     if (i === 3) {
         break;
     }
     console.log(i); // 1, 2
 }

 // continue skips the current iteration instead of exiting the loop.


 // ==========================================
 // 7. FUNCTION DECLARATION
 // ==========================================

 // A reusable block of code declared with the function keyword.
 greet();

 function greet() {
     console.log("Hello!");
 }

 // Parameters receive values; arguments are passed when calling.
 function add(a, b) {
     return a + b;
 }

 console.log(add(5, 3)); // 8

 // Without an explicit return, a function returns undefined.
 function multiply(a, b) {
     console.log(a * b);
 }

 console.log(multiply(3, 4)); // Prints 12, then undefined


 // ==========================================
 // 8. FUNCTION EXPRESSION
 // ==========================================

 // A function created and assigned to a variable.
 const welcome = function () {
     console.log("Welcome!");
 };

 welcome();

 // Cannot call a const function expression before initialization.
 // sayHi(); // ReferenceError
 const sayHi = function () {
     console.log("Hi!");
 };


 // ==========================================
 // 9. ARROW FUNCTIONS
 // ==========================================

 // Shorter function syntax using =>.

 const subtract = (a, b) => {
     return a - b;
 };

 console.log(subtract(8, 3)); // 5

 // Single-expression arrow functions return implicitly.
 const double = n => n * 2;
 console.log(double(5)); // 10

 // Zero parameters require parentheses.
 const sayHelloArrow = () => "Hello";
 console.log(sayHelloArrow()); // Hello

 // With curly braces, use return to return a value.
 const square = n => {
     return n * n;
 };

 console.log(square(4)); // 16

 // Arrow functions do not have their own this or arguments,
 // and cannot be used as constructors.
