//24/10/2025
// const createCounter = (n) => {
//   let updatedCount = n;
//   return () => {
//     return (updatedCount += 1);
//   };
// };
// const counter1 = createCounter(0);

// console.log(counter1()); // 1
// console.log(counter1()); // 2
// console.log(counter1()); // 3
// console.log(counter1()); // 4

//======================================================================//

// const createMultiplier = (n) => {
//   return (x) => {
//     let a = n * x;
//     return a;
//   };
// };

// const double = createMultiplier(2);
// const triple = createMultiplier(3);

// console.log(double(5)); // 10
// console.log(triple(5)); // 15
// console.log(double(10)); // 20
// console.log(triple(10)); // 30

//======================================================================//

// const createBankAccount = (n) => {
//   let bal = n;
//   const deposit = (n) => {
//     bal += n;
//   };
//   const withdraw = (n) => {
//     bal -= n;
//   };
//   const getBalance = () => {
//     return bal;
//   };
//   return { deposit, withdraw, getBalance };
// };

// const account = createBankAccount(100);

// account.deposit(50);
// console.log(account.getBalance()); // 150

// account.withdraw(30);
// console.log(account.getBalance()); // 120

//======================================================================//

// const createSecret = (str) => {
//   let updatedStr = str;
//   const getSecret = () => {
//     return updatedStr;
//   };
//   const setSecret = (st) => {
//     updatedStr = st;
//   };
//   return { getSecret, setSecret };
// };

// const mySecret = createSecret("password123");

// console.log(mySecret.getSecret()); // 'password123'
// mySecret.setSecret("newPassword");
// console.log(mySecret.getSecret()); // 'newPassword'

//======================================================================//

// const createGreeter = (str) => {
//   return (newStr) => {
//     return str + newStr;
//   };
// };

// const sayHello = createGreeter("Hello");
// const sayHi = createGreeter("Hi");

// console.log(sayHello("Alice")); // 'Hello, Alice!'
// console.log(sayHi("Bob")); // 'Hi, Bob!'

//======================================================================//

// const once = (fn) => {
//   let isCached = false;
//   let sum = 0;
//   return (a, b) => {
//     if (!isCached) {
//       isCached = true;
//       sum = fn(a, b);
//     }
//     return sum;
//   };
// };

// function add(a, b) {
//   return a + b;
// }

// const addOnce = once(add);

// console.log(addOnce(2, 3)); // 5
// console.log(addOnce(5, 5)); // 5 (still returns first result)

//======================================================================//

// const createCounter = (n) => {
//   let initialVal = n;
//   let updatedCount = n;
//   const counterFunc = () => {
//     updatedCount += 1;
//     return updatedCount;
//   };
//   counterFunc.reset = () => {
//     return (updatedCount = initialVal);
//   };
//   return counterFunc;
// };
// const counter = createCounter(5);

// console.log(counter()); // 6
// console.log(counter()); // 7
// counter.reset();
// console.log(counter()); // 6

//======================================================================//

// const memoize = (fn) => {
//   let abc = {};
//   return (n) => {
//     if (!abc[n]) {
//       abc[n] = fn(n);
//     }
//     return abc[n];
//   };
// };

// function slowSquare(n) {
//   console.log("Computing...");
//   return n * n;
// }

// const memoSquare = memoize(slowSquare);

// console.log(memoSquare(4)); // Computing... 16
// console.log(memoSquare(4)); // 16 (cached, no log)
// console.log(memoSquare(5)); // Computing... 25
// console.log(memoSquare(5)); // 25 (cached, no log)

//======================================================================//

// const createRateLimiter = (n) => {
//   let initalCount = 0;
//   return (str) => {
//     initalCount += 1;
//     return initalCount > n ? null : str;
//   };
// };

// const limiter = createRateLimiter(3);

// console.log(limiter("call 1")); // 'call 1'
// console.log(limiter("call 2")); // 'call 2'
// console.log(limiter("call 3")); // 'call 3'
// console.log(limiter("call 4")); // null

//======================================================================//

// const createCalculator = (n) => {
//   let abc = n;
//   const calc = {
//     add: function (a) {
//       abc += a;
//       return this;
//     },
//     subtract: function (a) {
//       abc -= a;
//       return this;
//     },
//     multiply: function (a) {
//       abc *= a;
//       return this;
//     },
//     getResult: function () {
//       return abc;
//     },
//   };
//   return calc;
// };

// const calc = createCalculator(10);

// const result = calc.add(5).subtract(3).multiply(2).getResult();
// console.log(result); // 24

//======================================================================//

// const partial = (fn, ...args) => {

//   return (...newArgs) => {
//     let res = fn(...args, ...newArgs);
//     return res;
//   }
// }

// function multiply(a, b, c) {
//   return a * b * c;
// }

// const multiplyBy2 = partial(multiply, 2);
// console.log(multiplyBy2(3, 4)); // 24 (2 * 3 * 4)

// const multiplyBy2And3 = partial(multiply, 2, 3);
// console.log(multiplyBy2And3(4)); // 24 (2 * 3 * 4)

//======================================================================//

// const createHistory = () => {
//   let abc = [];
//   let count = 0;
//   let deletedArr = [];
//   const retHis = {
//     set: (a) => {
//       abc[count] = a;
//       count += 1;
//     },
//     getCurrent: () => {
//       return abc[count - 1];
//     },
//     undo: () => {
//       deletedArr.push(abc[count - 1]);
//       abc.pop();
//       count -= 1;
//     },
//     redo: () => {
//       abc.push(deletedArr[deletedArr.length - 1]);
//       count += 1;
//       deletedArr.pop();
//     },
//   };
//   return retHis;
// };

// const history = createHistory();

// history.set(10);
// history.set(20);
// history.set(30);

// console.log(history.getCurrent()); // 30
// history.undo();
// console.log(history.getCurrent()); // 20
// history.undo();
// console.log(history.getCurrent()); // 10
// history.redo();
// console.log(history.getCurrent()); // 20

//======================================================================//

// const createCycle = (arr) => {
//   let count = 0;
//   const retFun = {
//     next: () => {
//       if (count === arr.length) {
//         count = 0;
//       }
//       count++;
//       return arr[count - 1];
//     },
//     reset: () => {
//       count = 0;
//     },
//   };
//   return retFun;
// };

// const colors = createCycle(["red", "green", "blue"]);

// console.log(colors.next()); // 'red'
// console.log(colors.next()); // 'green'
// console.log(colors.next()); // 'blue'
// console.log(colors.next()); // 'red' (cycles back)
// console.log(colors.next()); // 'green'

// colors.reset();
// console.log(colors.next()); // 'red'

//======================================================================//

// const createAdvancedCounter = (n) => {
//   let abc = n;
//   const counter = {
//     increment: () => {
//       abc += 1;
//     },
//     decrement: () => {
//       abc -= 1;
//     },
//     incrementBy: (a) => {
//       abc += a;
//     },
//     multiplyBy: (a) => {
//       abc *= a;
//     },
//     getValue: () => {
//       return abc;
//     },
//   };
//   return counter;
// };

// const counter2 = createAdvancedCounter(10);

// counter2.increment();
// console.log(counter2.getValue()); // 11

// counter2.decrement();
// console.log(counter2.getValue()); // 10

// counter2.incrementBy(5);
// console.log(counter2.getValue()); // 15

// counter2.multiplyBy(2);
// console.log(counter2.getValue()); // 30

// // Cannot access internal value directly
// console.log(counter2.value); // undefined

// 29 Oct 2025

// const once = (fn) => {
//   let sum = 0;
//   let isCalled = false;
//   return (a, b) => {
//     if (!isCalled) {
//       isCalled = true;
//       sum = fn(a, b);
//     }
//     return sum;
//   };
// };
// function add(a, b) {
//   return a + b;
// }

// const addOnce = once(add);

// console.log(addOnce(2, 3)); // 5
// console.log(addOnce(5, 5));

// const memoize = (fn) => {
//   const memoizedObj = {};

//   return (n) => {
//     if(!memoizedObj[n]) {
//       memoizedObj[n] = fn(n)
//     }
//     return memoizedObj[n];
//   };
// };

// function slowSquare(n) {
//   console.log("Computing...");
//   return n * n;
// }

// const memoSquare = memoize(slowSquare);

// console.log(memoSquare(4)); // Computing... 16
// console.log(memoSquare(4)); // 16 (cached, no log)
// console.log(memoSquare(5)); // Computing... 25

// const partial = (fn, ...args) => {
//   let abc = 0;
//   return (...newArgs) => {
//     abc = fn(...args, ...newArgs);
//     return abc;
//   };
// };

// function multiply(a, b, c) {
//   return a * b * c;
// }

// const multiplyBy2 = partial(multiply, 2);
// console.log(multiplyBy2(3, 4)); // 24 (2 * 3 * 4)

// const multiplyBy2And3 = partial(multiply, 2, 3);
// console.log(multiplyBy2And3(4)); // 24 (2 * 3 * 4)

// const createCycle = (arr) => {
//   let currInd = 0;
//   const colorsOperation = {
//     next: () => {
//       if(currInd === arr.length) {
//         currInd = 0;
//       }
//       return arr[currInd++];
//     },
//     reset: () => {
//       currInd = 0;
//     },
//   };
//   return colorsOperation;
// };

// const colors = createCycle(["red", "green", "blue"]);

// console.log(colors.next()); // 'red'
// console.log(colors.next()); // 'green'
// console.log(colors.next()); // 'blue'
// console.log(colors.next()); // 'red' (cycles back)
// console.log(colors.next()); // 'green'

// colors.reset();
// console.log(colors.next()); // 'red'

// there is 3 states
// 1 is wishlist
// 1 is cart
// 1 is reset

// const shoppingCart = (x) => {
//       let c = x;
//   const retFunc = {
//     wishlist: () => {
//       c = x + 1;
//       return c;
//     },
//     cart: () => {
//       c = x + 1;
//       return c;
//     },
//     reset: () => {
//       c = 0;
//       return c;
//     },
//   };
//   return retFunc;
// };

// const callShoppingCart = shoppingCart(0);
// console.log(callShoppingCart.wishlist());
// console.log(callShoppingCart.wishlist());
// console.log(callShoppingCart.cart());
// console.log(callShoppingCart.cart());
// callShoppingCart.reset();
// console.log(callShoppingCart.wishlist());
// console.log(callShoppingCart.cart());

// 1/11/2025

// const createCounter = (x) => {
//   let n = x;
//   return () => {
//     n = n + 1;
//     return n;
//   };
// };
// const counter1 = createCounter(0);

// console.log(counter1()); // 1
// console.log(counter1()); // 2
// console.log(counter1()); // 3
// console.log(counter1()); // 4

// const createBankAccount = (bal) => {
//   let updatedBal = bal;

//   const deposit = (x) => {
//     updatedBal = updatedBal + x;
//   };
//   const withdraw = (x) => {
//     updatedBal = updatedBal - x;
//   };
//   const getBalance = () => {
//     return updatedBal;
//   };
//   return { deposit, withdraw, getBalance };
// };

// const account = createBankAccount(100);

// account.deposit(50);
// console.log(account.getBalance()); // 150

// account.withdraw(30);
// console.log(account.getBalance()); // 120

// const createGreeter = (str) => {
//   return (newStr) => {
//     return str + newStr
//   }
// }

// const sayHello = createGreeter('Hello');
// const sayHi = createGreeter('Hi');

// console.log(sayHello('Alice')); // 'Hello, Alice!'
// console.log(sayHi('Bob'));      // 'Hi, Bob!'

// const once = (fn) => {
//   let sum = 0;
//   let isCalled = false;
//   return (a, b) => {
//     if (!isCalled) {
//       isCalled = true;
//       sum = fn(a, b);
//     }
//     return sum;
//   };
// };

// function add(a, b) {
//   return a + b;
// }

// const addOnce = once(add);

// console.log(addOnce(2, 3)); // 5
// console.log(addOnce(5, 5)); // 5 (still returns first result)

// const createCounter = (x) => {
//   let ret = x;
//   let updatedVal = x;
//   let retCounter = () => {
//     updatedVal = updatedVal + 1;
//     return updatedVal;
//   };
//   retCounter.reset = () => {
//     return (updatedVal = ret);
//   };
//   return retCounter;
// };

// const counter = createCounter(5);

// console.log(counter()); // 6
// console.log(counter()); // 7
// counter.reset();
// console.log(counter()); // 6

// const memoize = (fn) => {
//   let abc = {};

//   return (x) => {
//     if (!abc[x]) {
//       abc[x] = fn(x);
//     }
//     return abc[x];
//   };
// };

// function slowSquare(n) {
//   console.log("Computing...");
//   return n * n;
// }

// const memoSquare = memoize(slowSquare);

// console.log(memoSquare(4)); // Computing... 16
// console.log(memoSquare(4)); // 16 (cached, no log)
// console.log(memoSquare(5)); // Computing... 25

// const createCalculator = (x) => {
//   let updatedVal = x;
//   const retCalc = {
//     add: function (a) {
//       updatedVal = updatedVal + a;
//       return this;
//     },
//     subtract: function (a) {
//       updatedVal = updatedVal - a;
//       return this;
//     },
//     multiply: function (a) {
//       updatedVal = updatedVal * a;
//       return this;
//     },
//     getResult: () => {
//       return updatedVal;
//     },
//   };
//   return retCalc;
// };

// const calc = createCalculator(10);

// const result = calc.add(5).subtract(3).multiply(2).getResult();
// console.log(result); // 24

// function debouncing(func, delay) {
//   let timerId;
//   return (...args) => {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// }

// 5 Nov 2025

function debouncing(func, delay) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
