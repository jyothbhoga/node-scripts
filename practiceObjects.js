// https://www.instagram.com/p/DNA7D3Ryk_m

const employee = {
  age: 31,
  name: "Jyoth",
  aadharNo: 123455678990,
  mobileNo: 987654321,
  city: "Mumbai",
};

const empProxy = new Proxy(employee, {
  get(target, props) {
    if (props === "aadharNo") {
      console.log("Warning sensitive information");
      return "xxxxxxxxxx890";
    }
    if (props === "mobileNo") {
      console.log("Warning sensitive information");
      return "xxxxxxx21";
    }

    return Reflect.get(...arguments);
  },
});

console.log(empProxy.aadharNo);
console.log(empProxy.mobileNo);

// https://www.instagram.com/p/DND6fCiScBA/

const employee1 = {
  age: 31,
  name: "Jyoth",
  aadharNo: 123455678990,
  mobileNo: 987654321,
  city: "Mumbai",
};

const empProxy1 = new Proxy(employee1, {
  set(obj, prop, value) {
    if (prop in obj) {
      return Reflect.set(obj, prop, value);
    } else throw new Error("Cannot add new key");
  },

  get(obj, prop) {
    if (prop in obj) {
      return Reflect.get(...arguments);
    } else {
      throw new Error("Property does not exist");
    }
  },
});

// empProxy1.state = "Maharashtra";
console.log(empProxy1.age);

// https://www.instagram.com/p/DOoOUuRgR28

const one = Symbol(2);
const obj = {
  ["one"]: 1,
  [one]: 2,
};

console.log(obj.one);

// https:www.instagram.com/p/DOjIRPHgZ7o/

function greet(name = "guest") {
  console.log(`Hello ${name}`);
}

greet();
greet(null);
greet(undefined);

// https://www.instagram.com/p/DOIfjv1gR_h/
const nums = [1, 2, 3];
const x = nums.forEach((n) => n * 2);
const y = nums.map((n) => n * 2);
console.log(x);
console.log(y);

// https://www.instagram.com/p/DN_URbqAYel/

const cart = [
  { item: "Shoes", price: 200 },
  { item: "T shirt", price: 400 },
  { item: "Shirt", price: 700 },
  { item: "Belt", price: 340 },
];

const totalamt = cart.reduce((acc, curr) => {
  return (acc = acc + curr.price);
}, 0);

console.log(totalamt);

// https://www.instagram.com/p/DNtThfdQhdR/
const arr = [5, 23, 231, 132, 425];
const sliced = arr.slice(1, 3);
console.log(sliced);
console.log(arr);

const arr1 = [5, 23, 231, 132, 425];
const spliced = arr1.splice(2, 2);
console.log(spliced);
console.log(arr1);

// https://www.instagram.com/p/DNlbysEyUr6/
let obj1 = {
  name: "Jyoth",
  age: undefined,
  isStudent: true,
  score: [213, undefined, 23],
  add: {
    city: "Mumbai",
    pin: null,
  },
  greet: function () {
    return "hello";
  },
};

let strObj1 = JSON.stringify(obj1);

console.log(strObj1);

// https://www.instagram.com/p/DJ_ykxYy30M/
function add(a) {
  return function (b) {
    if (!b) return a;
    return add(a + b);
  };
}

const sum = add(1)(2)(3)(4);

console.log(sum());

// https://www.instagram.com/p/DIqx7EHy-He/
let user = {
  name: "Jyoth",
  profession: "Engineer",
};

Object.defineProperty(user, "age", {
  value: 31,
  writable: true,
  configurable: true,
  enumerable: false,
});

user.age = 32;
console.log(user.age);

const userProxy = new Proxy(user, {
  set(obj, prop, value) {
    if (prop in obj) {
      return Reflect.set(obj, prop, value);
    } else throw new Error("cannot add properties");
  },
  get(target, prop) {
    if (prop === "age") {
      return 31;
    }
    return Reflect.get(...arguments);
  },
});
userProxy.age = 23;
// userProxy.add = "Mumbai";

console.log(userProxy.age);

const name = "Global";

function outer() {
  const name = "Outer";
  function inner() {
    console.log(name);
  }
  return inner;
}

const greetMe = outer();
greetMe();

// Quanteon Solutions: Flatten Object
const input = {
  a: 1,
  b: {
    c: 2,
    d: false,
  },
  e: 4,
  f: {
    g: true,
    h: {
      i: "6",
    },
  },
  j: 7,
};

const output = {
  a: 1,
  c: 2,
  d: false,
  e: 4,
  g: true,
  i: "6",
  j: 7,
};

const flatObject = (obj) => {
  let flattenedObj = {};
  for (let elem in obj) {
    if (typeof obj[elem] === "object") {
      flattenedObj = { ...flattenedObj, ...flatObject(obj[elem]) };
    } else {
      flattenedObj[elem] = obj[elem];
    }
  }
  return flattenedObj;
};

console.log(flatObject(input));

// prototype for map
Array.prototype.myMap = function (callback) {
  let newArr = [];
  let arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    const counter = callback(this[i]);
    newArr.push(counter);
  }
  return newArr;
};

let arr2 = [1, 2, 3, 4];

const myMapArr = arr2.myMap((e) => e * 2);

console.log(myMapArr);

// prototype for map
Array.prototype.myForEach = function (callback) {
  let arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    callback(this[i]);
  }
};

// arr2 = arr2.myForEach((e) => e * 2);
// console.log(arr2);

Array.prototype.myFilter = function (callback) {
  if (typeof callback != "function") {
    throw new Error("callback not a func");
  }
  let filteredArr = [];

  for (let i = 0; i < this.length; i++) {
    if (Object.prototype.hasOwnProperty.call(this, i)) {
      if (callback(this[i], i, this)) {
        filteredArr.push(this[i]);
      }
    }
  }
  return filteredArr;
};
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.myFilter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers);
