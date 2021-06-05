const arr = [1, 2, 3, 4, 5];

const first = arr[0];
const second = arr[1];
const rest = arr.slice(2);

const [first, second, ...rest] = arr;

const arr3 = arr1.concat(arr2);
const arr3 = [...arr1, ...arr2];

const sandwich = [...base, hamburger, ...toppings];

const obj = { a: 1, b: 2, c: 3, d: 4 };

const d = obj.a;
const b = obj.b;
const rest = undefined; // ?

const { a: d, b, ...rest } = obj;

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 4, d: 5 };

const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };

const obj3 = {};
obj3.a = 1;
// obj3.b = 2;
obj3.c = 3;
obj3.b = 4;
obj3.d = 5;

obj3 === { a: 1, b: 4, c: 3, d: 5 };

// shallow copy
const clone = { ...obj };

// deep copy
// 1. recursive function
// 2. use library
// 3. stringify

JSON.parse(JSON.stringify(obj));

// deep compare
JSON.stringify(obj1) === JSON.stringify(obj2);

// rest parameters
function consoleLog(...messages) {
  alert(messages.join(' '));
}