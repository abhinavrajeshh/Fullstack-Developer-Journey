// let user = {
//     name : "Arun", 
//     age : 20
// }
// console.log(user);
// delete user.age;
// console.log(user);
// -----------------
// let user2  = {
//     name : "Doe",
//     age : 40,
//     "full name" : "John Doe",
//     state : true
// }
// console.log(user2);
// console.log(user2.state);
// -------------------------
// let data = 42;
// let newdata = data;
// console.log(data);
// newdata = 43;
// console.log(newdata);
// --------------
// const obj = {
//     data : 42
// }
// const objcopy = obj;
// objcopy.data = 56;
// console.log(obj);
// console.log(objcopy);
// ----------------
function increaseCounterObject(objectCounter) {
  objectCounter.counter += 1;
}

function increaseCounterPrimitive(primitiveCounter) {
  primitiveCounter += 1;
}

const object = { counter: 0 };
let primitive = 0;

increaseCounterObject(object);
increaseCounterPrimitive(primitive);

console.log(object);
// ---------------
const phone ={
    brand : "Redmi",
    ram : 8,
    storage : "128gb"
}