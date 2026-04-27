// let age = 21;
// if(age>=18){
//     console.log("Adult");
// }else{
//     console.log("Minor");
// }
// -------------------------

// if elseif else

    // let marks = 75;
    // if(marks>=90) {
    //     console.log("Grade : A");
    // }else if(marks>=70){
    //     console.log("Grade : B");
        
    // }else{
    //     console.log("Grade : C");
    // }

// -----Practice section-------

// let num = 6;
// if(num%2==0){
//     console.log("even");
    
// }else{
//     console.log("odd");
    
// }
// -----------
//biggest of 2 numbers:

// let a = 50;
// let b = 20;
// if(a<b){
//     console.log(b);
// }else{
//     console.log(a);
// }

//-----------------
//grade system

// let  marks = 85;
// if(marks===100){
//     console.log("Perfect score");
    
// }
// else if(marks>=90){
//     console.log("Grade : A");
    
// }else if(marks>=70){
//     console.log("Grade : B");
    
// }else if(marks>=50){    
//     console.log("Grade : C");
    
// }else{
//     console.log("Failed");
    
// }

// --------------------

//---Logical operators--

// let age = 21;
// let hasID = false;

// if(age>=18 && hasID === true){
//     console.log("Allowed");
// }else{
//     console.log("Not allowed");
// }
// ----------------
// let age = 16;
// let hasID = true;

// if(age>=18 || hasID === true){
//     console.log("Allowed");
// }else{
//     console.log("Not allowed");
// }
// ----------------

// let isloggedin = false;
// if(!isloggedin){
//     console.log("this will work.");
// }
// ----Practice-------------------

// let age = 20;
// let hasLicense = true;

// if(age>=18 && hasLicense === true){
//     console.log("Can drive");
    
// }else{
//     console.log("U cannot drive");
// }
// --------------------------

// let isWeekend = true;
// let isHoliday = false;
// if(isWeekend || isHoliday){
//     console.log("relax");
// }
// -----------------------

// let isLoggedIn = false;
// if(isLoggedIn === false){
//     console.log("Login first");
    
// }

// ---------------------
// let marks = 85;
// let attendance = 80;
// if(marks >= 50 && attendance >= 75){
//     console.log("Pass");
// }
// -----------------

// let role = "user";
// let isAdmin = "false";

// if(isAdmin === true || role === "user"){
//     console.log("Acess granted");
    
// }else {
//     console.log("Acess denied");
    
// }

// ------------------------
//-----Practice section 2 ------

// let num = 15;
// if(num >= 10 && num<=20){
//     console.log("In range")
// }else{
//     console.log("Out of range");
// }
// ------------------
// let username = "admin";
// let password = "1234";
// if(username === "admin" && password === "1234"){
//     console.log("Login success");
// }else{
//     console.log("Invalid credentials");
// }
// ------------------
// let num = -4;
// if(num % 2 === 0 && num > 0){
//     console.log("Valid number");
    
// }else{
//     console.log("Invalid number");
    
// }
// ----------------------
// let price = 1200;
// let isMember = true;
// if(price>1000 && isMember === true){
//     console.log("Discount applied");
// }else{
//     console.log("No discount");
// }
// ---------------

// let marks = 45;
// let attendance = 80;
// if(marks >= 50 && attendance >= 75){
//     console.log("Pass");
// }else{
//     console.log("failed");
// }
// --------------------
// let age = 25;
// let hasID = false;
// if(age>=18 && hasID === true){
//     console.log("Entry allowed");
// }else{
//     console.log("entry denied");
// }
// ---------------
// let marks = 58;
// if(marks >= 90){
//     console.log("Excellant");
// }else if(marks>= 70 && marks <= 89){
//     console.log("Good");
// }else if(marks >= 69 && marks <= 50){
//     console.log("Average");
// }else if(marks > 50){
//     console.log("fail");
    
// }

// let marks = 58;
// if(marks>=90){
//     console.log("Excellant");
// }else if(marks<=89 && marks >= 70){
//     console.log("Good");
// }else if(marks <= 69 && marks>= 50){
//     console.log("Average");
// }else{
//     console.log("Fail");
    
// }
// --------------------
// if (marks >= 90) {
//   console.log("Excellent");
// } else if (marks >= 70) {
//   console.log("Good");
// } else if (marks >= 50) {
//   console.log("Average");
// } else {
//   console.log("Fail");
// }
// ---Ternary operator--------
// let age = 70;
// let result = age>25 ? "yes": "no";
// console.log(result);
// ---practice--------------

// let num = 18;
// console.log(num>=0? "Positive":"Negative");
// ---------------

// let num = 8;
// console.log(num%2===0? "Even":"Odd");
// -----------

// --Switch statement----
// let day = 2;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//         case 2:
//             console.log("Tuesday");
//             break;
//             case 3:
//                 console.log("Wednesday");
//                 break;
//                 case 4:
//                     console.log("Thursday");
//                     break;
//                     case 5:
//                         console.log("Friday");
//                         break;
//                         case 6:
//                             console.log("Saturday");
//                             break;
//                             case 7:
//                                 console.log("sunday");
//                                 break;
//                                 default:
//                                     console.log("invalid day");
//                                     break;
// }
// -------------------
// let a = 10;
// let b = 5;
// let op = "+";
// switch(op){
//     case "+":
//         console.log(a+b);
//         break;
//             case "-":
//                 console.log(a-b);
//                 break;
//                 case "/":
//                     console.log(a/b);
//                     break;
//                     case "*":
//                         console.log(a*b);
//                         break;
//                         default:
//                             console.log("Invalid");
//                             break;                         
                    
                
// }
// -----------------
// let grade = "B";

// switch(grade){
//     case "A":
//         console.log("Excellent");
//         break;
//         case "B":
//             console.log("Good");
//             break;
//             case "C":
//                 console.log("Average");
//                 break;
//             default:
//                 console.log("Fail");
//                 break;
                
// }
// -----------------------------

// let role = "admin";
// switch(role){
//     case "admin":
//         console.log("Full access");
//         break;
//         case "user":
//             console.log("Limited access");
//             break;
//             case "guest":
//                 console.log("View only");
//                 break;
//                 default:
//                     console.log("Unknown role");
//                     break;
                
// }
// ------------------
// -------LOOPS------

// for(let i = 1; i<=5;i++){
//     console.log("*");
// }
// -------------
// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++
// }
// ----------
// let i = 1;
// do {
//     console.log("*");
//     i++;
// } while(i<= 5);
// -------------
// practice section--------

// let i;
// for(i = 1; i<=10;i++){
//     console.log(i);
// }
// ------------------
// for(let i = 1; i<=20;i++){
//     if(i%2==0){
//         console.log(i);
        
//     }
// }
// -------------
// for(let i = 10; i>=1;i--){
//     console.log(i);
// }
// -------------------
// let i =1;
// while(i<=5){
//     console.log(i);
//     i++
// }
// -------------
// let i = 1;
// do{
//     console.log(i);
//     i++;
// } while(i<=3);
// ---------------
// let j = 0;
// for(let i = 1;i<=5;i++){
//     console.log(i);
//     j = j+i;
// }
// console.log("Sum = ",j);
// ---------------------
// ---NESTED LOOOOPPPPPPP-----

// for(let i = 1; i<= 5;i++){
//     for(let j=1;j<=3;j++){
//         console.log(i,j);
        
//     }
    
// }
// -----------------
for(let i = 1; i<= 5; i++){
    for(let j = 1; j<= 5; j++){
        console.log("* ");
        
    }
    console.log("\n");
    
}
