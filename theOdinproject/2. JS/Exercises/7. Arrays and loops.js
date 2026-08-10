// let arr = [1,2,3,4,5];
// for(let i = 0;i<arr.length;i++){
//   console.log(arr[i]);
// }
// /--------------------
// let arr = [3,10,5];
// let max = arr[0];
// for(let i=1;i<arr.length;i++){
//   if(max<arr[i]){
//    max=arr[i]
//   }
// }
// console.log(max);
// ---------------------
// function countEven(arr){
//   let count = 0;
//  for(let i = 0; i<arr.length; i++){
//   if(arr[i]%2===0){
//     count++;
//   }
//  }
//  return count;
// }
// console.log(countEven([2,4,5, 6,7,8]));
// =-----------------
// function doubleArray(arr){
//   let arr2 = [];
//   for(let i = 0; i<arr.length; i++){
//     arr2[i] = arr[i]*2;
//   }
//   return arr2;
// }
// console.log(doubleArray([1,2,3]));
// ---------------------
// function filterEven(arr){
//     let evenArr = [];
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]%2===0){
//             evenArr.push(arr[i]);
//         }
//     }
//     return evenArr;
// }
// console.log(filterEven([1,2,3,4,5]));
// -------------------------
// function sumEven(arr){
//         let sum  = 0 ;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]%2===0){
//             sum = sum + arr[i];
//         }
//     }
//     return sum;
// }
// console.log(sumEven([1,2,3,4,5,6]));
// --------------------
// function findOdd(arr){
//     let odd = [];
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]%2===1){
//             odd.push(arr[i])
//         }
//     }
//     return odd;
// }
// console.log(findOdd([2,4,6,7,8]));
// //------------------------
// function sumofTripledEvens(arr){
//     let trippled = [];
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]%2===0){
//             trippled.push(arr[i]*3);
//         } 
//     }
//     for(let i = 0; i<trippled.length; i++){
//         sum = sum + trippled[i];
//     }
//     return sum;

// }
// console.log(sumofTripledEvens([1,2,3,4]));
// /----------------------------


//Practice session after a break-------

// 1. Sum of even function. 
 
// function sumEven(arr){
//     let sum = 0;
//     for(let i = 0; i<=arr.length; i++){
//         if(arr[i]%2===0){
//             sum = sum + arr[i];
//         }
//     }
//     return sum;
// }
// console.log(sumEven([2, 5, 6, 7, 8]));
// --------------------------

// Q2. findLargest(numbers)

function findLargest(numbers){
    let large = 0;
    for(let i = 0; i<numbers.length; i++){
        if(large<= numbers[i]){
            large = numbers[i];
        }
    }
    return large;
}
console.log(findLargest([12, 5, 90, 33, 21]));