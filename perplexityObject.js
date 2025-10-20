//1.
// let x = { b: 1, c: 2 };
// let y = Object.keys(x);
// console.log("1", y.length); - 2



// 2.
// let x = '{ "b": 1, "c": 2 }';
// let y = JSON.parse(x);
// console.log('2',typeof y); - object

// 3.
// console.log("10"+20+30); //102030
// console.log("10"+"20"+30); //102030
// console.log(10+20+"30"); //3030


// 4.
// var z = 1,
// y = z = typeof y;
// console.log(y); //undefined

// 5.
// console.log(3 > 2 > 1); //false

// 6.
// console.log([] + []);

// 7.
// var array = ["1","2","3","4","5"];
// delete array;
// console.log(array.length); //5

// 8.
// function foo() {
//   return
//   {
//     name: "Sandeep"
//   }
// }
// console.log(foo()); // undefined

// 9.
// var foo = function() { }
// console.log(foo.prototype);

// 10.
// let arr = [1, 2, 3, 4, 5];
// arr.length = 0;
// console.log(arr); // []

// 11.
// for(var i=0;i<3;i++) {
//   setTimeout(function() {console.log(i)}, 100);
// } //333

// 12.
// for(let i=0;i<3;i++) {
//   setTimeout(function() {console.log(i)}, 100);
// } /Z/0 1 2

// 13.
// const a = [1, 2, 3];
// a[10] = 99;
// console.log(a.length); // 11

// 14.
// var x = 21;
// var fun = function () {
//   console.log(x);
//   var x = 20;
// };
// fun(); // undefined

// 15.
// (function() {
//   var a = b = 5;
// })();
// console.log(typeof b); // number

// // 16.
// console.log(typeof typeof 1); // string

// 17.
// let a = [1,2,3,4];
// let b = a;
// b.push(5);
// console.log(a); //[1,2,3,4,5]

// 18.
// console.log([1,2,3] + [4,5,6]); //1,2,34,5,6

// 19.
// function test() {
//   return
//   {
//     a: 1
//   }
// }
// console.log(test()); // undefined

// 20.
// var a = 1;
// function foo() {
//   console.log(a);
//   var a = 2;
// }
// foo(); // undefined

// 21.
// const obj = {a:1};
// obj.a = 2;
// console.log(obj); // {a: 2}

// 22.
// const obj = {a:1};
// obj = {a:2};
// console.log(obj); // cannot assign const variable again

// 23.
// let data = [2, 1, 0, null, undefined, '', false];
// console.log(data.filter(Boolean)); // [2,1]

// 24.
// console.log(1 < 2 < 3); // true
// console.log(3 > 2 > 1); // false

// 25.
// console.log(typeof null); // object

// 26.
// debugger;
// var foo = "bar";
// (
// function() {
//   var foo = "baz";
//   console.log(foo);
// }()
// ); // baz

// 27.
// let a = 1;
// (function() {
//   let a = 2;
//   console.log(a); // 2
// })();
// console.log(a); // 1

// 28.
// console.log(0.1 + 0.2 == 0.3); // false

// 29. 
// let foo = {
//   bar: function() { return this.baz; },
//   baz: 1
// };
// let baz = foo.bar;
// console.log(baz()); // undefined
// console.log(foo.bar()); // 1

// 30.
// Promise.resolve(1)
//   .then(x => x + 1)
//   .then(x => { throw new Error('Test Error'); })
//   .catch(err => console.log(err.message)); // Test Error

// 31.
// let x = 5;
// console.log(x++); // 5
// console.log(++x); // 7

// 32.
// let obj = { a: { b: 1 } };
// let newObj = { ...obj };
// newObj.a.b = 2;
// console.log(obj.a.b); // 2

// 33.
// let a = [1,2,3];
// let b = [...a];
// b[0] = 99;
// console.log(a[0]); // 

// 34.
// const obj1 = { 'a': 1 };
// const arr = [obj1];
// arr[0].a = 10;
// console.log(obj1.a); // 10

// 35.
// console.log("[] == ![]", [] == ![]); //true

// 36.
// console.log([0] == false); // true

// 37.
// console.log(null == undefined); // true

// 38.
// let a = 5;
// let b = "5";
// console.log(a == b); // true
// console.log(a === b); // false

// 39.
// let set = new Set([1,1,2,2,3,3]);
// console.log(set.size); // 3

// 40.
// const a = { b: 1 };
// Object.freeze(a);
// a.b = 2;
// console.log(a.b); // 1

// 41.
// async function f() {
//   return 3;
// }
// f().then(console.log); //3

// 42.
// function foo(a, b = a) {
//   console.log(a, b);
// }
// foo(1); // 11
// foo(1,2); //12

// 43.
// let arr = [1,2,3];
// arr.length = 1;
// console.log(arr); // [1]

// 44.
// let obj = {
//   get a() { return 1; }
// };
// console.log(obj.a); // 1

// 45.
// const arr = [1,2,3];
// arr[10] = 9;
// console.log(arr.length); // 11

// 46.
// console.log(+true, !'false'); // 1, false

// 47.
// console.log(function(){} instanceof Object); // true

// 48.
// (function() {
//   var a = b = 5;
// })();
// console.log(typeof b); // 5
// console.log(typeof a); // undefined

// 49.
// let f = (x, y, ...rest) => {
//   console.log(rest); // [3,4,5]
// }
// f(1,2,3,4,5);

// 50.
// let name = "World";
// console.log(`Hello, ${name}!`); // Hello World!