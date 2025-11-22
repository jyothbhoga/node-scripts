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

// function debouncing(func, delay) {
//   let timerId;
//   return (...args) => {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// }

// const retry = async (func, retries = 3, delay = 500) => {
//   try {
//     return await func();
//   } catch (err) {
//     if (retries <= 0) {
//       throw new err();
//     } else {
//       await new Promise((r) => setTimeout(r, delay));
//       return await retry(func, retries - 1, delay * retries);
//     }
//   }
// };

// const arr1 = [1, 5, 6, 32, 2, 5, 33, 78, 200, 56];

// const findlargestNumber = (arr) => {
//   let tempArr = [];
//   if (arr.length === 1) {
//     return arr[0];
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0) {
//       if (arr[i] > arr[i + 1]) {
//         tempArr = [...tempArr, arr[i]];
//       }
//     }
//     if (i === arr.length - 1) {
//       if (arr[i] > arr[i - 1]) {
//         tempArr = [...tempArr, arr[i]];
//       }
//     }
//     if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//       tempArr = [...tempArr, arr[i]];
//     }
//   }
//   if (arr.length > 1) {
//     return findlargestNumber(tempArr);
//   }
// };

// console.log(findlargestNumber(arr1));

// // 22 Nov 2025
// const retry = async (func, retries = 3, delay = 500) => {
//   try {
//     return await func();
//   } catch {
//     if (retries <= 0) {
//       throw new Error("all retries failed");
//     }
//     await new Promise((r) => setTimeout(() => r, delay));
//     return await retry(func, retries - 1, delay * 2);
//   }
// };

// const debouncing = (func, delay) => {
//   let timerId;
//   return function (...args) {
//     const context = this;
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       func.apply(context, ...args);
//     }, delay);
//   };
// };

// const clone = structuredClone(abc);

// const createCounter = (n) => {
//   let x = n;
//   return () => {
//     return (x = x + 1);
//   };
// };

// const counter1 = createCounter(0);

// console.log(counter1()); // 1
// console.log(counter1()); // 2
// console.log(counter1()); // 3
// console.log(counter1()); // 4

// const createMultiplier = (a) => {
//   return (b) => {
//     return a * b;
//   };
// };

// const double = createMultiplier(2);
// const triple = createMultiplier(3);

// console.log(double(5)); // 10
// console.log(triple(5)); // 15
// console.log(double(10)); // 20

// const createBankAccount = (a) => {
//   let bal = a;
//   const account = {
//     deposit: (b) => {
//       return (bal = bal + b);
//     },
//     withdraw: (b) => {
//       return (bal = bal - b);
//     },
//     getBalance: () => {
//       return bal;
//     },
//   };
//   return account;
// };

// const account = createBankAccount(100);

// account.deposit(50);
// console.log(account.getBalance()); // 150

// account.withdraw(30);
// console.log(account.getBalance()); // 120

// const once = (fn) => {
//   let isAdded = false;
//   let val = 0;
//   return (a, b) => {
//     if (!isAdded) {
//       isAdded = true;
//       val = fn(a, b);
//     }
//     return val;
//   };
// };

// function add(a, b) {
//   return a + b;
// }

// const addOnce = once(add);

// console.log(addOnce(2, 3)); // 5
// console.log(addOnce(5, 5)); // 5 (still returns first result)

// const createCounter = (n) => {
//   let count = n;
//   let initialVal = n;
//   const retCounter = () => {
//     return count = count + 1;
//   }

//   retCounter.reset = () => {
//     return count = initialVal;
//   }

//   return retCounter;
//  }
// const counter = createCounter(5);

// console.log(counter()); // 6
// console.log(counter()); // 7
// counter.reset();
// console.log(counter()); // 6

// const memoize = (fn) => {
//   let memoizedObj = {};

//   return (n) => {
//     if(!memoizedObj[n]) {
//       memoizedObj[n] = fn(n);
//     }
//     return memoizedObj[n];
//   }
// }

// function slowSquare(n) {
//   console.log('Computing...');
//   return n * n;
// }

// const memoSquare = memoize(slowSquare);

// console.log(memoSquare(4)); // Computing... 16
// console.log(memoSquare(4)); // 16 (cached, no log)
// console.log(memoSquare(5)); // Computing... 25

// const createRateLimiter = (n) => {
//   let x = 0;
//   let initialVal = n;
//   return (str) => {
//     if (x < initialVal) {
//       x = x + 1;
//       return str;
//     } else {
//       return null;
//     }
//   };
// };

// const limiter = createRateLimiter(3);

// console.log(limiter("call 1")); // 'call 1'
// console.log(limiter("call 2")); // 'call 2'
// console.log(limiter("call 3")); // 'call 3'
// console.log(limiter("call 4")); // null

// const createCalculator = (x) => {
//   let retVal = x;

//   const calc = {
//     add: function (x) {
//       retVal = retVal + x;
//       return this;
//     },
//     subtract: function (x) {
//       retVal = retVal - x;
//       return this;
//     },
//     multiply: function (x) {
//       retVal = retVal * x;
//       return this;
//     },
//     getResult: function () {
//       return retVal;
//     },
//   };
//   return calc;
// };

// const calc = createCalculator(10);

// const result = calc.add(5).subtract(3).multiply(2).getResult();
// console.log(result); // 24

// const partial = (fn, ...args) => {
//   return (...newArgs) => {
//     return fn(...args, ...newArgs);
//   }
// }

// function multiply(a, b, c) {
//   return a * b * c;
// }

// const multiplyBy2 = partial(multiply, 2);
// console.log(multiplyBy2(3, 4)); // 24 (2 * 3 * 4)

// const multiplyBy2And3 = partial(multiply, 2, 3);
// console.log(multiplyBy2And3(4)); // 24 (2 * 3 * 4)

// const createHistory = () => {
//   let history = [];
//   let redoHist = [];
//   let historyCount = 0;
//   let redoCount = 0;
//   const retHistory = {
//     set: (n) => {
//       history[historyCount] = n;
//       historyCount = historyCount + 1;
//     },
//     undo: () => {
//       redoHist[redoCount] = history[historyCount - 1];
//       historyCount = historyCount - 1;
//       history.pop();
//       redoCount = redoCount + 1;
//     },
//     redo: () => {
//       historyCount = historyCount + 1;
//       history[historyCount - 1] = redoHist[redoCount - 1];
//       redoHist.pop();
//       redoCount = redoCount - 1;
//     },
//     getCurrent: () => {
//       return history[historyCount - 1];
//     },
//   };
//   return retHistory;
// };

// const createHistory = () => {
//   let history = [];
//   let count = 0;
//   let deletedArr = [];

//   const retHistory = {
//     set: (x) => {
//       history[count] = x;
//       count += 1;
//     },
//     undo: () => {
//       deletedArr.push(history[history.length - 1]);
//       count -= 1;
//       history.pop();
//     },
//     redo: () => {
//       history.push(deletedArr[deletedArr.length - 1]);
//       deletedArr.pop();
//     },
//     getCurrent: () => {
//       return history[history.length - 1];
//     }
//   };

//   return retHistory;
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

// const createCycle = (arr) => {
//   let count = 0;
//   let arrLength = arr.length;
//   const retCycle = {
//     next: () => {
//       if (count >= arrLength) {
//         count = 0;
//       }
//       return arr[count++];
//     },
//     reset: () => {
//       count = 0;
//     }
//   };
//   return retCycle;
// };

// const colors = createCycle(["red", "green", "blue"]);

// console.log(colors.next()); // 'red'
// console.log(colors.next()); // 'green'
// console.log(colors.next()); // 'blue'
// console.log(colors.next()); // 'red' (cycles back)
// console.log(colors.next()); // 'green'

// colors.reset();
// console.log(colors.next()); // 'red'

// const createAdvancedCounter = (x) => {
//   let retVal = x;

//   const retCounter = {
//     increment: () => {
//       retVal = retVal + 1;
//     },
//     decrement: () => {
//       retVal = retVal - 1;
//     },
//     incrementBy: (n) => {
//       retVal = retVal + n;
//     },
//     multiplyBy: (n) => {
//       retVal = retVal * n;
//     },
//     getValue: () => {
//       return retVal;
//     },
//   };
//   return retCounter;
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

//retry logic

// const retry = async (fn, retries = 3, delay = 500) => {
//   try {
//     return await fn();
//   } catch (err) {
//     if (retries <= 0) {
//       throw new Error("All retries failed");
//     }
//     await new Promise((r) => setTimeout(r, delay));
//     return await retry(fn, retries - 1, delay * retries);
//   }
// };

// function isBalanced(str) {
//   let firstOcc = true;

//   let openBracketLength = 0;
//   let closeBracketLength = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "(" || str[i] === "{") {
//       openBracketLength += 1;
//     } else {
//       closeBracketLength += 1;
//       if (openBracketLength < closeBracketLength) {
//         firstOcc = false;
//       }
//     }
//   }

//   if (openBracketLength === closeBracketLength && firstOcc) {
//     return true;
//   } else {
//     return false;
//   }
// }
