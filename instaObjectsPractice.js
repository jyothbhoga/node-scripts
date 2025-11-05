// 25th Oct 2025
// const employee = {
//   age: 31,
//   name: "Jyoth",
//   aadharNo: 123455678990,
//   mobileNo: 987654321,
//   city: "Mumbai",
// };

// const empProxy = new Proxy(employee, {
//   set(obj, prop, val) {
//     if (prop in obj) {
//       return Reflect.set(obj, prop, val);
//     } else {
//       throw new Error("Cannot add new props");
//     }
//   },
//   get(obj, prop) {
//     if (prop === "aadharNo") {
//       return "xxxxxxxxxxx990";
//     }
//     if (prop in obj) {
//       return Reflect.get(...args);
//     } else {
//       throw new Error("Cannot get not existing properties");
//     }
//   },
// });

// empProxy.as = 212;
// console.log(empProxy.ac)

// Function.prototype.myCall = function (context, ...args) {
//   if(typeof this !== 'function') {
//     throw new Error("Not a func");
//   }
//   context.fn = this;
//   context.fn(...args);
// }

// Function.prototype.myApply = function (context, args) {
//   if (typeof this !== "function") {
//     throw new Error("Not a func");
//   }
//   if (!Array.isArray(args)) {
//     throw new Error("arguments are not in array format");
//   }
//   context.fn = this;
//   context.fn(...args);
// };

// Function.prototype.myBind = function (context, ...args) {
//   if (typeof this !== "function") {
//     throw new Error("Not a func");
//   }
//   context.fn = this;
//   return function (...newArgs) {
//     context.fn(...args, ...newArgs)
//   }
// };

// Array.prototype.myMap = function (callback) {
//   let retArr = [];
//   for (let i = 0; i < this.length; i++) {
//     retArr.push(callback(this[i]));
//   }
//   return retArr;
// };

// Array.prototype.filter = function (callback) {
//   let retArr = [];
//   for (let i = 0; i < this.length; i++) {
//     if(Object.prototype.hasOwnProperty.call(this, i)) {
//       if(callback(this[i], i, this)){
//         retArr.push(this[i])
//       }
//     }
//   }
//   return retArr;
// };

// 26 Oct 2025

// const employee = {
//   age: 31,
//   name: "Jyoth",
//   aadharNo: 123455678990,
//   mobileNo: 987654321,
//   city: "Mumbai",
// };

// const empProxy = new Proxy(employee, {
//   get(obj, prop) {
//     if (prop === "aadharNo") {
//       return obj[prop].toString()
//     }

//     if (prop === "mobileNo") {
//       return "XXXXXXXXX21";
//     }
//     if (prop in obj) {
//       return Reflect.get(...arguments);
//     } else {
//       throw new Error("prop does not exist");
//     }
//   },
//   set(obj, prop, val) {
//     if (prop in obj) {
//       return Reflect.set(obj, prop, val);
//     } else {
//       throw new Error("cannot add a new prop");
//     }
//   },
// });

// // empProxy.as = 212;
// // console.log(empProxy.ac)
// console.log(empProxy.aadharNo)
// console.log(empProxy.mobileNo)

// Create a React web application that consumes the
// https://fakestoreapi.com/products?sort=asc API and displays a list of products in ascending order based on price. The application should also include a dropdown to allow the user to change the sorting of the products between ascending and descending. When
// the user changes the sorting order, the application should update the query parameter value and fetch the products with the new sorting order. to get data create custom hook useFetch which accept url as s param and returning data loading and error state also please write unit test for all pure functions, design all component with  compound pattern.

// 1/11/2025

// const abc = {
//   x1: "hey there",
// };

// const def = {
//   x2: "what is up?",
//   __proto__: abc,
// };

// const xyz = {
//   x3: "he he",
//   __proto__: def,
// };

// console.log(xyz.x1);


