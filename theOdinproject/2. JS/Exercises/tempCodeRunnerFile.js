function sumofTripledEvens(arr){
    let trippled = [];
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2===0){
            trippled.push(arr[i]*3);
        }
    }
    for(let i = 1; i<trippled.length; i++){
        sum = sum + trippled[i];
    }
    return sum;

}
console.log(sumofTripledEvens([1,2,3,4]));