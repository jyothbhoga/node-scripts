//22-08-2025

Array.prototype.myMap = function (callback) {
  let returnArr = [];
  for (let i = 0; i < this.length; i++) {
    returnArr.push(callback(this[i]));
  }
  return returnArr;
};

let arr2 = [1, 2, 3, 4];

const myMapArr = arr2.myMap((e) => e * 2);

console.log("Map Prototype", myMapArr);

Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Filter cannot be implemented");
  }
  let returnArr = [];
  for (let i = 0; i < this.length; i++) {
    if (Object.prototype.hasOwnProperty.call(this, i)) {
      if (callback(this[i], i, this)) {
        returnArr.push(this[i]);
      }
    }
  }
  return returnArr;
};
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.myFilter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers);

//calll apply bind
let objCall = { name: "Jyoth", add: "Mumb" };

function sayHello(age, profession) {
  console.log(
    "Hello " +
      this.name +
      " My age is " +
      age +
      " my add is " +
      this.add +
      " my profession is " +
      profession
  );
}

sayHello.call(objCall, 21, "call");

sayHello.apply(objCall, [24, "apply"]);

const bindFunc = sayHello.bind(objCall);

bindFunc(21, "bind");

Array.prototype.myMap = function (call) {
  let retArr = [];
  for (let i = 0; i < this.length; i++) {
    retArr.push(call(this[i]));
  }
  return retArr;
};
