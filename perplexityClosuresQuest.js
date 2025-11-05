const counter1 = createCounter(0);

console.log(counter1()); // 1  
console.log(counter1()); // 2  
console.log(counter1()); // 3  
console.log(counter1()); // 4  

//======================================================================//

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
console.log(double(10)); // 20

//======================================================================//

const account = createBankAccount(100);

account.deposit(50);
console.log(account.getBalance()); // 150

account.withdraw(30);
console.log(account.getBalance()); // 120

//======================================================================//

const mySecret = createSecret('password123');

console.log(mySecret.getSecret()); // 'password123'
mySecret.setSecret('newPassword');
console.log(mySecret.getSecret()); // 'newPassword'

//======================================================================//

const sayHello = createGreeter('Hello');
const sayHi = createGreeter('Hi');

console.log(sayHello('Alice')); // 'Hello, Alice!'
console.log(sayHi('Bob'));      // 'Hi, Bob!'

//======================================================================//

function add(a, b) {
  return a + b;
}

const addOnce = once(add);

console.log(addOnce(2, 3)); // 5
console.log(addOnce(5, 5)); // 5 (still returns first result)

//======================================================================//

const counter = createCounter(5);

console.log(counter()); // 6
console.log(counter()); // 7
counter.reset();
console.log(counter()); // 6

//======================================================================//

function slowSquare(n) {
  console.log('Computing...');
  return n * n;
}

const memoSquare = memoize(slowSquare);

console.log(memoSquare(4)); // Computing... 16
console.log(memoSquare(4)); // 16 (cached, no log)
console.log(memoSquare(5)); // Computing... 25

//======================================================================//

const limiter = createRateLimiter(3);

console.log(limiter('call 1')); // 'call 1'
console.log(limiter('call 2')); // 'call 2'
console.log(limiter('call 3')); // 'call 3'
console.log(limiter('call 4')); // null

//======================================================================//

const timer = createTimer();

timer.start();
// wait 2 seconds
console.log(timer.getElapsed()); // ~2
timer.stop();

//======================================================================//

const calc = createCalculator(10);

const result = calc.add(5).subtract(3).multiply(2).getResult();
console.log(result); // 24

//======================================================================//

function multiply(a, b, c) {
  return a * b * c;
}

const multiplyBy2 = partial(multiply, 2);
console.log(multiplyBy2(3, 4)); // 24 (2 * 3 * 4)

const multiplyBy2And3 = partial(multiply, 2, 3);
console.log(multiplyBy2And3(4)); // 24 (2 * 3 * 4)

//======================================================================//

const history = createHistory();

history.set(10);
history.set(20);
history.set(30);

console.log(history.getCurrent()); // 30
history.undo();
console.log(history.getCurrent()); // 20
history.undo();
console.log(history.getCurrent()); // 10
history.redo();
console.log(history.getCurrent()); // 20

//======================================================================//

const colors = createCycle(['red', 'green', 'blue']);

console.log(colors.next()); // 'red'
console.log(colors.next()); // 'green'
console.log(colors.next()); // 'blue'
console.log(colors.next()); // 'red' (cycles back)
console.log(colors.next()); // 'green'

colors.reset();
console.log(colors.next()); // 'red'

//======================================================================//

const counter2 = createAdvancedCounter(10);

counter2.increment();
console.log(counter2.getValue()); // 11

counter2.decrement();
console.log(counter2.getValue()); // 10

counter2.incrementBy(5);
console.log(counter2.getValue()); // 15

counter2.multiplyBy(2);
console.log(counter2.getValue()); // 30

// Cannot access internal value directly
console.log(counter2.value); // undefined


