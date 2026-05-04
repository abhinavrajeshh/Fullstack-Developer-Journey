function filterEven(arr){
    let evenArr = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2===0){
            evenArr[i] = arr[i];
        }
    }
    return evenArr;
}
console.log(filterEven([1,2,3,4,5]));