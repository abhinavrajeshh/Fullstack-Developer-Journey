function sumAll(num1, num2) {
    let sum = 0;

    let start = num1 < num2 ? num1 : num2;
    let end = num1 > num2 ? num1 : num2;

    for(let i = start; i <= end; i++){
        sum = sum + i;
    }
    return sum;
}

console.log(sumAll(4, 1));