// = (assignment)
// assign value
let a = 5;
console.log(a); // 5

// == (loose equal)
// checks value only
console.log(5 == "5"); // true

// === (strict equal)
// checks value + type
console.log(5 === "5"); // false
console.log(5 === 5);   // true

// != (loose not equal)
// checks value only
console.log(5 != "5"); // false

// !== (strict not equal)
// checks value + type
console.log(5 !== "5"); // true
console.log(5 !== 5);   // false

// > (greater than)
console.log(10 > 5); // true

// < (less than)
console.log(5 < 10); // true

// >= (greater than or equal)
console.log(10 >= 10); // true
console.log(10 >= 5);  // true

// <= (less than or equal)
console.log(5 <= 5);  // true
console.log(5 <= 10); // true

// rule:
// use === and !==
// avoid == and !=