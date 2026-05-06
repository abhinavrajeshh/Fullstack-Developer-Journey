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
let arr = [1,2,3,4,5];
let even = arr.filter(num => num%2===0);
console.log(even);
// -----------------------------
