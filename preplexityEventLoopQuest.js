let result = 'X';
setTimeout(() => {
  result += 'A';
  Promise.resolve().then(() => {
    result += 'B';
    console.log(result);
  });
}, 0);
Promise.resolve().then(() => {
  result += 'C';
});
result += 'D';
console.log(result);

//======================================================================//

let count1 = 0;
async function updateCount() {
  count1 += 1;
  await Promise.resolve();
  count1 += 1;
  console.log('Inside Async:', count1);
}
updateCount();
setTimeout(() => {
  count1 += 1;
  console.log('Inside setTimeout:', count1);
}, 0);
count1 += 1;
console.log('Synchronous:', count1);

//======================================================================//

let str = '';
async function asyncFunc() {
  str += 'A';
  await new Promise(resolve => setTimeout(resolve, 0));
  str += 'B';
  console.log('AsyncFunc:', str);
}
asyncFunc();
str += 'C';
Promise.resolve().then(() => {
  str += 'D';
  console.log('Promise:', str);
});
str += 'E';
console.log('Synchronous:', str);

//======================================================================//

let num = 0;
Promise.resolve().then(() => {
  num += 1;
  setTimeout(() => {
    num += 1;
    console.log('Timeout inside Promise:', num);
  }, 0);
}).then(() => {
  num += 1;
  console.log('Second then:', num);
});
num += 1;
console.log('Synchronous:', num);

//======================================================================//

let output = '';
(async () => {
  output += 'start-';
  await Promise.resolve();
  output += 'middle-';
  setTimeout(() => {
    output += 'end';
    console.log('Timeout:', output);
  }, 0);
  console.log('After await:', output);
})();
output += 'sync-';
console.log('Initial:', output);

//======================================================================//

let status1 = 'Start';
setTimeout(() => {
  status1 += ' Timeout';
  Promise.resolve().then(() => {
    status1 += ' Promise';
    console.log('Timeout Callback:', status1);
  });
}, 0);
Promise.resolve().then(() => {
  status1 += ' Microtask';
});
status1 += ' End';
console.log('Synchronous:', status1);

//======================================================================//

let count = 0;
async function increment() {
  count += 1;
  await new Promise(resolve => setTimeout(resolve, 0));
  count += 1;
  console.log('After await:', count);
}
increment();
Promise.resolve().then(() => {
  count += 10;
  console.log('Microtask +', count);
});
setTimeout(() => {
  count += 100;
  console.log('Timeout +', count);
}, 0);
count += 5;
console.log('Initial count:', count);

//======================================================================//

let message = 'X';
async function asyncProcess() {
  message += 'A';
  await new Promise(resolve => setTimeout(resolve, 0));
  message += 'B';
  console.log('Async:', message);
}
asyncProcess();
message += 'C';
Promise.resolve().then(() => {
  message += 'D';
  console.log('Promise:', message);
});
message += 'E';
console.log('Sync:', message);

//======================================================================//

let total = 0;
Promise.resolve().then(() => {
  total += 1;
  setTimeout(() => {
    total += 1;
    console.log('Timeout in promise:', total);
  }, 0);
});
Promise.resolve().then(() => {
  total += 2;
  console.log('First then:', total);
});
(async () => {
  total += 3;
  await Promise.resolve();
  total += 4;
  console.log('Async function:', total);
})();
total += 5;
console.log('Final value:', total);

//======================================================================//

let outputStr = '';
(async () => {
  outputStr += 'Start-';
  await Promise.resolve();
  outputStr += 'Middle-';
  setTimeout(() => {
    outputStr += 'End';
    console.log('Timeout:', outputStr);
  }, 0);
  console.log('After await:', outputStr);
})();
outputStr += 'Sync-';
console.log('Initial:', outputStr);