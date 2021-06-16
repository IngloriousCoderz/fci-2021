const arr = [1, 2, 3, 4, 5];

arr.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

arr.forEach(console.log);

const timesTwo = (num) => num * 2;
const square = (num) => num ** 2;
const isEven = (num) => num % 2 === 0;
const sum = (num1, num2) => num1 + num2;

const doubles = arr.map((item) => {
  return item * 2;
});

const doubles = arr.map(timesTwo);
const squares = arr.map(square);

const doubles = [];
for (const item of arr) {
  const double = timesTwo(item);
  doubles.push(double);
}

const evens = arr.filter(isEven);
const firstEven = arr.find(isEven);
const firstEvenIndex = arr.findIndex(isEven);
const hasEven = arr.some(isEven);
const allEvens = arr.every(isEven);

let acc = 0;
for (const item of arr) {
  acc += item;
}
console.log(acc);

acc = 0;
acc += 1 -> 1;
acc += 2 -> 3;
acc += 3 -> 6;

const sum = arr.reduce((acc, item) => {
  acc += item;
  return acc;
}, 0);

const doubles = arr.reduce((acc, item) => {
  const double = timesTwo(item);
  acc.push(double);
  return acc;
}, []);

const evens = arr.reduce((acc, item) => {
  if (isEven(item)) {
    acc.push(item);
  }
  return acc;
}, []);


const sumOfItems = arr.reduce((acc, item) => {
  return acc + item;
});

const sumOfItems = arr.reduce(sum);

acc = 1;
acc += 2 -> 3;
acc += 3 -> 6;

function sumOfSquareEvens(arr) {
  let sum = 0;
  for (const item of arr) {
    if (isEven(item)) {
      sum += square(item);
    }
  }
  return sum;
}

function sumOfSquareEvens(arr) {
  return arr.reduce((acc, item) => {
    if (isEven(item)) {
      acc += square(item);
    }
    return acc;
  }, 0);
}

function sumOfSquareEvens(arr) {
  return arr
    .filter(isEven)
    .map(square)
    .reduce(sum);
}

const hasThree = arr.includes(3);

if (promise.status === 'fulfilled' || promise.status === 'rejected')

if (['fulfilled', 'rejected'].includes(promise.status))

const arr = [
  1,
  2,
  3,
  4,
  5,
]