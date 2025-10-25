
// 25th Oct 2025
const employee = {
  age: 31,
  name: "Jyoth",
  aadharNo: 123455678990,
  mobileNo: 987654321,
  city: "Mumbai",
};

const empProxy = new Proxy(employee, {
  set(obj, prop, val) {
    if (prop in obj) {
      return Reflect.set(obj, prop, val);
    } else {
      throw new Error("Cannot add new props");
    }
  },
  get(obj, prop) {
    if (prop === "aadharNo") {
      return "xxxxxxxxxxx990";
    }
    if (prop in obj) {
      return Reflect.get(...args);
    } else {
      throw new Error("Cannot get not existing properties");
    }
  },
});

empProxy.as = 212;
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

Array.prototype.myMap = function (callback) {
  let retArr = [];
  for (let i = 0; i < this.length; i++) {
    retArr.push(callback(this[i]));
  }
  return retArr;
};

Array.prototype.filter = function (callback) {
  let retArr = [];
  for (let i = 0; i < this.length; i++) {
    if(Object.prototype.hasOwnProperty.call(this, i)) {
      if(callback(this[i], i, this)){
        retArr.push(this[i])
      }
    }
  }
  return retArr;
};
