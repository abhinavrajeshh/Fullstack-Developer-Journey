function longWords(arr){
    let long = arr.filter(a => a.length>4);
    return long;
}
console.log(longWords(["cat", "elephant", "dog", "tiger"]));