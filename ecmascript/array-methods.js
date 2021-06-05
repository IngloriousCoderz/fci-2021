const arr = [1, 2, 3, 4, 5];

arr.forEach(console.log);

const timesTwo = (num) => num * 2;
const isEven = (num) => num % 2 === 0;

const doubles = arr.map(timesTwo);

const doubles = [];
for (const item of arr) {
  const double = item * 2;
  doubles.push(double);
}

const evens = arr.filter(isEven);
const firstEven = arr.find(isEven);
const firstEvenIndex = arr.findIndex(isEven);
const hasEven = arr.some(isEven);
const allEvens = arr.every(isEven);

let sum = 0;
for (const item of arr) {
  sum += item;
}

const sum = arr.reduce((acc, item) => {
  acc += item;
  return acc;
}, 0);

const doubles = arr.reduce((acc, item) => {
  acc.push(timesTwo(item));
  return acc;
}, []);

const evens = arr.reduce((acc, item) => {
  if (isEven(item)) {
    acc.push(item);
  }
  return acc;
}, []);
