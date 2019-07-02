// var explanation

var x = 1;

{
  var x = 2;
  console.log(x);
}

{
  var x = 3;
}

console.log(x);

// let explanation

let x = 1;

{
  let x = 2;
  console.log(x);
}

console.log(x);

const x = { a: 1, b: 2 };

x.b = 3;

console.log(x);

const firstName = "Yagnesh";

const lastName = "Modh";

// const fullName = firstName + '\'s ' + lastName;

// console.log(fullName);

const fullName = `${firstName}'s        ${lastName}`;

console.log(fullName);

// string literals

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
// </head>
// <body>

// </body>
// </html>

// const html = "<!DOCTYPE html>" +
// "\n<html lang=\"en\">" +
// "\n<head>" +
//     "\n\t<meta charset=\"UTF-8\">";

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
`;

console.log(html);

// spread operator

const x = { a: 1, b: 2 };

const y = { ...x, c: 3 };

console.log(y);

for (const key in x) {
  if (key === "a") {
    delete x[key];
  }
}

console.log(x);

// destructuring

const x = { a: 1, b: 2, c: 3, d: 4 };

const a = { ...x, c: 3 };

const { a: d, b, ...rest } = x;

console.log(rest);

console.log(d);

const x = [1, 2, 3, 4];

// x.push(5);

// console.log(x);

const y = [0, ...x];

console.log(y);
console.log(x);

const [, , ...rest] = y;
console.log(rest);

const aa = 1;
const bb = "1";

console.log(aa == bb);
console.log(aa === bb);

const x = [1, 2, 4, 5];

// x.push(5);

// console.log(x);

const y = [0, ...x];

console.log(y);
console.log(x);

const [, , ...rest] = y;
console.log(rest);

const index = x.findIndex(function(item) {
  return item === 2;
});

console.log(index);

const newArr = [...x.slice(0, index + 1), 3, ...x.slice(index + 1)];
console.log(newArr);

console.log(x);

const users = [
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "rohit",
    gender: "female"
  },
  {
    name: "dipika",
    gender: "female"
  },
  {
    name: "priyanka",
    gender: "female"
  }
];

const newUser = {
  name: "shikar",
  gender: "male"
};

const newUsers = [newUser, ...users];

console.log(newUsers);

const index = newUsers.findIndex(function(x) {
  return x.name === "rohit";
});

console.log(index);

const updatedUsers = [
  ...newUsers.slice(0, index),
  { ...newUsers[index], gender: "male" },
  ...newUsers.slice(index + 1)
];

const lst = newUsers.filter(function(item) {
  return item.name !== "rohit";
});

const deletedUsers = [
  ...newUsers.slice(0, index),
  ...newUsers.slice(index + 1)
];

console.log(updatedUsers);

console.log(deletedUsers);

// arrow function

// function abc() {
//     return 1;
// }

// console.log(abc());

const add = (a, b) => {
  const c = 3;
  return a + b + c;
};

console.log(add(1, 2));

// class

class Animal {
  constructor(type = "Animal") {
    this.type = type;
  }

  get type() {
    return this._type;
  }

  set type(val) {
    this._type = val.toUpperCase();
  }

  makeSound() {
    console.log(this.type);
    return this.type;
  }
}

const a = new Animal();

console.log(a.makeSound());

class Cat extends Animal {
  constructor() {
    super("Cat");
  }

  makeSound() {
    super.makeSound();
    console.log("Meow...");
  }
}

const b = new Cat();

console.log(b.type);
console.log(b.makeSound());

class Animal {
  constructor(type = "Animal") {
    this.type = type;
  }

  get type() {
    return this._type;
  }

  set type(val) {
    this._type = val.toUpperCase();
  }

  makeSound() {
    // console.log(this.type)
    // return this.type
    setTimeout(() => {
      console.log(this.type);
    }, 1000);
  }
}

const a = new Animal();

console.log(a.makeSound());

class Cat extends Animal {
  constructor() {
    super("Cat");
  }

  makeSound() {
    super.makeSound();
    console.log("Meow...");
  }
}

const b = new Cat();

console.log(b.type);
console.log(b.makeSound());

const arr = [1, 2, 3, 4];

console.time("for loop");
for (let index = 0; index < arr.length; index++) {}
console.timeEnd("for loop");

console.time("forEach loop");
arr.forEach(arr => {});
console.timeEnd("forEach loop");

// map

const users = [
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "dipika",
    gender: "female"
  },
  {
    name: "priyanka",
    gender: "female"
  }
];

let newUsers = [];

for (let index = 0; index < users.length; index++) {
  const element = users[index];
  newUsers = [...newUsers, { ...element, type: "celebrity" }];
}

const newUsers1 = users.map(x => {
  if (x.gender === "male") {
    return { ...x, type: "cricketer" };
  } else {
    return { ...x, type: "actor" };
  }
});

console.log(users);

console.log(newUsers1);

const users = [
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "dipika",
    gender: "female"
  },
  {
    name: "priyanka",
    gender: "female"
  }
];

console.time("for loop");
let newUsers = [];
for (let index = 0; index < users.length; index++) {
  const element = users[index];
  newUsers = [...newUsers, { ...element, type: "celebrity" }];
}
console.timeEnd("for loop");
console.time("map loop");
const newUsers1 = users.map(x => ({ ...x, type: "celebrity" }));
console.timeEnd("map loop");

//   const newUsers1 = users.map(x => {
//      if(x.gender === 'male') {
//          return {...x, type: 'cricketer'}
//      } else {
//         return {...x, type: 'actor'}
//      }

//   })

//   console.log(users);

//   console.log(newUsers1);

const a = [1, 2, 3, 4, 5];

// let sum = 0;

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     sum += element;
// }

// console.log(sum);

const sum = a.reduce((p, c) => p + c);

console.log(sum);

const a = null;

const b = 2;

const c = a || b;

const d = a && b;

console.log(c);
console.log(d);

const users = [
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "dipika",
    gender: "female"
  },
  {
    name: "priyanka",
    gender: "female"
  }
];

//   const abc = {};

//   abc['male'] = [];

//   console.log(abc);

//   {
//       male: [],
//       female: []
//   }

// const groupBy = users.reduce((previous, current) => {
//     previous[current['gender']] = previous[current['gender']] || [];
//     previous[current['gender']].push(current);
//     return previous;
// }, {});

const groupBy = (arr, key) => {
  return arr.reduce((previous, current) => {
    (previous[current[key]] = previous[current[key]] || []).push(current);
    return previous;
  }, {});
};

console.log(groupBy(users, "gender"));

// map set

const x = { a: 1, b: 2, c: 3, d: 4 };

const y = [1, 2, 3, 4, 5];

for (const key in x) {
  console.log(key);
  console.log(x[key]);
  // if (object.hasOwnProperty(key)) {
  //     const element = object[key];

  // }
}

for (let item of y) {
  console.log(item);
}

for (const [key, value] of Object.entries(x)) {
  console.log(key, value);
}

const map = new Map();

map.set("1", "one");
map.set(1, "one numeric");

console.log(map.size);

console.log(map.get("1"));

console.log(map.has(1));

for (const [key, value] of map) {
  console.log(key, value);
}

const set = new Set();

set.add({ a: 1 });
set.add({ b: 2 });

// promise

const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise1 resolved");
    // reject('promise rejected');
  }, 1000);
});

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise2 resolved");
    // reject('promise2 rejected');
  }, 1000);
});

console.log("hello");

// prom1.then(x => {
//     console.log(x)
// }).catch((err) => {
//     console.log(err)
// })

const abc = async () => {
  try {
    // const p1  = await prom1; // 1
    // const p2 = await prom2; // 2
    //   const data =  await Promise.all([prom2, prom1]); // 2 sec
    //   console.log([p1, p2]);
    const data = await Promise.race([prom2, prom1]);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

abc();
console.log("hello1");

// generators

function* xyz() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return 1;
}

const gen = xyz();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

for (const iterator of gen) {
  console.log(iterator);
}

const add = (a, b, c, ...props) => {
  return props.reduce((p, c) => p + c);
};

console.log(add(1, 2, 3, 4, 5, 6, 7));

// const x = { a: 1, b: 2, c: 3, d: 4}

// const add = ({ a,b, ...props }) => {
//     console.log(props)
//     return a + b;
// }

// console.log(add(x));

const calc = (a, b) => {
  return type => {
    return type(a, b);
  };
};

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(calc(1, 2)(multiply));

const a = 1;
const b = 2;

const x = {
  a,
  b,
  c() {
    return this.a + this.b;
  }
};

console.log(x.a);
console.log(x.b);
console.log(x.c());
