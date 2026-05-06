// let arr = [1, 2, 3, 4, 5];
// let result = arr.map(num => num*2);
// console.log(result);
// console.log(arr);
// -----------------------
// function doubleArray(arr){
//   let arr2 = [];
//   for(let i = 0; i<arr.length; i++){
//     arr2.push(arr[i] * 2);
//   }
//   return arr2;
// }
// console.log(doubleArray([1,2,3,4,5]));
// --CONVERT THIS TO MAP METHOD-----

// function doubleArray(arr){
//     let arr2 = arr.map(num => num*2);
//     return arr2;
// }
// console.log(doubleArray([1,2,3,4,5]));
// --------------------------

// function capitalizeWords(arr){
//     let cappedWords = arr.map(a => a[0].toUpperCase()+a.slice(1));
//     return cappedWords;
// }
// console.log(capitalizeWords(["hello", "world"]));
// -------------------------
// let arr = [1,2,3,4,5];
// let even = arr.filter(num => num%2===0);
// console.log(even);
// -----------------------------
// Practice problems-----
// -------------
// function longWords(arr){
//     let long = arr.filter(a => a.length>4);
//     return long;
// }
// console.log(longWords(["cat", "elephant", "dog", "tiger"]));
// -------------------
// function positiveNumbers(arr){
//     let positive = arr.filter(a => a>0);
//     return positive;
// }
// console.log(positiveNumbers([-2, 5, -1, 8, 0]));
// ---------------------
// function startwithA(arr){
//     let withA = arr.filter( a=> a[0]==="A")
//     return withA;
// }
// console.log(startwithA(["Abhinav", "Rahul", "Arjun", "Vishnu"])); 
// ---------------------------
// const numbers = [1,2,3,4,5];
// const sum = numbers.reduce((a,b)=>a+b);
// console.log(sum);
// --------------------
// function multiplyArr(arr){
//     let output = arr.reduce((a, b) => a*b);
//     return output;
// }
// console.log(multiplyArr([1,2,3,4,5]));
// -------------------------

function findMax(arr){
 let output = arr.reduce((a,b)=> a>b? a:b);
 return output;
}
console.log(findMax([3,10,5,8]));
