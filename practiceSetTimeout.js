// https://www.instagram.com/p/DJ6oB8BStHc/
const user = {
  name: "Jyoth",
  greet: function () {
    setTimeout(function () {
      console.log(`I am ${this.name}`);
    }, 100);
  },
};

user.greet();

const user2 = {
  name: "Jyoth",
  greet: function () {
    setTimeout(() => {
      console.log(`I am ${this.name}`);
    }, 100);
  },
};

user2.greet();

const user3 = {
  name: "Jyoth",
  greet: () => {
    setTimeout(() => {
      console.log(`I am ${this.name}`);
    }, 100);
  },
};

user3.greet();

const user4 = {
  name: "Jyoth",
  greet: () => {
    setTimeout(function () {
      console.log(`I am ${this.name}`);
    }, 100);
  },
};

user4.greet();

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
